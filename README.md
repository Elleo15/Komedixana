# KOMEDİXANA — Rəsmi Sayt

Azərbaycanın ən sevimli komediya şousu **KOMEDİXANA**-nın rəsmi vebsaytı.  
Xəzər TV-də hər **şənbə və bazar** saat **22:00**-da yayımlanır.

---

## 📁 Fayl Strukturu

```
komedixana/
├── index.html          ← Əsas səhifə (bütün bölmələr burada)
├── style.css           ← Bütün dizayn və animasiyalar
├── script.js           ← Bütün funksionallıq (dil, modal, form)
└── assets/
    ├── logo/
    │   └── logo.jpg    ← Komedixana loqosu (favicon + background)
    ├── actors/         ← Aktyor şəkilləri
    │   ├── enver-abbasov.png
    │   ├── hesret-hesretov.png
    │   ├── xeyale-quliyeva.png
    │   ├── zarina-qurbanova.png
    │   ├── cavidan-novruz.png
    │   ├── melek-kazimova.jpg
    │   ├── mensur-serif.png
    │   ├── ilkin-misgerli.png
    │   ├── elgun-huseynov.png
    │   └── gulzar-eshrefova.png
    └── sponsors/       ← Sponsor loqoları
        ├── gardashlar.png
        ├── permolit.png
        ├── predo-baby.png
        ├── quicks.png
        ├── rosko.jpg
        ├── chiko.png
        ├── oba-market.png
        └── hell-energy.png
```

---

## 🌐 Saytın Bölmələri

| Bölmə | Açıqlama |
|-------|----------|
| **Hero** | Əsas ekran — loqo, başlıq, yayım saatları, düymələr |
| **Ticker** | Hərəkətli xəbər bandı |
| **Haqqında** | Veriliş haqqında məlumat + statistika |
| **Bu Həftə** | Son 2 YouTube bölümü |
| **Əvvəlki Bölümlər** | Köhnə bölümlər (horizontal scroll) |
| **Aktyor Heyəti** | 10 aktyor — kliklədikdə modal açılır |
| **Bilet Al** | Çəkilişə qatılmaq üçün forma |
| **Sponsorlar** | Baş sponsorlar + digər sponsorlar |
| **Sosial** | YouTube, Instagram, Xəzər TV linkləri |
| **Footer** | Sayt xəritəsi + müəllif |

---

## ✨ Xüsusiyyətlər

- **3 Dil Dəstəyi** — Azərbaycan, Rus, İngilis (tam tərcümə)
- **Mobil Optimizasiya** — Bütün ekran ölçülərində işləyir
- **Scroll Animasiyaları** — Elementlər sürüşdürəndə görünür
- **Aktyor Modalı** — Hər aktyor üçün popup pəncərə
- **Marquee Ticker** — Hərəkətli reklam bandı
- **Parlaq Lampa Animasiyası** — Sirk estetikasına uyğun
- **Favicon** — Brauzer tabında loqo görünür

---

## 🔧 Yenilənməsi Lazım Olan Məlumatlar

### Hər həftə yenilənməlidir:
`index.html` faylında bu hissəni tap (`<!-- Bu həftənin bölümləri -->`):
```html
src="https://www.youtube.com/embed/VIDEO_ID"
```
YouTube video ID-sini yeni bölümün ID-si ilə əvəz et.

### Yeni aktyor əlavə etmək:
`script.js` faylında `actors` array-inə əlavə et:
```js
{
  key: "yeni_aktyor",
  name: "Ad Soyad",
  photo: "assets/actors/fayl-adi.png",
  insta: "instagram_adi",
}
```
Şəkili `assets/actors/` qovluğuna əlavə et.

### Sponsor əlavə etmək:
`index.html`-də sponsors bölməsini tap:
```html
<div class="sponsor-tile sr">
  <img src="assets/sponsors/yeni-sponsor.png" alt="Sponsor Adı">
</div>
```
Loqonu `assets/sponsors/` qovluğuna əlavə et.

---

## 🚀 Saytı Onlayn Etmək (GitHub Pages)

1. [github.com](https://github.com) saytında hesab aç
2. Yeni repository yarat — adı: `komedixana`
3. Bütün faylları yüklə
4. Settings → Pages → Branch: `main` → Save
5. Saytın ünvanı: `https://istifadeciadı.github.io/komedixana`

---

## 📞 Əlaqə

**Sayt müəllifi:** [Elvin Eyvazov](https://www.elvineyvazov.shop)

**Veriliş:** KOMEDİXANA — Xəzər TV  
**YouTube:** [@Komedixana](https://www.youtube.com/@Komedixana)  
**Instagram:** [@komedixana_official](https://www.instagram.com/komedixana_official)

---

*© 2026 KOMEDİXANA. Bütün hüquqlar qorunur. Xəzər TV.*
