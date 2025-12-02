// app/data/blogData.ts

export const blogPosts = [
  {
    id: 1,
    title: "Tekirdağ'da Su Sondajı Fiyatları 2025",
    // DİKKAT: Slug'da Türkçe karakter, boşluk, büyük harf YOK!
    slug: "tekirdag-su-sondaji-fiyatlari-2025", 
    excerpt: "Tekirdağ ve Çorlu bölgesinde su sondajı maliyetleri neye göre belirlenir? Derinlik, zemin yapısı ve kuyu ruhsatı süreçlerini inceledik.",
    content: `
      Tekirdağ ve tüm Trakya bölgesinde su sondajı fiyatları 2025 yılında çeşitli faktörlere göre değişiklik göstermektedir.
      
      1. Zemin Yapısı: Kayalık zeminlerde sondaj maliyeti, yumuşak zeminlere göre daha yüksektir.
      2. Derinlik: Suyun kaç metrede çıkacağı maliyeti doğrudan etkiler.
      3. Boru Kalitesi: Kullanılan PVC veya Çelik boruların kalitesi kuyu ömrünü belirler.

      Çorlu, Çerkezköy ve Ergene havzasında ortalama su derinlikleri 150m ile 300m arasında değişmektedir.
      
      Ücretsiz keşif için bizimle iletişime geçebilirsiniz.
    `,
    date: "02 Ocak 2025",
    image: "/sondajfiyati.webp"
  },
  {
    id: 2,
    title: "Zemin Etüdü Neden Zorunludur?",
    slug: "zemin-etudu-neden-zorunludur",
    excerpt: "İnşaat öncesi zemin etüdü raporu neden alınmalıdır? Deprem yönetmeliği ve güvenli yapı için zemin etüdünün önemi.",
    content: `
      Zemin etüdü, yapılacak yapının yükünü zeminin taşıyıp taşıyamayacağını belirlemek için yapılır.
      
      Özellikle Tekirdağ gibi deprem kuşağında olan bölgelerde zemin etüdü hayati önem taşır. Sıvılaşma riski olan bölgelerde özel iyileştirme çalışmaları yapılmalıdır.
    `,
    date: "15 Aralık 2024",
    image: "/zeminetudu.webp"
  },
  {
    id: 3,
    title: "Bahçe Sulama İçin Kuyu Açtırmak",
    slug: "bahce-sulama-icin-kuyu-actirmak",
    excerpt: "Tarla ve bahçe sulaması için sondaj kuyusu açtırmak elektrik ve su faturasından ne kadar tasarruf sağlar?",
    content: `
      Tarımsal sulamada şebeke suyu kullanmak maliyetlidir. Kendi kuyunuzu açtırmak uzun vadede %80 tasarruf sağlar.
      
      Bahçe sulama kuyuları genellikle daha sığ (50-100m) kuyulardır ve ruhsatlandırma süreçleri daha hızlıdır.
    `,
    date: "10 Kasım 2024",
    image: "/bahcesulama.webp"
  }
];