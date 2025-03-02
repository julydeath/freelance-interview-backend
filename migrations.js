import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const sql = neon(process.env.DATABASE_URL);

async function createTables() {
  try {
    console.log("Seeding database...");

    //Drop  tables if they exist (to prevent conflicts)
    await sql`
      DROP TABLE IF EXISTS 
        submodule_features, submodules, features, consultants, tutorials, 
        case_studies, resources, faqs, modules 
      CASCADE;
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS modules (
        id SERIAL PRIMARY KEY,
        module_name VARCHAR(1000) NOT NULL,
        module_short_name VARCHAR(10) NOT NULL,
        slug VARCHAR(1000) UNIQUE NOT NULL,
        banner_image VARCHAR(1000),
        headline TEXT,
        subheadline TEXT,
        overview TEXT
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS features (
        id SERIAL PRIMARY KEY,
        module_id INT REFERENCES modules(id) ON DELETE CASCADE,
        title VARCHAR(1000),
        description TEXT,
        icon TEXT
      )
    `;

    await sql`

    CREATE TABLE submodules (
        id SERIAL PRIMARY KEY,
        module_id INT REFERENCES modules(id),
        title VARCHAR(1000),
        overview TEXT,
        benefits TEXT,
        pdf_name VARCHAR(1000),
        pdf_link VARCHAR(1000)
      );
    `;

    //Submodule Features (Many-to-Many with Submodules)

    await sql`
    CREATE TABLE submodule_features (
        submodule_id INT REFERENCES submodules(id),
        feature VARCHAR(1000)
      );
    `;

    //   Consultants Table
    await sql`
    CREATE TABLE consultants (
        id SERIAL PRIMARY KEY,
        module_id INT REFERENCES modules(id),
        name VARCHAR(1000),
        image VARCHAR(1000),
        bio TEXT,
        specialties TEXT,
        email VARCHAR(1000)
      );
      
    `;

    //  Tutorials Table
    await sql`
    CREATE TABLE tutorials (
        id SERIAL PRIMARY KEY,
        module_id INT REFERENCES modules(id),
        title VARCHAR(1000),
        video_url VARCHAR(1000),
        duration VARCHAR(50)
      );
    `;

    //  Case Studies Table
    await sql`
    CREATE TABLE case_studies (
        id SERIAL PRIMARY KEY,
        module_id INT REFERENCES modules(id),
        title TEXT,
        content TEXT,
        link VARCHAR(1000)
      );
    `;

    //  Resources Table
    await sql`
    CREATE TABLE resources (
        id SERIAL PRIMARY KEY,
        module_id INT REFERENCES modules(id),
        title VARCHAR(1000),
        link VARCHAR(1000),
        format VARCHAR(50),
        size VARCHAR(50)
      );
    `;

    //  FAQs Table

    await sql`
    CREATE TABLE faqs (
        id SERIAL PRIMARY KEY,
        module_id INT REFERENCES modules(id),
        question TEXT,
        answer TEXT
      );
    `;

    console.log("Tables created successfully!");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
}

createTables();
