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
    title: "プロジェクト１",
    slug: "ecommerce-dashboard",
    tags: ["coding", "design"],
    image: "/placeholder-project-1.jpg",
    link: "#",
    description: "ReactとTypeScriptによるモダンなEコマースダッシュボード",
  },
  {
    id: "2",
    title: "プロジェクト２",
    slug: "crypto-trading-app",
    tags: ["coding"],
    image: "/placeholder-project-2.jpg",
    link: "#",
    description: "リアルタイム暗号通貨取引アプリケーション",
  },
  {
    id: "3",
    title: "プロジェクト３",
    slug: "portfolio-redesign",
    tags: ["design"],
    image: "/placeholder-project-3.jpg",
    link: "#",
    description: "個人ポートフォリオサイトのリデザインコンセプト",
  },
  {
    id: "4",
    title: "プロジェクト４",
    slug: "defi-protocol-ui",
    tags: ["coding", "design"],
    image: "/placeholder-project-4.jpg",
    link: "#",
    description: "Web3統合によるDeFiプロトコルインターフェース",
  },
  {
    id: "5",
    title: "プロジェクト５",
    slug: "mobile-banking-app",
    tags: ["design"],
    image: "/placeholder-project-5.jpg",
    link: "#",
    description: "モバイルバンキングアプリケーションのUI/UXデザイン",
  },
  {
    id: "6",
    title: "プロジェクト６",
    slug: "nft-marketplace",
    tags: ["coding"],
    image: "/placeholder-project-6.jpg",
    link: "#",
    description: "Next.jsとEthereumで構築されたNFTマーケットプレイス",
  },
];
