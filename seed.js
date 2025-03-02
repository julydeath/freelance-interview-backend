import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const sql = neon(process.env.DATABASE_URL);

const sampleData = [
  {
    moduleName: "SAP Transportation Management (TM) Module",
    moduleShortName: "TM",
    slug: "tm",
    bannerImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    headline: "Streamline Your Logistics with SAP TM",
    subheadline:
      "Optimize transportation processes and reduce logistics costs.",
    overview:
      "SAP Transportation Management (TM) is designed to enhance freight, fleet, and logistics management for businesses of all sizes. It offers tools for planning, executing, and settling transportation processes, increasing visibility and control over the transportation chain.",
    features: [
      {
        title: "Transportation Planning",
        description: "Optimize routes and loads for maximum efficiency.",
        icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
      },
      {
        title: "Freight Cost Management",
        description: "Minimize expenses and improve profitability.",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      },
      {
        title: "Integration",
        description:
          "Seamless interaction with other SAP modules like SD and MM.",
        icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
      },
    ],
    subModules: [
      {
        title: "Transportation Planning and Execution",
        overview:
          "Plan and execute transportation of goods efficiently to ensure timely delivery.",
        features: [
          "Route optimization",
          "Carrier selection",
          "Freight booking",
          "Real-time tracking",
        ],
        benefits: "Reduces transportation costs and improves delivery times.",
        pdfName: "Advanced Planning in SAP TM",
        pdfLink: "/pdfs/sap-tm-advanced-planning.pdf",
      },
      {
        title: "Freight Cost Management",
        overview:
          "Manage and monitor freight costs to ensure profitability and compliance.",
        features: [
          "Freight cost calculation",
          "Settlement processes",
          "Invoicing",
          "Cost analysis reporting",
        ],
        benefits:
          "Enhances transparency in freight costing and improves dispute management.",
        pdfName: "Cost Management Strategies in SAP TM",
        pdfLink: "/pdfs/sap-tm-cost-management.pdf",
      },
      {
        title: "Transportation Compliance and Risk Management",
        overview:
          "Ensure compliance with international transportation regulations and manage risks.",
        features: [
          "Compliance checks",
          "Risk assessment tools",
          "Safety management",
          "Documentation automation",
        ],
        benefits:
          "Reduces legal risks and ensures safe transportation practices.",
        pdfName: "Compliance and Risk Management in SAP TM",
        pdfLink: "/pdfs/sap-tm-compliance.pdf",
      },
    ],
    consultants: {
      introduction:
        "Meet our team of dedicated SAP TM experts who bring in-depth expertise and industry experience to optimize your logistics and transportation operations.",
      profiles: [
        {
          name: "Emily Tran",
          image:
            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          bio: "Emily has over 10 years of experience in logistics and transportation management, specializing in SAP TM implementations across Europe and Asia.",
          specialties:
            "Route optimization, cost reduction strategies, compliance management",
          email: "emily.tran@example.com",
        },
        {
          name: "Markus Weber",
          image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          bio: "Markus's expertise spans 15 years, focusing on integrating SAP TM with global supply chain systems to enhance operational efficiencies.",
          specialties:
            "Global logistics integration, freight management, risk assessment",
          email: "markus.weber@example.com",
        },
      ],
    },
    tutorials: [
      {
        title: "Getting Started with SAP TM: A Beginner's Guide",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "15 minutes",
      },
      {
        title: "Advanced Route Optimization Techniques",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "20 minutes",
      },
    ],
    caseStudies: {
      introduction:
        "Explore how leading global firms have transformed their logistics operations using SAP TM.",
      cases: [
        {
          title:
            "How a leading manufacturer reduced freight costs by 20% using SAP TM",
          content:
            "A global manufacturing company with operations in 15 countries was struggling with rising transportation costs and inefficient route planning. After implementing SAP TM, they were able to optimize carrier selection and consolidate shipments, resulting in a 20% reduction in overall freight costs within the first year.",
          link: "/case-studies/manufacturing-freight-optimization",
        },
        {
          title: "Improving delivery reliability from 82% to 96% with SAP TM",
          content:
            "A retail distribution company faced challenges meeting customer delivery windows, with on-time delivery rates averaging only 82%. By implementing SAP TM's advanced planning and real-time tracking capabilities, they improved visibility across their supply chain and increased on-time delivery rates to 96%.",
          link: "/case-studies/retail-delivery-improvement",
        },
      ],
    },
    resources: [
      {
        title: "SAP TM Quick Start Guide",
        link: "/resources/sap-tm-quick-start.pdf",
        format: "PDF",
        size: "2.5 MB",
      },
      {
        title: "Freight and Logistics Optimization Handbook",
        link: "/resources/logistics-optimization-handbook.pdf",
        format: "PDF",
        size: "4.1 MB",
      },
      {
        title: "Integration Roadmap: SAP TM with ERP Systems",
        link: "/resources/sap-tm-integration.pdf",
        format: "PDF",
        size: "3.2 MB",
      },
      {
        title: "Transportation Cost Analysis Templates",
        link: "/resources/transportation-cost-templates.xlsx",
        format: "Excel",
        size: "1.8 MB",
      },
    ],
    faqs: [
      {
        question:
          "What are the best practices for implementing SAP TM in a multinational company?",
        answer:
          "For multinational implementations, we recommend a phased approach starting with a pilot in one region. Standardize core processes while allowing for regional variations in compliance requirements. Ensure you have local expertise in each region and strong global project governance. Data harmonization across regions is often the biggest challenge, so allocate sufficient resources to master data management.",
      },
      {
        question:
          "How can SAP TM reduce transportation costs and improve delivery times?",
        answer:
          "SAP TM reduces costs through optimized route planning, load consolidation, and carrier selection based on cost and performance. The system can identify opportunities to combine shipments, reducing the number of trips. Real-time visibility helps identify and address delays promptly, while predictive analytics help anticipate issues before they impact delivery times.",
      },
      {
        question:
          "What is the typical ROI timeframe for an SAP TM implementation?",
        answer:
          "Most organizations see a return on investment within 12-18 months after implementation. Initial benefits come from freight cost reduction (typically 8-15%) and administrative efficiency gains. Longer-term benefits include improved customer satisfaction from better delivery performance and strategic advantages from enhanced supply chain visibility.",
      },
    ],
  },
  {
    moduleName: "SAP Sales and Distribution (SD) Module",
    moduleShortName: "SD",
    slug: "sd",
    bannerImage: "https://images.unsplash.com/",
    headline: "Optimize Your Sales and Distribution with SAP SD",
    subheadline:
      "Streamline order-to-cash processes and improve customer satisfaction.",
    overview:
      "SAP Sales and Distribution (SD) is a core functional module in SAP ERP that helps organizations manage and execute the processes of order-to-cash, including selling, shipping, and billing products and services. It's designed to facilitate the transactions involved in selling, shipping, and invoicing customers.",
    features: [
      {
        title: "Comprehensive Sales Management",
        description: "Managing the entire order-to-cash cycle efficiently.",
        icon: "M3 12h18v2H3v-2zm0 2h18v2H3v-2zm0 2h18v2H3v-2zm0 2h18v2H3v-2z",
      },
      {
        title: "Flexible Pricing",
        description: "Including discounts, surcharges, and tax calculations.",
        icon: "M12 10l4-4h-3V4h-2v2H8l4 4z",
      },
      {
        title: "Integration with Other Modules",
        description: "Seamless data flow with MM and FI modules.",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1",
      },
    ],
    subModules: [
      {
        title: "Sales Order Processing",
        overview:
          "Manage customer orders from placement to delivery with enhanced tracking and fulfillment capabilities.",
        features: ["Order creation", "Pricing", "Credit management"],
        benefits:
          "Reduces order processing time and improves customer service.",
        pdfName: "Optimizing Sales Order Processing in SAP SD",
        pdfLink: "/pdfs/sap-sd-sales-order-processing.pdf",
      },
      {
        title: "Billing and Invoice Management",
        overview:
          "Generate accurate and timely invoices directly from the delivered orders.",
        features: ["Invoice creation", "Account assignment", "Tax processing"],
        benefits: "Improves cash flow and reduces errors in billing.",
        pdfName: "Mastering Billing in SAP SD",
        pdfLink: "/pdfs/sap-sd-billing-management.pdf",
      },
      {
        title: "Shipping and Transportation",
        overview:
          "Efficient management of shipping processes to ensure timely delivery of products.",
        features: [
          "Delivery processing",
          "Shipment scheduling",
          "Transportation management",
        ],
        benefits:
          "Optimizes logistics operations and reduces transportation costs.",
        pdfName: "Effective Shipping Strategies in SAP SD",
        pdfLink: "/pdfs/sap-sd-shipping-strategies.pdf",
      },
      {
        title: "Credit Management",
        overview:
          "Manage and monitor the credit provided to customers to minimize financial risk.",
        features: [
          "Credit limit check",
          "Risk management",
          "Customer credit group",
        ],
        benefits:
          "Prevents revenue loss due to customer non-payment and enhances financial stability.",
        pdfName: "Credit Management Essentials in SAP SD",
        pdfLink: "/pdfs/sap-sd-credit-management.pdf",
      },
    ],
    consultants: {
      introduction:
        "Meet our team of dedicated SAP SD experts who bring in-depth expertise to transform your sales and distribution operations.",
      profiles: [
        {
          name: "Sophia Lee",
          image:
            "https://images.unsplash.com/photo-1586528105365-b2c9f9f03b32?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhY2h8OXx8Y2xpZW50cyUyMHBhbm5lZCUyMHdpdGglMjBzYWwlMjBhbmQlMjBkaXN0cmlidXRpb258ZW58MHx8fHwxNjU4NzgxNzYw&ixlib=rb-1.2.1&q=80&w=1080",
          bio: "Sophia has 12 years of experience in sales and distribution optimization, specializing in SAP SD implementation for retail and manufacturing companies.",
          specialties:
            "Sales order processing, billing optimization, credit management",
          email: "sophia.lee@example.com",
        },
        {
          name: "David Walker",
          image:
            "https://images.unsplash.com/photo-1544832350-13d2a0cded2f?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhY2h8M3x8Y29tcGxleCUyMG5hbWVkJTIwY2xpZW50cyUyMHBhbm5lZCUyMHdpdGglMjBzYWwlMjBhbmQlMjBkaXN0cmlidXRpb258ZW58MHx8fHwxNjU4NzgxNzYw&ixlib=rb-1.2.1&q=80&w=1080",
          bio: "David has 18 years of experience in SAP SD and supply chain management, helping global companies integrate sales processes with ERP systems.",
          specialties:
            "ERP integration, shipping and transportation, pricing strategies",
          email: "david.walker@example.com",
        },
      ],
    },
    tutorials: [
      {
        title: "How to Manage Orders Efficiently in SAP SD",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "12 minutes",
      },
    ],
    caseStudies: {
      introduction:
        "Discover how leading companies have optimized their sales and distribution operations using SAP SD.",
      cases: [
        {
          title:
            "How a retail company improved order processing time by 25% with SAP SD",
          content:
            "A global retail company faced inefficiencies in managing customer orders, leading to delays and dissatisfied customers. After implementing SAP SD, they streamlined their order processing, reducing processing time by 25% and improving customer satisfaction.",
          link: "/case-studies/retail-order-processing",
        },
        {
          title: "Enhancing billing accuracy and reducing errors with SAP SD",
          content:
            "A large electronics company faced significant billing errors in their order-to-cash cycle. SAP SD automated invoice generation, reducing errors and improving billing accuracy by 30%.",
          link: "/case-studies/electronics-billing-improvement",
        },
      ],
    },
    resources: [
      {
        title: "SAP SD Quick Start Guide",
        link: "/resources/sap-sd-quick-start.pdf",
        format: "PDF",
        size: "3.0 MB",
      },
      {
        title: "Optimizing Sales Order Processing Handbook",
        link: "/resources/sales-order-optimization-handbook.pdf",
        format: "PDF",
        size: "4.5 MB",
      },
      {
        title: "Credit Management Best Practices",
        link: "/resources/credit-management-best-practices.pdf",
        format: "PDF",
        size: "2.0 MB",
      },
      {
        title: "Billing and Invoicing Templates",
        link: "/resources/billing-templates.xlsx",
        format: "Excel",
        size: "1.5 MB",
      },
    ],
    faqs: [
      {
        question:
          "What are the best practices for implementing SAP SD in a large organization?",
        answer:
          "We recommend starting with a pilot phase for one department or region, followed by a phased rollout to other areas. Ensure a strong project team with expertise in SAP SD, data management, and business processes to ensure a smooth transition and minimize disruptions.",
      },
      {
        question: "How does SAP SD improve order-to-cash processes?",
        answer:
          "SAP SD streamlines order processing by automating order creation, pricing, and billing, ensuring accuracy and reducing manual intervention. It also integrates with inventory and logistics modules to ensure efficient fulfillment and timely delivery, ultimately improving cash flow and customer satisfaction.",
      },
      {
        question: "How long does it typically take to implement SAP SD?",
        answer:
          "Implementation timelines can vary depending on the complexity of the organization and its requirements, but most SAP SD implementations take between 6 to 12 months for full deployment.",
      },
    ],
  },
  {
    moduleName: "SAP Financial Accounting (FI) Module",
    moduleShortName: "FI",
    slug: "fi",
    bannerImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    headline: "Optimize Your Financial Processes with SAP FI",
    subheadline:
      "Manage financial transactions and reporting with ease and accuracy.",
    overview:
      "SAP Financial Accounting (FI) is a cornerstone module designed for companies to manage their financial transactions and reporting with accuracy and ease. As part of SAP ERP, it integrates seamlessly with other modules, offering a comprehensive view of your financial landscape to ensure compliance and informed decision-making.",
    features: [
      {
        title: "Real-time Financial Processing",
        description:
          "Instant access to financial data ensures timely decision-making.",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1",
      },
      {
        title: "Scalability",
        description:
          "Adapts to the growing and changing needs of your business.",
        icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
      },
      {
        title: "Comprehensive Integration",
        description:
          "Works fluidly with other SAP modules like MM, SD, and HR to ensure data consistency and accuracy.",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1",
      },
    ],
    subModules: [
      {
        title: "General Ledger (GL)",
        overview:
          "The backbone of your financial information system, recording all business transactions in a way that offers you financial statements at any time.",
        features: [
          "Ledger maintenance",
          "Tax calculation",
          "Financial closing activities",
        ],
        benefits:
          "Ensures accuracy and up-to-date financial information for global reporting standards.",
        pdfName: "Mastering the General Ledger in SAP FI",
        pdfLink: "/pdfs/sap-fi-general-ledger.pdf",
      },
      {
        title: "Accounts Payable (AP)",
        overview:
          "Manages your liabilities to vendors and creditors with efficiency and accuracy.",
        features: [
          "Automated invoice processing",
          "Integrated payment operations",
          "Vendor account management",
        ],
        benefits:
          "Optimizes your payment processes and improves your cash flow management.",
        pdfName: "Optimizing Accounts Payable Operations",
        pdfLink: "/pdfs/sap-fi-accounts-payable.pdf",
      },
      {
        title: "Accounts Receivable (AR)",
        overview:
          "Handles incoming money, managing customer invoices and payments effectively.",
        features: [
          "Billing and invoice management",
          "Credit monitoring",
          "Receipt and payment allocation",
        ],
        benefits:
          "Speeds up your cash collection processes, enhancing liquidity.",
        pdfName: "Leveraging Accounts Receivable in SAP FI",
        pdfLink: "/pdfs/sap-fi-accounts-receivable.pdf",
      },
      {
        title: "Asset Accounting (AA)",
        overview:
          "Monitors and manages your company’s fixed assets, from procurement to disposal.",
        features: [
          "Asset tracking",
          "Depreciation accounting",
          "Asset retirement",
        ],
        benefits:
          "Provides precise asset valuation and depreciation calculations compliant with financial reporting regulations.",
        pdfName: "Effective Management of Fixed Assets",
        pdfLink: "/pdfs/sap-fi-asset-accounting.pdf",
      },
      {
        title: "Bank Accounting (BA)",
        overview:
          "Facilitates all transactions with your bank, ensuring accurate management of financial transactions.",
        features: [
          "Bank statement processing",
          "Cash balance management",
          "Payment transactions",
        ],
        benefits:
          "Streamlines bank communications and cash management, reducing errors and ensuring accuracy.",
        pdfName: "Bank Accounting with SAP FI",
        pdfLink: "/pdfs/sap-fi-bank-accounting.pdf",
      },
    ],
    consultants: {
      introduction:
        "Our team of SAP FI consultants brings decades of industry experience and a proven track record of success. Meet the experts who can help transform your financial processes:",
      profiles: [
        {
          name: "John Doe",
          image:
            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          bio: "With over 15 years of experience in SAP FI, John has led numerous successful implementations across global industries. His deep expertise in financial structuring and strategic implementations has been pivotal in driving growth.",
          specialties:
            "General Ledger Expertise, Financial Reporting Innovations, Regulatory Compliance Mastery",
          email: "john.doe@example.com",
        },
        {
          name: "Jane Smith",
          image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          bio: "Jane specializes in streamlining accounts receivable and payable processes, enhancing cash flow management for our clients. With 12 years of hands-on experience, she has transformed financial operations with her innovative approaches and solutions.",
          specialties:
            "Accounts Receivable Optimization, Accounts Payable Efficiency, Asset Lifecycle Management",
          email: "jane.smith@example.com",
        },
      ],
    },
    tutorials: [
      {
        title: "How to Set Up the General Ledger in SAP FI",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "10 minutes",
      },
      {
        title: "Understanding Accounts Payable in SAP FI",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "15 minutes",
      },
    ],
    caseStudies: {
      introduction:
        "Discover how global enterprises are transforming their financial workflows with SAP FI.",
      cases: [
        {
          title:
            "How a multinational manufacturing firm streamlined its financial operations",
          content:
            "A multinational manufacturing firm enhanced its financial reporting and operational efficiency by implementing SAP FI. This led to a significant reduction in financial close times and improved reporting accuracy across its global operations.",
          link: "/case-studies/manufacturing-financial-streamlining",
        },
      ],
    },
    resources: [
      {
        title: "End-of-Year Financial Checklist",
        link: "/resources/financial-checklist.pdf",
        format: "PDF",
        size: "1.5 MB",
      },
      {
        title: "SAP FI User Guide",
        link: "/resources/sap-fi-user-guide.pdf",
        format: "PDF",
        size: "4.5 MB",
      },
      {
        title: "Financial Compliance and Reporting Standards eBook",
        link: "/resources/financial-compliance-reporting-standards.pdf",
        format: "PDF",
        size: "3.8 MB",
      },
    ],
    faqs: [
      {
        question:
          "How can I integrate SAP FI with other ERP modules effectively?",
        answer:
          "To integrate SAP FI with other ERP modules, ensure proper master data synchronization, maintain consistent tax and reporting configurations, and use predefined interfaces to facilitate data flow between the modules.",
      },
      {
        question:
          "What are the security features in SAP FI to protect financial data?",
        answer:
          "SAP FI employs role-based access controls, encrypted data transmission, audit logs, and secure user authentication protocols to ensure the protection of financial data and compliance with security standards.",
      },
    ],
    contactForm: {
      title:
        "Have more questions? Fill out this form to get in touch with our SAP FI experts.",
    },
  },
  {
    moduleName: "SAP Controlling (CO) Module",
    moduleShortName: "CO",
    slug: "co",
    bannerImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    headline: "Optimize Your Costing and Profitability with SAP CO",
    subheadline:
      "Manage, control, and analyze your business’s financial performance effectively.",
    overview:
      "SAP Controlling (CO) supports coordinated monitoring, reporting, and planning of processes involved in business management. This module helps your organization manage and streamline its costing, budgeting, performance analysis, and profitability.",
    features: [
      {
        title: "Cost Elements and Cost Centers",
        description: "Detailed tracking and management of costs.",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1",
      },
      {
        title: "Profit Center Accounting",
        description:
          "Monitor and report on profit centers to optimize profitability.",
        icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
      },
      {
        title: "Integration with SAP FI",
        description:
          "Seamless interaction with Financial Accounting to ensure comprehensive financial control.",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1",
      },
    ],
    subModules: [
      {
        title: "Cost Element Accounting",
        overview:
          "Manage and analyze different types of costs associated with business operations.",
        features: ["Cost recording", "Category management"],
        benefits: "Enhances transparency and control over internal costs.",
        pdfName: "Understanding Cost Element Accounting in SAP CO",
        pdfLink: "/pdfs/sap-co-cost-element-accounting.pdf",
      },
      {
        title: "Cost Center Accounting",
        overview:
          "Responsible for controlling costs and evaluating performance within specific business segments.",
        features: ["Budget management", "Variance analysis"],
        benefits: "Improves budget adherence and operational efficiency.",
        pdfName: "Cost Center Management Guide",
        pdfLink: "/pdfs/sap-co-cost-center-accounting.pdf",
      },
      {
        title: "Profit Center Accounting",
        overview:
          "Tracks profit and loss by business segment, supporting effective decision-making and financial reporting.",
        features: ["Profit tracking", "Segment reporting"],
        benefits:
          "Aids in identifying profitable areas and potential improvements.",
        pdfName: "Optimizing Profit Center Operations",
        pdfLink: "/pdfs/sap-co-profit-center-accounting.pdf",
      },
    ],
    consultants: {
      introduction:
        "Our SAP CO consultants are seasoned professionals dedicated to enhancing your financial control and profitability.",
      profiles: [
        {
          name: "Anna Lee",
          image:
            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          bio: "Anna has over 20 years of experience in financial controlling, specializing in cost management and profitability analysis within SAP CO.",
          specialties:
            "Strategic cost management, performance analysis, profit optimization",
          email: "anna.lee@example.com",
        },
        {
          name: "Raj Patel",
          image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          bio: "Raj brings innovative cost control solutions to complex business environments, helping clients enhance operational and financial efficiency with SAP CO.",
          specialties: "Cost analysis, budgeting strategies, internal audits",
          email: "raj.patel@example.com",
        },
      ],
    },
    tutorials: [
      {
        title: "Effective Cost Management with SAP CO",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "10 minutes",
      },
    ],
    caseStudies: {
      introduction:
        "See how our clients have transformed their financial processes and profitability with SAP CO.",
      cases: [
        {
          title:
            "Case Study: A leading manufacturer reduces operational costs by 25% using SAP CO",
          content:
            "A leading manufacturer reduced operational costs by 25% by implementing SAP CO, resulting in more accurate financial forecasting and optimized budgeting practices.",
          link: "/case-studies/manufacturer-cost-reduction",
        },
      ],
    },
    resources: [
      {
        title: "SAP CO Quick Reference Guide",
        link: "/resources/sap-co-quick-reference-guide.pdf",
        format: "PDF",
        size: "1.2 MB",
      },
      {
        title: "Strategic Cost Management Workbook",
        link: "/resources/strategic-cost-management-workbook.pdf",
        format: "PDF",
        size: "2.5 MB",
      },
    ],
    faqs: [
      {
        question:
          "What are the best practices for setting up cost centers in SAP CO?",
        answer:
          "Best practices include aligning cost centers with organizational structures, defining clear budgetary boundaries, and regularly performing variance analysis to ensure optimal financial control.",
      },
      {
        question:
          "How can SAP CO help in achieving more accurate profitability analysis?",
        answer:
          "SAP CO provides detailed tracking of costs and revenues by cost and profit centers, enabling businesses to conduct precise profitability analysis and identify areas for cost optimization.",
      },
    ],
    contactForm: {
      title:
        "Have more questions? Fill out this form to get in touch with our SAP CO experts.",
    },
  },
];

