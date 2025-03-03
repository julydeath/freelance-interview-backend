import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { neon } from "@neondatabase/serverless";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["https://freelance-interview.vercel.app", "http://localhost:3000"],
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

const sql = neon(process.env.DATABASE_URL);

app.get("/", async (req, res) => {
  const result = await sql`SELECT version()`;
  const { version } = result[0];
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(version);
});

app.get("/api/modules", async (req, res) => {
  const result = await sql`SELECT * FROM modules`;
  res.json(result);
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.json(
      { error: "Name, email, and message are required" },
      { status: 400 }
    );
  }

  try {
    await sql`
    INSERT INTO customers (name, email, message)
    VALUES (${name}, ${email}, ${message})
  `;

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

// Here i am getting module first and making 7 sql queries which is slow (3ms)

// app.get("/api/modules/:slug", async (req, res) => {
//   const { slug } = req.params;

//   const moduleQuery = await sql`SELECT * FROM modules WHERE slug = ${slug}`;

//   console.log({ moduleQuery });

//   if (!moduleQuery) {
//     throw new APIError(404, "Module not found");
//   }

//   const [
//     features,
//     submodules,
//     consultants,
//     tutorials,
//     case_studies,
//     resources,
//     faqs,
//   ] = await Promise.all([
//     sql`SELECT * FROM features WHERE module_id = ${moduleQuery[0].id}`,
//     sql`SELECT s.*, array_agg(sf.feature) as features
//            FROM submodules s
//            LEFT JOIN submodule_features sf ON s.id = sf.submodule_id
//            WHERE s.module_id = ${moduleQuery[0].id}
//            GROUP BY s.id`,

//     sql`SELECT * FROM consultants WHERE module_id = ${moduleQuery[0].id}`,
//     sql`SELECT * FROM tutorials WHERE module_id = ${moduleQuery[0].id}`,
//     sql`SELECT * FROM case_studies WHERE module_id = ${moduleQuery[0].id}`,
//     sql`SELECT * FROM resources WHERE module_id = ${moduleQuery[0].id}`,
//     sql`SELECT * FROM faqs WHERE module_id = ${moduleQuery[0].id}`,
//   ]);

//   console.log({
//     features,
//     submodules,
//     consultants,
//     tutorials,
//     case_studies,
//     resources,
//     faqs,
//   });

//   res.json({
//     ...moduleQuery[0],
//     features,
//     submodules,
//     consultants,
//     tutorials,
//     case_studies,
//     resources,
//     faqs,
//   });
// });

// Instead making single query using join field

app.get("/api/modules/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    console.log(slug);

    const result = await sql`
      SELECT 
        m.*, 
        json_agg(DISTINCT f.*) AS features,
        json_agg(DISTINCT jsonb_build_object(
          'id', s.id,
          'title', s.title,
          'overview', s.overview,
          'benefits', s.benefits,
          'pdfName', s.pdf_name,
          'pdfLink', s.pdf_link,
          'features', sf.features
        )) AS submodules,
        json_agg(DISTINCT c.*) AS consultants,
        json_agg(DISTINCT t.*) AS tutorials,
        json_agg(DISTINCT cs.*) AS case_studies,
        json_agg(DISTINCT r.*) AS resources,
        json_agg(DISTINCT fa.*) AS faqs
      FROM modules m
      LEFT JOIN features f ON f.module_id = m.id
      LEFT JOIN submodules s ON s.module_id = m.id
      LEFT JOIN (
        SELECT sf.submodule_id, json_agg(sf.feature) AS features
        FROM submodule_features sf
        GROUP BY sf.submodule_id
      ) sf ON s.id = sf.submodule_id
      LEFT JOIN consultants c ON c.module_id = m.id
      LEFT JOIN tutorials t ON t.module_id = m.id
      LEFT JOIN case_studies cs ON cs.module_id = m.id
      LEFT JOIN resources r ON r.module_id = m.id
      LEFT JOIN faqs fa ON fa.module_id = m.id
      WHERE m.slug = ${slug}
      GROUP BY m.id;
    `;

    if (result.length === 0) {
      return res.status(404).json({ error: "Module not found" });
    }

    console.log(result[0]);

    res.json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
