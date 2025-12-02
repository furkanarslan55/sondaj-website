import { blogPosts } from "../../data/blogData"; 
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

// --- TİP TANIMLAMASI ---
// Next.js 15+ standartlarına uygun tip
type Props = {
  params: Promise<{ slug: string }>;
};

// Dinamik Metadata (SEO)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Params'ı bekle (await)
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    return { title: "Yazı Bulunamadı" };
  }

  return {
    title: `${post.title} | Terra Sondaj`,
    description: post.excerpt,
  };
}

// Sayfa İçeriği
export default async function BlogPostPage({ params }: Props) {
  // 1. Params verisini asenkron olarak çözümlüyoruz (Next.js 15 fix)
  const resolvedParams = await params;
  
  // 2. URL'deki karmaşık karakterleri düzeltiyoruz (Örn: %20 -> boşluk)
  const currentSlug = decodeURIComponent(resolvedParams.slug);

  // --- HATA AYIKLAMA (Terminalden kontrol et) ---
  console.log("-----------------------------------------");
  console.log("URL'den gelen slug:", currentSlug);
  console.log("Veritabanında aranan:", blogPosts.map(p => p.slug)); // Mevcut slugları listeler
  // ---------------------------------------------

  const post = blogPosts.find((p) => p.slug === currentSlug);

  if (!post) {
    console.log("SONUÇ: Eşleşme bulunamadı, 404'e gidiliyor.");
    console.log("-----------------------------------------");
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

        {/* Resim varsa göster, yoksa hata vermesin diye kontrol ekledik */}
        {post.image && (
          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg h-64 md:h-96 w-full relative">
             <img 
               src={post.image} 
               alt={post.title} 
               className="w-full h-full object-cover"
             />
          </div>
        )}

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
           {post.content}
        </div>

      </div>
    </article>
  );
}