import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// --- SEO VE SOSYAL MEDYA AYARLARI ---
export const metadata: Metadata = {
  // Buraya ileride satın alacağın domaini yazmalısın (Şimdilik örnek duruyor)
  metadataBase: new URL('https://terrasondaj.com'), 
  title: "Terra Sondaj | Tekirdağ Su Sondajı ve Zemin Etüdü",
  description: "Tekirdağ, Çorlu, Çerkezköy ve tüm Trakya bölgesinde garantili su sondajı, zemin etüdü ve kuyu ruhsatı hizmetleri. 20 yıllık tecrübe.",
  openGraph: {
    title: 'Terra Sondaj | Garantili Su Çözümleri',
    description: 'Arazinizde su yoksa ücret yok. Profesyonel sondaj ve zemin etüdü çözümleri.',
    url: 'https://terrasondaj.com',
    siteName: 'Terra Sondaj',
    images: [
      {
        url: '/banner.jpg', // Public klasörüne attığın resim sosyal medyada görünecek
        width: 1200,
        height: 630,
        alt: 'Terra Sondaj Sahadan Görüntü',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-gray-50`}>
        
        {/* --- MODERN HEADER (STICKY / SABİT) --- */}
        <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10 text-white shadow-lg transition-all duration-300">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            
            {/* LOGO ALANI */}
            <Link href="/" className="text-2xl font-black tracking-wider group">
              <span className="text-white group-hover:text-gray-200 transition">TERRA</span>
              <span className="text-orange-500">SONDAJ</span>
            </Link>

            {/* MENÜ ALANI (Desktop) */}
            <nav className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8 text-sm font-medium tracking-wide">
                <li>
                  <Link href="/" className="hover:text-orange-400 transition duration-300">ANASAYFA</Link>
                </li>
                <li>
                  <Link href="/hizmetler" className="hover:text-orange-400 transition duration-300">HİZMETLER</Link>
                </li>
                <li>
                  <Link href="/iletisim" className="hover:text-orange-400 transition duration-300">İLETİŞİM</Link>
                </li>
              </ul>
              
              {/* Header İçi Aksiyon Butonu */}
              <a 
                href="tel:+905428312094" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full font-bold text-sm transition shadow-lg hover:shadow-orange-500/30 flex items-center gap-2"
              >
                <span>📞</span> 0542 831 20 94
              </a>
            </nav>
            
            {/* Mobil Menü İkonu (Basit Görüntü) */}
            <div className="md:hidden text-2xl cursor-pointer">☰</div>
          </div>
        </header>

        {/* SAYFA İÇERİĞİ */}
        {children}

        {/* --- GELİŞMİŞ FOOTER --- */}
        <footer className="bg-slate-950 text-gray-400 py-16 mt-10 border-t border-gray-800 relative z-40">
          <div className="container mx-auto px-4">
            
            {/* Üst Kısım: Linkler ve Bilgiler */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              
              {/* 1. Sütun: Marka */}
              <div>
                <div className="text-2xl font-bold text-white mb-4">
                  TERRA<span className="text-orange-500">SONDAJ</span>
                </div>
                <p className="text-sm leading-relaxed mb-6">
                  20 yıllık tecrübemizle su sondajı, zemin etüdü ve dalgıç pompa sistemlerinde garantili çözümler sunuyoruz. Suyun olduğu her yerdeyiz.
                </p>
              </div>

              {/* 2. Sütun: Hızlı Linkler */}
              <div>
                <h4 className="text-white font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Kurumsal</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/" className="hover:text-orange-500 transition">Anasayfa</Link></li>
                  <li><Link href="/hizmetler" className="hover:text-orange-500 transition">Hakkımızda</Link></li>
                  <li><Link href="/hizmetler" className="hover:text-orange-500 transition">Referanslar</Link></li>
                  <li><Link href="/iletisim" className="hover:text-orange-500 transition">İletişim</Link></li>
                </ul>
              </div>

              {/* 3. Sütun: Hizmetler (SEO İçin Önemli) */}
              <div>
                <h4 className="text-white font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Hizmetlerimiz</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/hizmetler" className="hover:text-orange-500 transition">Su Sondajı</Link></li>
                  <li><Link href="/hizmetler" className="hover:text-orange-500 transition">Zemin Etüdü</Link></li>
                  <li><Link href="/hizmetler" className="hover:text-orange-500 transition">Kuyu Temizliği</Link></li>
                  <li><Link href="/hizmetler" className="hover:text-orange-500 transition">Dalgıç Pompa Satış</Link></li>
                </ul>
              </div>

              {/* 4. Sütun: İletişim */}
              <div>
                <h4 className="text-white font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Bize Ulaşın</h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500">📍</span>
                    <span>Tekirdağ, Türkiye (Hizmet Bölgemiz: Tüm Trakya)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500">📞</span>
                    <a href="tel:+905428312094" className="hover:text-white transition">+90 542 831 20 94</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500">✉️</span>
                    <a href="mailto:info@terrasondaj.com" className="hover:text-white transition">info@terrasondaj.net</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* --- YEREL SEO (İLÇE HEDEFLEME) ALANI --- */}
            <div className="border-t border-gray-800 pt-8 pb-4">
              <p className="text-xs font-bold text-gray-500 mb-2">HİZMET BÖLGELERİMİZ:</p>
              <p className="text-xs text-gray-600 leading-loose">
                Tekirdağ Su Sondajı, Çorlu Zemin Etüdü, Çerkezköy Kuyu Açma, Kapaklı Sondaj Firmaları, 
                Ergene Su Arama, Süleymanpaşa Sondaj Fiyatları, Malkara Dalgıç Pompa, Hayrabolu Kuyu Temizliği, 
                Saray Sondaj, Marmara Ereğlisi Su Kuyusu, Muratlı Sondaj, Şarköy Zemin Etüdü, Kırklareli Sondaj, Edirne Su Sondajı.
              </p>
            </div>

            {/* Alt Telif Çubuğu */}
            <div className="border-t border-gray-800 pt-8 text-center text-sm">
              <p>&copy; 2025 Terra Sondaj Mühendislik. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </footer>

        {/* --- WHATSAPP BUTONU (SABİT) --- */}
        <a
          href="https://wa.me/905428312094?text=Merhaba,%20sondaj%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-white ring-2 ring-green-500/50"
          aria-label="WhatsApp ile İletişime Geç"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            fill="currentColor" 
            className="bi bi-whatsapp" 
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
        </a>

      </body>
    </html>
  );
}