export interface Project {
  id: string;
  title: string;
  slug: string;
  tags: ("coding" | "design")[];
  image: string;
  link: string;
  description: string;
  problem?: string;
  impact?: string;
  techStack?: string[];
  infrastructure?: string[];
  integrations?: string[];
  goals?: string[];
  liveUrl?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Ugame Indonesia",
    slug: "ugame-indonesia",
    tags: ["coding", "design"],
    image: "/placeholder-project-1.jpg",
    link: "/detail/ugame-indonesia",
    description:
      "An automated game top-up and digital voucher service platform engineered for seamless, low-latency transactions. Built to serve gamers across Indonesia, the system is designed to process real-time purchases with a high degree of reliability and uptime.\n\nThe core architecture emphasizes clean, scalable code and robust system integration. By separating the application logic from the server configuration, the platform efficiently handles concurrent transaction requests while maintaining a highly responsive user interface.\n\nEvery component, from the frontend client to the reverse proxy, is optimized to deliver a fast, secure, and automated checkout experience without bottlenecks.",
    problem:
      "Gamers in Indonesia often faced slow, manual, or unreliable top-up processes, leading to high transaction abandonment rates. The system needed a robust architecture to handle concurrent transactions without manual bottlenecks.",
    impact:
      "Delivered a highly reliable digital goods ecosystem with zero manual intervention, resulting in significantly faster checkout times and the capability to securely process high-volume, concurrent micro-transactions at scale.",
    techStack: ["Next.js / React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    infrastructure: ["Docker", "Nginx (Reverse Proxy)", "Cloudflare"],
    integrations: [
      "Digiflazz API (Digital Product Fulfillment)",
      "Duitku API (Automated Payment Gateway)",
    ],
    goals: [
      "The primary objective was to engineer a fully automated digital goods ecosystem that operates with zero manual intervention. By isolating the infrastructure configuration and leveraging reliable third-party APIs, the platform achieves high-speed, secure transaction processing at scale.",
      "Minimize manual errors in order processing.",
      "Expand payment options and support dynamic discounting."
    ],
    liveUrl: "https://ugame.id",
    images: ["ugame-user-flow.jpg", "ugame-dashboard-ui.jpg"]
  },
  {
    id: "2",
    title: "ASTRAPAY CHATPAY (Top 10 AstraPay Hackathon 2026)",
    slug: "astrapay-chatpay",
    tags: ["coding", "design"],
    image: "/placeholder-project-2.jpg",
    link: "/detail/astrapay-chatpay",
    description:
      "A conversational commerce solution engineered to bridge the gap between social selling and seamless checkout. This platform empowers merchants to integrate their WhatsApp business operations directly with AstraPay's payment ecosystem, enabling the generation of instant, secure payment links within customer chat threads.\n\nRecognized as a Top 10 Finalist at the AstraPay Hackathon 2026, the project showcases an innovative approach to micro-transactions. The implementation focuses on building a highly interactive React prototype that demonstrates real-time payment link generation, smooth user flows, and reliable transaction handling.\n\nThe architecture emphasizes connecting messaging interfaces with financial gateways, ensuring that merchants can create invoices and receive payments without forcing customers to leave their preferred chat application.",
    problem:
      "Social media merchants and their buyers suffered from significant payment friction. Customers were forced to leave their preferred chat application (WhatsApp) to complete purchases, which reduced conversion rates and posed security concerns.",
    impact:
      "Achieved a Top 10 Finalist position at the AstraPay Hackathon 2026. The solution successfully minimized payment friction by keeping the entire checkout flow conversational, empowering merchants to securely generate instant invoices directly in chat.",
    techStack: ["Vite", "Tailwind CSS"],
    integrations: [
      "AstraPay API (Payment Link Generation)",
      "WhatsApp Business API",
    ],
    goals: [
      "The primary objective was to accelerate the checkout process for social media merchants. By integrating AstraPay directly into the WhatsApp environment, the solution minimizes payment friction, enhances transaction security, and provides a streamlined conversational checkout experience for both sellers and buyers."
    ],
    liveUrl: "https://github.com/wmprawiro/astrapay-hackathon-2026/tree/main/frontend",
  },
  {
    id: "3",
    title: "Fee Management System",
    slug: "fee-management-system",
    tags: ["design"],
    image: "",
    link: "/detail/fee-management-system",
    description: "An internal enterprise dashboard designed for PT Finnet Indonesia to configure and manage complex B2B transaction fees.",
    problem: "Previously, any changes to partner fee structures required the Finnet team to directly manipulate the database. This lack of a dedicated interface was highly risky, prone to manual data-entry errors, and made the database vulnerable. Additionally, there was a constant friction in aligning business stakeholder expectations with the engineering team's output.",
    impact: "Provided a sterile, user-friendly interface that completely eliminated the need for business teams to access the database directly. Significantly improved cross-functional communication by assisting the PM in translating stakeholder requirements into clear, testable UI/UX flows.",
    techStack: ["Figma", "UI/UX Design", "Wireframing"],
    goals: [
      "Design an intuitive interface for configuring transaction fees to keep the database sterile and secure.",
      "Bridge the communication gap between Product Managers, stakeholders, and the engineering team."
    ]
  }
];
