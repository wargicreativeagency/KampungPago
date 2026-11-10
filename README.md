# Kampung Pago Biolink

Halaman biolink statis dalam Bahasa Indonesia. Tidak perlu menginstal paket atau menyiapkan backend.

## Preview lokal

Dari folder proyek, jalankan:

```sh
python3 -m http.server 8000
```

Buka `http://localhost:8000`. Hentikan server dengan `Ctrl+C`.

## Deployment Vercel

Hubungkan repositori GitHub dan gunakan branch produksi `main`, dengan Root Directory pada root repositori. `vercel.json` memilih preset Other, melewati instalasi/build, dan menetapkan Output Directory ke `.` agar `index.html`, CSS, JavaScript, dan aset terunggah bersama. Tanpa konfigurasi ini, keberadaan folder `public` membuat Vercel hanya menyajikan folder tersebut dan halaman utama menjadi 404.

## Konten dan aset

- Nomor WhatsApp, pesan setiap layanan, dan tujuh kanal booking ada di `app.js`.
- WhatsApp memakai nomor internasional `6281260001019`; nomor tampilan berada di `index.html`.
- Logo SVG yang tersedia dipakai pada navigasi dan favicon.
- Hero memakai `Background Pago.webp` (1448 × 1086, sekitar 333 KB), hasil konversi WebP dari `Background Pago.png` dengan kualitas 82. PNG asli tetap disimpan.
- Galeri berisi sepuluh foto dari halaman properti Kampung Pa’go di Expedia, Agoda, Traveloka, dan Klook, diturunkan menjadi WebP lokal. `public/images/gallery/manifest.json` mencatat URL sumber, deskripsi, dan status penggunaan setiap foto. Foto sudah dicocokkan secara visual dengan properti; hak pakai ulang di luar permintaan preview ini belum diverifikasi.
- Kartu lokasi menyematkan Google Maps dengan pencarian nama Kampung Pa’go dan alamat yang dipublikasikan pada situs properti serta Google Hotels. Tombol navigasi tetap memakai tautan Maps dari brief.
- Data OTA memisahkan `sourceUrl`, `href`, dan `verificationStatus`. Tautan Agoda dan tiket.com memakai kandidat halaman evergreen dari brief; tujuan properti masih perlu diverifikasi. Tautan Wego dan Booking Direct masih berisi tanggal 10–11 November 2026. Label redirect Hotels App dan Traveloka juga belum diperiksa.
- Domain deployment, canonical URL, dan gambar Open Graph belum diisi karena domain serta foto belum tersedia.

Styling berada di `styles.css`. Warna brand utama `#A8060E`; antarmuka memakai fallback system sans-serif jika Google Fonts tidak dapat diakses.
# KampungPago
