export default function Hakkimizda() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO SECTION — Blur Arka Plan Resmi */}
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">

        {/* Background Image — sadece buraya URL ekleyeceksin */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/headerrr.webp')",
            filter: "blur(6px)",
            transform: "scale(1.1)"
          }}
        />

        {/* Koyu Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-6 max-w-5xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow">
            20 Yıllık Deneyimle  
            <br className="hidden md:block" /> Su Sondajında Güvenin Adı
          </h1>
          <p className="text-lg md:text-xl mt-6 max-w-2xl text-gray-200">
            Tekirdağ ve çevresinde profesyonel su sondajı ve artezyen kuyu açma hizmetlerinde 
            bölgenin en deneyimli ekiplerinden biriyiz.
          </p>
        </div>

      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">

          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 space-y-8 text-lg leading-relaxed">

            <h2 className="text-3xl font-bold text-gray-900">
              Biz Kimiz?
            </h2>

            <p>
              Terra Sondaj olarak 20 yılı aşkın süredir Tekirdağ ve çevresinde 
              <strong className="font-semibold text-gray-900"> su sondajı</strong>, 
              <strong className="font-semibold text-gray-900"> artezyen kuyu açma</strong> ve 
              <strong className="font-semibold text-gray-900"> dalgıç pompa sistemleri</strong>
              üzerine profesyonel çözümler sunuyoruz.
            </p>

            <p>
              Sahip olduğumuz modern havalı ve çamurlu sondaj makineleri sayesinde 
              zorlu zemin koşullarında bile hızlı, güvenli ve yüksek verimlilikte 
              <strong className="text-gray-900"> kuyu açma</strong> hizmeti veriyoruz.
            </p>

            <p>
              Tekirdağ’ın jeolojik yapısını yılların tecrübesiyle çok iyi biliyor,
              her bölgede en doğru tekniği uygulayarak suya en verimli şekilde ulaşmanızı sağlıyoruz.
              Tüm projelerde <strong className="text-gray-900">ruhsat, DSİ izinleri</strong> ve 
              resmi işlemleri sizin adınıza eksiksiz şekilde yönetiyoruz.
            </p>

            <p>
              Müşterilerimize sürdürülebilir, güvenilir ve uzun ömürlü su çözümleri sunmak,
              Terra Sondaj’ın en temel prensiplerinden biridir.
            </p>

          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-14">
            Neden Bizi Tercih Etmelisiniz?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-10 bg-gray-50 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                20+ Yıl Tecrübe
              </h3>
              <p className="text-gray-700">
                Tekirdağ’ın zemin ve jeolojik koşullarına en hakim sondaj ekiplerinden biriyiz.
              </p>
            </div>

            <div className="p-10 bg-gray-50 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Modern Teknoloji
              </h3>
              <p className="text-gray-700">
                Havalı ve çamurlu sondaj makinelerimizle hızlı, temiz ve yüksek verimli çalışmalar yapıyoruz.
              </p>
            </div>

            <div className="p-10 bg-gray-50 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tam Yetkili Hizmet
              </h3>
              <p className="text-gray-700">
                DSİ izinleri, ruhsat işlemleri ve tüm resmi süreçler ekibimiz tarafından yönetilir.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
