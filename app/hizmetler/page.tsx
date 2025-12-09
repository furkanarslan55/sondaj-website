import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// SAYFA BAŞLIĞI VE SEO AYARLARI
export const metadata: Metadata = {
  title: "Hizmetlerimiz | Su Sondajı, Zemin Etüdü ve Pompa Sistemleri",
  description: "Uzman kadromuzla su sondajı, zemin etüdü raporlama, kuyu ruhsatı ve dalgıç pompa satış/montaj hizmetleri veriyoruz.",
};

export default function Hizmetler() {
  return (
    <main className="min-h-screen pb-20 bg-gray-50">
      
      {/* ÜST BAŞLIK (HEADER) */}
      <section className="bg-slate-900 text-white py-24 text-center relative overflow-hidden">
        {/* Arkaplan Süsü */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-900/20 blur-3xl"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-wider mb-6">
            Profesyonel Çözümlerimiz
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4 leading-relaxed">
            Son teknoloji ekipmanlarımız, güçlü makine parkurumuz ve tecrübeli mühendis kadromuz ile arazinize değer katıyoruz.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-16 relative z-20">
        
        {/* HİZMET 1: SU SONDAJI (Resim Solda) */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 flex flex-col md:flex-row group hover:shadow-2xl transition duration-300">
          <div className="md:w-1/2 relative min-h-[350px] overflow-hidden">
            <Image 
              src="/Headerrrr.webp" 
              alt="Su Sondajı Çalışması" 
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
            {/* Resim Üzeri Etiket */}
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wide">
              En Çok Tercih Edilen
            </div>
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-black text-gray-800 mb-4">Su Sondajı ve Kuyu Açma</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Tarımsal sulama, sanayi ihtiyacı veya hobi bahçeleri için arazinizde jeolojik etütler yaparak suyun en verimli olduğu noktayı tespit ediyoruz. Havalı ve çamurlu tekniklerle her zeminde sonuç alıyoruz.
            </p>
            <ul className="space-y-2 mb-8 text-gray-700 font-medium">
              <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> %100 Su Bulma Garantisi</li>
              <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Sert Zemin Delme Kapasitesi</li>
              <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Anahtar Teslim Kurulum</li>
            </ul>
            <Link href="/iletisim" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30 w-fit">
              Fiyat Teklifi Al
            </Link>
          </div>
        </div>

        {/* HİZMET 2: ZEMİN ETÜDÜ (Resim Sağda) */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 flex flex-col md:flex-row-reverse group hover:shadow-2xl transition duration-300">
          <div className="md:w-1/2 relative min-h-[350px] overflow-hidden">
             <Image 
              src="/zemin_etüdü.webp" 
              alt="Zemin Etüdü Raporlama" 
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-black text-gray-800 mb-4">Zemin Etüdü ve Raporlama</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              İnşaat projeleri öncesinde veya kuyu ruhsatı alım sürecinde zorunlu olan zemin etüdü raporlarını, oda kayıtlı Jeoloji Mühendislerimiz titizlikle hazırlar.
            </p>
            <ul className="space-y-2 mb-8 text-gray-700 font-medium">
              <li className="flex items-center gap-2"><span className="text-orange-500">✓</span> Resmi Kurum Onaylı Rapor</li>
              <li className="flex items-center gap-2"><span className="text-orange-500">✓</span> Deprem Yönetmeliğine Uygun</li>
              <li className="flex items-center gap-2"><span className="text-orange-500">✓</span> Hızlı Teslimat</li>
            </ul>
            <Link href="/iletisim" className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition shadow-lg hover:shadow-orange-500/30 w-fit">
              Etüt Teklifi İste
            </Link>
          </div>
        </div>

        {/* HİZMET 3: DALGIÇ POMPA (Resim Solda) */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 flex flex-col md:flex-row group hover:shadow-2xl transition duration-300">
          <div className="md:w-1/2 relative min-h-[350px] overflow-hidden">
            <Image 
              src="/pompa.webp" 
              alt="Dalgıç Pompa" 
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-black text-gray-800 mb-4">Dalgıç Pompa Satış ve Montaj</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Kuyunuzdan çıkan suyun debisine ve kuyu derinliğine en uygun pompayı seçmek hayati önem taşır. Yanlış pompa seçimi faturanızı artırır. Paslanmaz çelik pompalarla uzun ömür sunuyoruz.
            </p>
            <ul className="space-y-2 mb-8 text-gray-700 font-medium">
              <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Ücretsiz Güç Hesabı</li>
              <li className="flex items-center gap-2"><span className="text-green-600">✓</span> 7/24 Arıza ve Bakım</li>
              <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Kuyu Temizliği Hizmeti</li>
            </ul>
            <Link href="/iletisim" className="inline-block bg-slate-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-900 transition shadow-lg w-fit">
              Servis Çağır
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}