// const flatData = [
//   /* Your second flat data structure here */
// ];

async function seedDatabase() {
  try {
    await sql`BEGIN`;

    // Clear existing data
    await sql`
        TRUNCATE TABLE 
          submodule_features, 
          features, 
          submodules, 
          consultants, 
          tutorials, 
          case_studies, 
          resources, 
          faqs, 
          modules 
        RESTART IDENTITY CASCADE
      `;

    for (const {
      moduleName,
      moduleShortName,
      slug,
      bannerImage,
      headline,
      subheadline,
      overview,
      features,
      subModules,
      consultants,
      tutorials,
      caseStudies,
      resources,
      faqs,
    } of sampleData) {
      // Insert module
      const [modRes] = await sql`
          INSERT INTO modules (
            module_name, module_short_name, slug, banner_image, 
            headline, subheadline, overview
          ) VALUES (${moduleName}, ${moduleShortName}, ${slug}, 
                    ${bannerImage}, ${headline}, ${subheadline}, ${overview})
          RETURNING id
        `;
      const moduleId = modRes.id;

      // Insert features
      await Promise.all(
        features.map(
          (f) =>
            sql`
              INSERT INTO features (module_id, title, description, icon)
              VALUES (${moduleId}, ${f.title}, ${f.description}, ${f.icon})
            `
        )
      );

      // Insert submodules and their features
      for (const sub of subModules) {
        const [subRes] = await sql`
            INSERT INTO submodules (
              module_id, title, overview, benefits, pdf_name, pdf_link
            ) VALUES (${moduleId}, ${sub.title}, ${sub.overview}, 
                      ${sub.benefits}, ${sub.pdfName}, ${sub.pdfLink})
            RETURNING id
          `;
        const subId = subRes.id;

        await Promise.all(
          sub.features.map(
            (feature) =>
              sql`
                INSERT INTO submodule_features (submodule_id, feature)
                VALUES (${subId}, ${feature})
              `
          )
        );
      }

      // Insert consultants
      await Promise.all(
        consultants.profiles.map(
          (c) =>
            sql`
              INSERT INTO consultants (
                module_id, name, image, bio, specialties, email
              ) VALUES (${moduleId}, ${c.name}, ${c.image}, 
                        ${c.bio}, ${c.specialties}, ${c.email})
            `
        )
      );

      // Insert tutorials
      await Promise.all(
        tutorials.map(
          (t) =>
            sql`
              INSERT INTO tutorials (module_id, title, video_url, duration)
              VALUES (${moduleId}, ${t.title}, ${t.videoUrl}, ${t.duration})
            `
        )
      );

      // Insert case studies
      await Promise.all(
        caseStudies.cases.map(
          (c) =>
            sql`
              INSERT INTO case_studies (module_id, title, content, link)
              VALUES (${moduleId}, ${c.title}, ${c.content}, ${c.link})
            `
        )
      );

      // Insert resources
      await Promise.all(
        resources.map(
          (r) =>
            sql`
              INSERT INTO resources (module_id, title, link, format, size)
              VALUES (${moduleId}, ${r.title}, ${r.link}, ${r.format}, ${r.size})
            `
        )
      );

      // Insert FAQs
      await Promise.all(
        faqs.map(
          (f) =>
            sql`
              INSERT INTO faqs (module_id, question, answer)
              VALUES (${moduleId}, ${f.question}, ${f.answer})
            `
        )
      );
    }

    await sql`COMMIT`;
    console.log("Database seeding completed successfully.");
  } catch (error) {
    await sql`ROLLBACK`;
    console.error("Error seeding database:", error);
  }
}

seedDatabase();
