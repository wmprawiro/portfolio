export interface Project {
  id: string;
  title: string;
  slug: string;
  tags: ("coding" | "design")[];
  image: string;
  link: string;
  description?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "PROJECT 1",
    slug: "ecommerce-dashboard",
    tags: ["coding", "design"],
    image: "/placeholder-project-1.jpg",
    link: "#",
    description: "Modern e-commerce dashboard with React and TypeScript",
  },
  {
    id: "2",
    title: "PROJECT 2",
    slug: "crypto-trading-app",
    tags: ["coding"],
    image: "/placeholder-project-2.jpg",
    link: "#",
    description: "Real-time cryptocurrency trading application",
  },
  {
    id: "3",
    title: "PROJECT 3",
    slug: "portfolio-redesign",
    tags: ["design"],
    image: "/placeholder-project-3.jpg",
    link: "#",
    description: "Personal portfolio website redesign concept",
  },
  {
    id: "4",
    title: "PROJECT 4",
    slug: "defi-protocol-ui",
    tags: ["coding", "design"],
    image: "/placeholder-project-4.jpg",
    link: "#",
    description: "DeFi protocol interface with Web3 integration",
  },
  {
    id: "5",
    title: "PROJECT 5",
    slug: "mobile-banking-app",
    tags: ["design"],
    image: "/placeholder-project-5.jpg",
    link: "#",
    description: "Mobile banking application UI/UX design",
  },
  {
    id: "6",
    title: "PROJECT 6",
    slug: "nft-marketplace",
    tags: ["coding"],
    image: "/placeholder-project-6.jpg",
    link: "#",
    description: "NFT marketplace built with Next.js and Ethereum",
  },
];
