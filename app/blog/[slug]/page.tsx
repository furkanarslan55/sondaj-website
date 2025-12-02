import { blogPosts } from "../../data/blogData"; // Dikkat: Burada iki nokta (../../) var
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

// Dinamik Başlık (SEO için)
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return { title: "Yazı Bulunamadı" };
  }

  return {
    title: `${post.title} | Terra Sondaj`,
    description: post.excerpt,
  };
}

// Sayfa İçeriği
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <Link href="/blog" className="text-sm text-gray-500 hover:text-orange-500 mb-8 inline-block transition">
          ← Blog Listesine Dön
        </Link>

        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="text-gray-500 text-sm">
            <span>{post.date}</span> • <span>Terra Sondaj Ekibi</span>
          </div>
        </header>

        <div className="mb-10 rounded-2xl overflow-hidden shadow-lg h-64 md:h-96 w-full relative">
           <img 
             src={post.image} 
             alt={post.title} 
             className="w-full h-full object-cover"
           />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
           {post.content}
        </div>

      </div>
    </article>
  );
}