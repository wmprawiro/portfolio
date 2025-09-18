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
    link: "/detail/ecommerce-dashboard",
    description:
      "A comprehensive e-commerce dashboard that revolutionizes online retail management. Built with modern React architecture and TypeScript for type safety, this platform provides real-time analytics, inventory management, and customer insights in an intuitive interface.",
  },
  {
    id: "2",
    title: "PROJECT 2",
    slug: "crypto-trading-app",
    tags: ["coding"],
    image: "/placeholder-project-2.jpg",
    link: "/detail/crypto-trading-app",
    description:
      "Advanced cryptocurrency trading platform featuring real-time market data, portfolio tracking, and automated trading strategies. Integrates with major exchanges and provides sophisticated charting tools for professional traders.",
  },
  {
    id: "3",
    title: "PROJECT 3",
    slug: "portfolio-redesign",
    tags: ["design"],
    image: "/placeholder-project-3.jpg",
    link: "/detail/portfolio-redesign",
    description:
      "Complete redesign of personal portfolio website focusing on modern aesthetics and user experience. Features responsive design, smooth animations, and optimized performance across all devices.",
  },
  {
    id: "4",
    title: "PROJECT 4",
    slug: "defi-protocol-ui",
    tags: ["coding", "design"],
    image: "/placeholder-project-4.jpg",
    link: "/detail/defi-protocol-ui",
    description:
      "Decentralized Finance protocol interface that simplifies complex DeFi interactions. Built with Web3 integration, smart contract interaction, and user-friendly design for both novice and experienced DeFi users.",
  },
  {
    id: "5",
    title: "PROJECT 5",
    slug: "mobile-banking-app",
    tags: ["design"],
    image: "/placeholder-project-5.jpg",
    link: "/detail/mobile-banking-app",
    description:
      "Next-generation mobile banking application design that prioritizes security and user experience. Features biometric authentication, real-time notifications, and intuitive financial management tools.",
  },
  {
    id: "6",
    title: "PROJECT 6",
    slug: "nft-marketplace",
    tags: ["coding"],
    image: "/placeholder-project-6.jpg",
    link: "/detail/nft-marketplace",
    description:
      "Full-featured NFT marketplace built on Ethereum blockchain. Supports minting, trading, and showcasing digital assets with integrated wallet connectivity and smart contract functionality.",
  },
];
