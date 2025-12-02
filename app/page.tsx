import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  // GOOGLE İÇİN KİMLİK KARTI (SCHEMA MARKUP)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor', 
    name: 'Terra Sondaj', 
    image: '/sondajçalışan.png',
    description: 'Tekirdağ ve çevre illerde garantili su sondajı, zemin etüdü ve kuyu açma hizmetleri.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Orta Cami Mah. No:15',
      addressLocality: 'Tekirdağ', 
      addressRegion: 'TR',
      postalCode: '59000',
      addressCountry: 'TR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.0082, 
      longitude: 28.9784
    },
    url: 'https://terrasondaj.net',
    telephone: '+905428312094',
    priceRange: '₺₺',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ],
        opens: '08:00',
        closes: '19:00'
      }
    ]
  }

  return (
    <main className="flex flex-col min-h-screen">
      
      {/* BU KOD GİZLİDİR, SADECE GOOGLE GÖRÜR */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. HERO SECTION (MOBİL VE MASAÜSTÜ AYRI) */}
      <section className="relative h-[700px] flex items-center justify-center text-white">
        
        {/* Arkaplan Resim Alanı */}
        <div className="absolute inset-0 z-0">
          
          {/* A) MASAÜSTÜ RESMİ (Sadece PC'de görünür - hidden md:block) */}
          <div className="hidden md:block w-full h-full relative">
            <Image
              src="/banner.webp"  // Mevcut YATAY resmin
              alt="Profesyonel Su Sondaj Makinesi Masaüstü"
              fill
              className="object-cover brightness-50"
              priority // Sayfa açılır açılmaz yüklenir
            />
          </div>

          {/* B) MOBİL RESMİ (Sadece Telefonda görünür - block md:hidden) */}
          <div className="block md:hidden w-full h-full relative">
            <Image
              src="/banner_mobil.jpg" // BURAYA DİKEY RESİM KOY (public klasörüne at)
              alt="Profesyonel Su Sondaj Makinesi Mobil"
              fill
              className="object-cover brightness-50"
              priority // Mobilde hemen yüklensin
            />
          </div>

        </div>

        {/* BUZLU CAM EFEKTLİ KUTU (İÇERİK DEĞİŞMEDİ) */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="bg-black/30 backdrop-blur-md p-8 md:p-14 rounded-3xl border border-white/20 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Suyun Olduğu Yerde <br /> 
              <span className="text-blue-400">Terra Sondaj Var</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 font-light drop-shadow-md">
              20 Yıllık tecrübe ve garantili hizmet anlayışı ile arazinize değer katıyoruz.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/iletisim" 
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-full transition duration-300 text-lg shadow-lg hover:shadow-orange-500/50"
              >
                Hemen Teklif Al
              </Link>
              <a 
                href="tel:+905428312094" 
                className="bg-white/10 hover:bg-white text-white hover:text-gray-900 font-bold py-4 px-10 rounded-full transition duration-300 text-lg border border-white/50 backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <span>📞</span> Bizi Arayın
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GÜVEN SİNYALLERİ (Trust Badges) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-10">
                 <h2 className="text-3xl font-bold text-gray-800">Neden Terra Sondaj?</h2>
                 <div className="w-20 h-1 bg-blue-600 mx-auto mt-2"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-xl shadow-lg hover:-translate-y-2 transition duration-300 border-b-4 border-blue-500">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">%100 Su Garantisi</h3>
                <p className="text-gray-600">Jeofizik etütler sonucunda nokta atışı tespit yapıyoruz.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:-translate-y-2 transition duration-300 border-b-4 border-orange-500">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Hızlı Teslimat</h3>
                <p className="text-gray-600">Güçlü makine parkurumuz ile işinizi zamanında teslim ediyoruz.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:-translate-y-2 transition duration-300 border-b-4 border-green-500">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Ekonomik Fiyatlar</h3>
                <p className="text-gray-600">Bölgedeki en rekabetçi metre fiyatları ile bütçe dostu çözümler.</p>
            </div>
            </div>
        </div>
      </section>

      {/* 3. HİZMETLERİMİZ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
            <p className="text-gray-600">İhtiyacınıza uygun profesyonel çözümler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kart 1 */}
            <div className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition duration-300">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src="/sondajçalışan.webp" 
                  alt="Su Sondajı" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Su Sondajı</h3>
                <p className="text-gray-600 mb-4">Derin kuyu su sondajı işlemleriniz titizlikle yapılır.</p>
                <Link href="/hizmetler" className="text-blue-600 font-bold hover:underline">İncele →</Link>
              </div>
            </div>

            {/* Kart 2 */}
            <div className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition duration-300">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src="/zemin_etüdü.webp" 
                  alt="Zemin Etüdü" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Zemin Etüdü</h3>
                <p className="text-gray-600 mb-4">İnşaat ve kuyu öncesi profesyonel raporlama.</p>
                <Link href="/hizmetler" className="text-blue-600 font-bold hover:underline">İncele →</Link>
              </div>
            </div>

            {/* Kart 3 */}
            <div className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition duration-300">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src="/pompa.webp" 
                  alt="Dalgıç Pompa" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Pompa Kurulumu</h3>
                <p className="text-gray-600 mb-4">Dalgıç pompa seçimi, montajı ve bakımı.</p>
                <Link href="/hizmetler" className="text-blue-600 font-bold hover:underline">İncele →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEO CONTENT BLOCK */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Terra Sondaj: Bölgenin Lider Firması 🏅</h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Su sondajı, özellikle kuraklığın arttığı dönemlerde tarım arazileri ve sanayi tesisleri için hayati önem taşır. 
              <strong>Tekirdağ su sondaj firmaları</strong> arasında lider konumda olan Terra Sondaj, en son teknoloji havalı ve 
              çamurlu sondaj makineleri ile hizmet vermektedir.
            </p>
            <p>
              Müşterilerimizin en çok merak ettiği <strong>sondaj metre fiyatları 2025</strong> yılında zeminin yapısına 
              göre değişiklik göstermektedir. Ruhsatlı kuyu açma işlemleri, DSİ izinleri konularında tam destek sağlıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* 5. VİDEO GALERİ BÖLÜMÜ */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-wider mb-4">
              SAHADAN GÖRÜNTÜLER
            </h2>
            <p className="text-gray-400">
              Gerçekleştirdiğimiz projelerden operasyon anları.
            </p>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            {/* VİDEO 1 */}
            <div className="bg-slate-800/50 p-3 rounded-2xl border border-slate-700/50 shadow-2xl hover:shadow-orange-500/10 transition duration-300">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                <iframe 
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/jVHZarqzM60?si=WapKRC_UwlCBKyFt"
                  title="Su Sondajı Operasyonu"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 text-center">
                 <h3 className="text-xl font-bold text-orange-400">Derin Kuyu Sondajı</h3>
                 <p className="text-sm text-gray-400 mt-2">Zorlu arazi şartlarında gerçekleştirdiğimiz su sondaj çalışması.</p>
              </div>
            </div>

            {/* VİDEO 2 */}
            <div className="bg-slate-800/50 p-3 rounded-2xl border border-slate-700/50 shadow-2xl hover:shadow-orange-500/10 transition duration-300">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                <iframe 
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/jXkicooWzwE?si=VRzwT2Gjd2uUB4Yw"
                  title="Kuyu Temizliği ve İnkişaf"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
               <div className="p-4 text-center">
                 <h3 className="text-xl font-bold text-orange-400">Kuyu Temizliği ve İnkişaf</h3>
                 <p className="text-sm text-gray-400 mt-2">Verimi düşen kuyuların basınçlı hava ile temizlenerek eski debisine kavuşturulması.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}