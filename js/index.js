const quotes = [
  "Futbol basit bir oyundur. Zor olan basit oynamaktır. - Johan Cruyff",
  "Futbolcu olmasaydım ne mi olurdum? Bakir. - Peter Crouch",
  "Bu futbol lanet bir şey. (1999'daki Şampiyonlar Ligi finalinde Bayern Münih'i son dakikada attıkları gollerle 2-1 mağlup ettikten sonra). - Alex Ferguson",
  "Kazanmak her şeydir. - Vince Lombardi",
  "Takım ruhu başarıya giden yoldur. - Michael Jordan",
  "İyi teknik direktör olmak için iyi futbolcu olmaya gerek yok. Hiçbir iyi jokey öncesinde at değildi. - Arrigo Sacchi",
  "Futbol ölüm kalım meselesi değildir. Daha da önemlisidir. - Bill Shankly",
  "Gökyüzünü hedeflersen, tavana ulaşırsın. Tavanı hedeflersen, yerde kalırsın. - Bill Shankly",
  "Futbol basit bir oyundur. 22 kişi 90 dakika boyunca topun peşinden koşar ve sonunda hep Almanlar kazanır. - Gary Lineker",
  "Her topun düşüşünde düşünmek zorundasınız. - Dennis Bergkamp",
  "Çocukken herkes gol atmamı istiyordu. Büyüdüm, aptallaştım ve kaleci oldum. - Gianluigi Buffon",
  "Annem benim en iyi olduğumu söylüyor. Onunla asla iddialaşmam. - Maradona",
  "Başarısız hazırlanman, başarısızlığını hazırlar. - Roy Keane",
  "Futbol, kadın gibidir. Anlaşılmaz. - Silvio Berlusconi",
];

function displayRandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = randomQuote;
}

window.onload = displayRandomQuote;

const news = [
  "Galatasaray, devre arası transfer döneminde kadrosunu güçlendirmek için Brezilyalı orta saha oyuncusu Douglas Luiz ile ilgileniyor. Teknik direktör Okan Buruk, orta saha rotasyonunu genişletmek istiyor.",
  "Beşiktaş, ara transfer döneminde takımda bazı değişikliklere gitmeye hazırlanıyor. Siyah-beyazlılar, özellikle defans hattını güçlendirmek için çalışmalar yapıyor.",
  "Fenerbahçe, 11 Aralık 2024 tarihinde, UEFA Avrupa Ligi’ndeki grup aşamasının 6. maçında İspanyol temsilcisi Athletic Bilbao’yu konuk edecek.",
  "Süper Lig’in 14. haftasında Galatasaray-Eyüpspor mücadelesi beraberlikle sonlandı.",
  "Okan Buruk ve öğrencileri, Süper Lig’de geride kalan 14 maçta 12 galibiyet ve 2 beraberlik alarak topladığı 38 puanla zirvede yer alıyor.",
  "2 Aralık 2024 tarihinde oynanan maçta Fenerbahçe-Gaziantep FK mücadelesinden 3-1 biten skorla fenerbahçe galip geldi.",
  "Süper Lig’in 15. haftasında İstanbul’da oynanan dev derbinin galibi siyah-beyazlılar.",
  "2 Aralık 2024 tarihinde oynanan maçta Hatayspor-Beşiktaş mücadelesi beraberlikle sonlandı.",
  "Galatasaray'ın Avrupa Ligi'nde bir sonraki rakibi Malmö.",
  "Galatasaray, UEFA Avrupa Ligi’nde grup aşamalarının sonuna yaklaşırken, 5. haftada Hollanda temsilcisi AZ Alkmaar ile oynadığı maçta berabere kalıyor.",
  "Beşiktaş'ın Avrupa Ligi'nde bir sonraki rakibi Bodo-Glimt.",
  "Fenerbahçe, UEFA Avrupa Ligi’nde 5. hafta mücadelesinde Çekya temsilcisi Slavia Prag’ı mağlup ediyor.",
  "Beşiktaş, UEFA Avrupa Ligi’nde 5. hafta mücadelesinde İsrail temsilcisi Maccabi Tel-Aviv’e mağlup oluyor.",
  "Fenerbahçe'nin Avrupa Ligi'nde bir sonraki rakibi Athletic Bilbao.",
];

let currentIndex = 0;

function updateNews() {
  const banner = document.getElementById("news-banner");
  banner.textContent = news[currentIndex];
  currentIndex = (currentIndex + 1) % news.length;
}
setInterval(updateNews, 10000);
