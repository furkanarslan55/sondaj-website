import Link from "next/link";
import { blogPosts } from "../data/blogData"; 
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Sondaj ve Zemin Etüdü Bilgi Merkezi",
  description: "Tekirdağ su sondajı fiyatları, zemin etüdü raporları ve kuyu açma teknikleri hakkında güncel bilgiler.",
};

export default function BlogPage() {
  return (
    <main className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Sondaj Rehberi & Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Su sondajı, zemin etüdü ve yasal süreçler hakkında merak ettiğiniz her şey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col h-full">
              
              {/* Resim Alanı */}
              <div className="relative h-48 w-full">
                 <img 
                   src={post.image} 
                   alt={post.title} 
                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                 />
              </div>

              {/* İçerik Alanı */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-semibold text-orange-500 mb-2 uppercase tracking-wide">
                  {post.date}
                </div>
                
                <h2 className="text-xl font-bold text-slate-800 mb-3 leading-snug hover:text-orange-600 transition">
                  {/* DÜZELTME BURADA: href içinde post.slug olmalı */}
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                    {/* DÜZELTME BURADA: href içinde post.slug olmalı */}
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="inline-flex items-center text-orange-600 font-semibold text-sm hover:underline"
                    >
                      Devamını Oku →
                    </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}