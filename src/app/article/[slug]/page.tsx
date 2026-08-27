import { notFound } from "next/navigation";
import Link from "next/link";
import { CircleChevronLeft } from "lucide-react";
import { SiteNavbar } from "@/components/site-navbar";
import { articles } from "@/lib/articles";
import { TYPOGRAPHY } from "@/lib/design-system";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteNavbar />
      <main className="pt-[53px]">
        <div className="max-w-[768px] mx-auto p-6 lg:p-10">
          <Link
            href="/"
            className={`inline-flex items-center gap-3 ${TYPOGRAPHY.monoSmall} text-neutral-500 hover:text-white transition-colors mb-12`}
            title="Go back to homepage"
          >
            <CircleChevronLeft className="w-3 h-3" />
            <span>BACK</span>
          </Link>

          <article>
            <header className="mb-12 border-b border-neutral-800/50 pb-8">
              <h1 className={`${TYPOGRAPHY.heading} text-white mb-4`}>
                {article.title}
              </h1>
              <div className={`${TYPOGRAPHY.monoSmallMuted} text-neutral-500 uppercase tracking-wider`}>
                {article.date}
              </div>
            </header>

            <div 
              className={`space-y-4 text-neutral-400 ${TYPOGRAPHY.monoSmall} leading-relaxed`}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
