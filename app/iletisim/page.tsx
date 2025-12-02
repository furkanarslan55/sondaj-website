"use client"; // DİKKAT: Bu sayfa kullanıcı ile etkileşime (tıklama, yazma) gireceği için "Client Component" olmalı.

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Iletisim() {
  // MVC'deki MODEL kısmı (ViewModel)
  // Formdaki verileri tutacağımız yer.
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // MVC'deki CONTROLLER / ACTION kısmı
  // Form gönderilince (Post edilince) çalışacak fonksiyon
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault(); // Sayfanın yenilenmesini engelle (SPA mantığı)
    setLoading(true);

    // EmailJS Ayarları
    // BURADAKİ DEĞERLERİ ADIM 3'TE ALACAĞIMIZ DEĞERLERLE DEĞİŞTİRECEĞİZ
    const serviceID = "service_1x08drx"; 
    const templateID = "template_jbtuvwb"; 
    const publicKey = "8M9hukHRttBPnqmB2"; 

    if (formRef.current) {
        emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
        .then(() => {
          setSuccess(true);
          setLoading(false);
          formRef.current?.reset(); // Formu temizle
        }, (error) => {
          console.error(error);
          setError(true);
          setLoading(false);
        });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* SOL TARA: İletişim Bilgileri */}
          <div className="bg-blue-900 text-white p-8 md:w-1/3 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">İletişime Geçin</h2>
              <p className="mb-6 text-blue-200">
                Sondaj, zemin etüdü ve kuyu açma projeleriniz için ücretsiz keşif talep edin.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span>📞</span>
                  <span>+90 542 831 20 94</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>📧</span>
                  <span>info@terrasondaj.net</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>📍</span>
                  <span>Tekirdağ, Türkiye</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-sm text-blue-300">7/24 Acil Sondaj Destek Hattı</p>
            </div>
          </div>

          {/* SAĞ TARAF: Form Alanı */}
          <div className="p-8 md:w-2/3">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Hemen Teklif Al</h3>
            
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              {/* Ad Soyad */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Adınız Soyadınız</label>
                <input 
                  type="text" 
                  name="user_name" // EmailJS bu ismi kullanacak
                  required 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-3 focus:border-blue-500 focus:ring-blue-500" 
                  placeholder="Ahmet Yılmaz"
                />
              </div>

              {/* Telefon ve Email Yan Yana */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Telefon Numaranız</label>
                  <input 
                    type="tel" 
                    name="user_phone" 
                    required 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-3 focus:border-blue-500 focus:ring-blue-500" 
                    placeholder="05XX XXX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">E-Posta Adresiniz</label>
                  <input 
                    type="email" 
                    name="user_email" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-3 focus:border-blue-500 focus:ring-blue-500" 
                    placeholder="ornek@mail.com"
                  />
                </div>
              </div>

              {/* Konu / Hizmet Türü */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Hizmet Türü</label>
                <select 
                  name="service_type"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-3 bg-white"
                >
                  <option>Su Sondajı</option>
                  <option>Zemin Etüdü</option>
                  <option>Kuyu Temizliği</option>
                  <option>Dalgıç Pompa</option>
                  <option>Diğer</option>
                </select>
              </div>

              {/* Mesaj */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Mesajınız / Arazi Bilgisi</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-3 focus:border-blue-500 focus:ring-blue-500" 
                  placeholder="Arazim eğimli, yaklaşık 100m derinlik düşünüyorum..."
                ></textarea>
              </div>

              {/* Buton ve Durum Mesajları */}
              <div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:bg-gray-400"
                >
                  {loading ? "Gönderiliyor..." : "Teklif İste"}
                </button>
              </div>

              {success && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                  Mesajınız başarıyla alındı! En kısa sürede dönüş yapacağız.
                </div>
              )}
              
              {error && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                  Bir hata oluştu. Lütfen telefon ile ulaşmayı deneyiniz.
                </div>
              )}

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}