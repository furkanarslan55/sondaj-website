import { references } from "../data/referencesData";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Referanslar | Bizi Tercih Edenler",
  description: "Tekirdağ, Çorlu ve Trakya bölgesinde tamamladığımız su sondajı, zemin etüdü ve kuyu projelerimiz.",
};

export default function ReferencesPage() {
  return (
    <main className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Başlık Alanı */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Referanslarımız</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            20 yıllık tecrübemizle Trakya'nın önde gelen sanayi kuruluşları, tarım işletmeleri ve konut projelerine çözüm ortağı olduk.
          </p>
        </div>

        {/* İstatistikler (Güven vermek için) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">+500</div>
                <div className="text-sm text-gray-500">Açılan Kuyu</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-3xl font-bold text-slate-800 mb-1">%100</div>
                <div className="text-sm text-gray-500">Müşteri Memnuniyeti</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">20+</div>
                <div className="text-sm text-gray-500">Yıllık Tecrübe</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-3xl font-bold text-slate-800 mb-1">7/24</div>
                <div className="text-sm text-gray-500">Teknik Destek</div>
            </div>
        </div>

        {/* Proje Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((ref) => (
            <div key={ref.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 group">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {ref.category}
                </span>
                <span className="text-gray-400 text-sm">{ref.year}</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition">
                {ref.company}
              </h3>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                    <span className="text-orange-500">📍</span>
                    {ref.location}
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-orange-500">🔧</span>
                    {ref.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alt Çağrı (Call to Action) */}
        <div className="mt-20 text-center bg-slate-900 rounded-2xl p-10 md:p-16 text-white relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Sıradaki Projemiz Sizin Olsun</h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                    Sanayi, tarım veya konut... İhtiyacınıza uygun sondaj çözümü için hemen ücretsiz keşif talep edin.
                </p>
                <Link 
                    href="/iletisim" 
                    className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition transform hover:-translate-y-1"
                >
                    Teklif Alın
                </Link>
            </div>
            
            {/* Arka plan dekoru */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-orange-600 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        </div>

      </div>
    </main>
  );
}