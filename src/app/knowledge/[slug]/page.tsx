import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { knowledgeArticles, getArticleBySlug, knowledgeCategories } from "@/lib/knowledge";
import { defaultMetadata } from "@/lib/seo";
import KnowledgeArticle from "./KnowledgeArticle";

export async function generateStaticParams() {
  return knowledgeArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return defaultMetadata("Article Not Found", "Article not found", "/knowledge");
  return defaultMetadata(article.title, article.excerpt, `/knowledge/${article.slug}`);
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  const related = knowledgeArticles.filter((a) => a.id !== article.id && (a.category === article.category || a.tags.some((t) => article.tags.includes(t)))).slice(0, 3);
  const category = knowledgeCategories.find((c) => c.id === article.category);
  return <KnowledgeArticle article={article} related={related} category={category} />;
}
