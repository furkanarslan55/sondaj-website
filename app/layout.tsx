import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import Link from "next/link"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Domain adresin.
  metadataBase: new URL('https://terrasondaj.net'), 

  // Google Botlarına izinler
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // 1. Ana Başlık Stratejisi
  title: {
    default: "Terra Sondaj | Tekirdağ Garantili Su Sondajı ve Zemin Etüdü",
    template: "%s | Terra Sondaj Mühendislik",
  },

  // 2. Açıklama Stratejisi (Verdiğin kelimelerle harmanlandı)
  description: "Tekirdağ ve Trakya genelinde ekonomik, hızlı ve garantili su kuyusu sondajı. Bahçe ve tarla için su arama, zemin etüdü, kuyu temizliği ve dalgıç pompa montaj hizmetleri.",

  // 3. Anahtar Kelimeler (Listeni buraya işledim)
  keywords: [
    "garantili su kuyusu sondajı Tekirdağ",
    "ekonomik su sondajı Tekirdağ",
    "kaliteli su kuyusu açma hizmeti",
    "hızlı su kuyusu sondaj Tekirdağ",
    "su kuyusu ve zemin etüdü",
    "pompa montaj ve su kuyusu",
    "bahçe su kuyusu sondajı",
    "tarla su kuyusu sondajı",
    "zemin etüdü sondaj Tekirdağ",
    "kuyu temizliği Tekirdağ",
    "pompa kurulumu ve montaj",
    "derin kuyu sondajı",
    "artezyen kuyu sondajı",
    "sondaj ve su arama",
    "Çorlu sondaj",
    "Çerkezköy zemin etüdü"
  ],

  // Sosyal Medya Paylaşımları
  openGraph: {
    title: 'Terra Sondaj | Tekirdağ Garantili Su Çözümleri',
    description: 'Arazinizde su yoksa ücret yok. Bahçe, tarla ve sanayi için profesyonel sondaj, zemin etüdü ve pompa çözümleri.',
    url: 'https://terrasondaj.net',
    siteName: 'Terra Sondaj Mühendislik',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/sosyal.png',
        width: 1200,
        height: 630,
        alt: 'Terra Sondaj - Trakya Su Sondaj Hizmetleri',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Terra Sondaj | Trakya Su Sondaj Hizmetleri',
    description: 'Tekirdağ ve çevresinde su sondajı, kuyu temizliği ve pompa işleri.',
    images: ['/sosyal.png'], 
  },

  icons: {
    icon: '/icon.png', 
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
        
        <Header />

        {children}

        {/* --- FOOTER --- */}
        <footer className="bg-slate-950 text-gray-400 py-16 mt-10 border-t border-gray-800 relative z-40">
          <div className="container mx-auto px-4">
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              
              {/* 1. Sütun */}
              <div>
                <div className="text-2xl font-bold text-white mb-4">
                  TERRA<span className="text-orange-500">SONDAJ</span>
                </div>
                <p className="text-sm leading-relaxed mb-6">
                  20 yıllık tecrübemizle Tekirdağ bölgesinde; derin kuyu sondajı, zemin etüdü ve dalgıç pompa sistemlerinde garantili çözümler sunuyoruz. Suyun olduğu her yerdeyiz.
                </p>
              </div>

              {/* 2. Sütun */}
              <div>
                <h4 className="text-white font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Kurumsal</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/" className="hover:text-orange-500 transition">Anasayfa</Link></li>
                  <li><Link href="/hakkimizda" className="hover:text-orange-500 transition">Hakkımızda</Link></li>
                  <li><Link href="/referanslar" className="hover:text-orange-500 transition">Referanslar</Link></li>
                  <li><Link href="/iletisim" className="hover:text-orange-500 transition">İletişim</Link></li>
                </ul>
              </div>

              {/* 3. Sütun */}
              <div>
                <h4 className="text-white font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Hizmetlerimiz</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/hizmetler/su-sondaji" className="hover:text-orange-500 transition">Su Sondajı</Link></li>
                  <li><Link href="/hizmetler/zemin-etudu" className="hover:text-orange-500 transition">Zemin Etüdü</Link></li>
                  <li><Link href="/hizmetler/kuyu-temizligi" className="hover:text-orange-500 transition">Kuyu Temizliği</Link></li>
                  <li><Link href="/hizmetler/dalgic-pompa" className="hover:text-orange-500 transition">Dalgıç Pompa Satış</Link></li>
                </ul>
              </div>

              {/* 4. Sütun */}
              <div>
                <h4 className="text-white font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Bize Ulaşın</h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500">📍</span>
                    <span>Tekirdağ, Çorlu, Çerkezköy ve Tüm Trakya</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500">📞</span>
                    <a href="tel:+905428312094" className="hover:text-white transition">+90 542 831 20 94</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500">✉️</span>
                    <a href="mailto:info@terrasondaj.net" className="hover:text-white transition">info@terrasondaj.net</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Yerel SEO Alanı - Verdiğin Kelimeler Burada Metin Olarak Geçiyor */}
            <div className="border-t border-gray-800 pt-8 pb-4">
              <p className="text-xs font-bold text-gray-500 mb-2">HİZMET ETİKETLERİ:</p>
              <p className="text-xs text-gray-600 leading-loose">
                Tekirdağ garantili su kuyusu sondajı, Çorlu ekonomik su sondajı fiyatları, Çerkezköy hızlı su kuyusu açma, 
                Süleymanpaşa su kuyusu ve zemin etüdü, Ergene pompa montaj ve su kuyusu işlemleri. 
                Bahçe su kuyusu sondajı ve tarla sulama sistemleri kurulumu. Derin kuyu ve artezyen sondaj hizmetlerinde 
                kaliteli su kuyusu açma hizmeti sunuyoruz. Sondaj ve su arama, kuyu temizliği ve pompa kurulumu için profesyonel mühendislik.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-sm">
              <p>&copy; 2025 Terra Sondaj Mühendislik. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </footer>

        {/* Whatsapp Butonu */}
        <a
          href="https://wa.me/905428312094?text=Merhaba,%20sondaj%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-white ring-2 ring-green-500/50"
          aria-label="WhatsApp ile İletişime Geç"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
        </a>

      </body>
    </html>
  );
}