import Image from "next/image";
import Link from "next/link";

export default function Home() {

  // GOOGLE İÇİN KİMLİK KARTI (SCHEMA MARKUP)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: 'Terra Sondaj',
    image: '/sondajçalışan.png',
    description:
      'Tekirdağ su sondajı, derin kuyu açma, artezyen kuyu, zemin etüdü ve pompa montaj hizmetleri. 20 Yıllık tecrübe ile garantili su kuyusu çözümleri.',
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
      latitude: 40.9780, // TEKİRDAĞ DOĞRU KOORDİNAT
      longitude: 27.5110
    },
    url: 'https://terrasondaj.net',
    telephone: '+905428312094',
    priceRange: '₺₺',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '08:00',
        closes: '19:00'
      }
    ]
  };

  return (
    <main className="flex flex-col min-h-screen">

      {/* BU KOD GİZLİDİR */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative h-[700px] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <div className="hidden md:block w-full h-full relative">
            <Image
              src="/banner.webp"
              alt="Tekirdağ Profesyonel Su Sondajı ve Kuyu Açma"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>

          <div className="block md:hidden w-full h-full relative">
            <Image
              src="/banner_mobil.jpg"
              alt="Tekirdağ Su Sondajı Mobil Görsel"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="bg-black/30 backdrop-blur-md p-8 md:p-14 rounded-3xl border border-white/20 shadow-2xl">

            {/* SEO KAZANDIRAN H1 */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Tekirdağ Su Sondajı <br />
              <span className="text-blue-400">Profesyonel Kuyu Açma Hizmetleri</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-100 font-light drop-shadow-md">
              20 Yıllık tecrübe ile Tekirdağ ve çevresinde garantili su kuyusu, artezyen kuyu açma ve zemin etüdü çözümleri.
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

      {/* GÜVEN */}
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
              <p className="text-gray-600">Tekirdağ ve çevresinde nokta atışı su tespiti + garantili sondaj.</p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg hover:-translate-y-2 transition duration-300 border-b-4 border-orange-500">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Hızlı Teslimat</h3>
              <p className="text-gray-600">Güçlü makine parkurumuzla projelerinizi aynı hafta içinde başlatıyoruz.</p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg hover:-translate-y-2 transition duration-300 border-b-4 border-green-500">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Ekonomik Fiyatlar</h3>
              <p className="text-gray-600">Tekirdağ bölgesinin en rekabetçi su sondaj metre fiyatları.</p>
            </div>

          </div>
        </div>
      </section>

      {/* HİZMETLER */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tekirdağ Sondaj Hizmetleri
            </h2>
            <p className="text-gray-600">Araziniz için profesyonel ve güvenilir çözümler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition duration-300">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/sondajmakine.webp"
                  alt="Tekirdağ Derin Kuyu Su Sondajı"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Su Sondajı</h3>
                <p className="text-gray-600 mb-4">
                  Tekirdağ derin kuyu su sondaj hizmeti güvenli ve garantili şekilde yapılır.
                </p>
                <Link href="/hizmetler" className="text-blue-600 font-bold hover:underline">
                  İncele →
                </Link>
              </div>
            </div>

            <div className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition duration-300">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/zemin_etüdü.webp"
                  alt="Tekirdağ Zemin Etüdü Hizmeti"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Zemin Etüdü</h3>
                <p className="text-gray-600 mb-4">
                  İnşaat ve sondaj öncesi profesyonel Tekirdağ zemin etüdü raporlaması.
                </p>
                <Link href="/hizmetler" className="text-blue-600 font-bold hover:underline">
                  İncele →
                </Link>
              </div>
            </div>

            <div className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition duration-300">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/pompa.webp"
                  alt="Tekirdağ Dalgıç Pompa Montaj Hizmeti"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Pompa Kurulumu</h3>
                <p className="text-gray-600 mb-4">
                  Dalgıç pompa seçimi, montajı ve bakım hizmetleri Tekirdağ genelinde verilmektedir.
                </p>
                <Link href="/hizmetler" className="text-blue-600 font-bold hover:underline">
                  İncele →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

     <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-12 -left-12 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
  </div>

  <div className="relative container mx-auto px-6 max-w-4xl">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-10 tracking-tight">
      Terra Sondaj: Tekirdağ’ın Lider Su Sondaj Firması 🏅
    </h2>

    <div className="bg-white shadow-xl rounded-2xl p-10 border border-gray-100 space-y-6 text-gray-700 leading-relaxed text-lg transition-all duration-300 hover:shadow-2xl">
      
      <p>
        Su sondajı; tarım, sanayi ve kırsal altyapının temel ihtiyaçlarından biridir.
        <strong className="font-semibold"> Tekirdağ su sondaj firmaları </strong> arasında 
        öne çıkan Terra Sondaj, modern teknolojili havalı ve çamurlu sondaj makineleriyle 
        yüksek performanslı çözümler üretmektedir.
      </p>

      <p>
        Bölgedeki müşterilerimiz tarafından en sık sorulan konulardan biri 
        <strong className="font-semibold"> Tekirdağ su sondaj fiyatları 2025 </strong> listesidir.
        Metre fiyatları; zemin sertliği, kayalık yoğunluğu ve talep edilen debiye göre 
        değişiklik gösterir. Tüm işlem sürecinde ruhsat, DSİ izinleri ve resmî prosedürler 
        firmamız tarafından eksiksiz şekilde yönetilmektedir.
      </p>

      <p>
        Ayrıca <strong className="font-semibold">artezyen kuyu açma</strong>, 
        <strong className="font-semibold"> kuyu temizliği </strong> ve 
        <strong className="font-semibold"> dalgıç pompa montajı (Tekirdağ) </strong> 
        gibi hizmetlerimizle de profesyonel ve güvenilir çözümler sunuyoruz.
      </p>

    </div>
  </div>
</section>



      

    </main>
  );
}
