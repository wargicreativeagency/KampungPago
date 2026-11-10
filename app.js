const whatsappNumber = '6281260001019';
const whatsappUrl = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
const generalMessage = 'Halo Kampung Pago, saya ingin informasi dan reservasi. Mohon dibantu, terima kasih.';

const icon = (paths) => `<svg viewBox="0 0 24 24" aria-hidden="true">${paths}</svg>`;
const services = [
  { name: 'Hotel', description: 'Pilihan menginap untuk waktu istirahat dan kebersamaan Anda.', cta: 'Tanya Kamar', message: 'Halo Kampung Pago, saya ingin menanyakan ketersediaan dan reservasi kamar hotel.', icon: '<path d="M3 20V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11M3 15h18M6 11h4a2 2 0 0 1 2 2v2H4v-2a2 2 0 0 1 2-2ZM14 11h4a2 2 0 0 1 2 2v2h-8v-2a2 2 0 0 1 2-2Z"/>' },
  { name: 'Restaurant (Traditional food)', description: 'Nikmati hidangan tradisional bersama keluarga dan orang terdekat.', cta: 'Tanya Restoran', message: 'Halo Kampung Pago, saya ingin informasi restoran dan hidangan tradisional.', icon: '<path d="M3 2v7a4 4 0 0 0 4 4h1V2M6 2v20M20 2v20M20 2c-3 2-4 5-4 9h4"/>' },
  { name: 'Meeting rooms', description: 'Ruang untuk kebutuhan pertemuan dan kegiatan kelompok.', cta: 'Tanya Meeting Room', message: 'Halo Kampung Pago, saya ingin informasi meeting room untuk kegiatan kelompok.', icon: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M8 9h8M8 13h5"/>' },
  { name: 'Swimming pools', description: 'Lengkapi waktu bersama dengan aktivitas di kolam renang.', cta: 'Tanya Kolam Renang', message: 'Halo Kampung Pago, saya ingin informasi fasilitas kolam renang.', icon: '<path d="M2 17c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1M3 12c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1"/><path d="M7 9V5a2 2 0 1 1 4 0M17 9V5a2 2 0 1 1 4 0"/>' },
  { name: 'Outbond Arena', description: 'Area aktivitas bersama untuk keluarga, komunitas, atau tim.', cta: 'Tanya Outbond', message: 'Halo Kampung Pago, saya ingin informasi kegiatan dan fasilitas Outbond Arena.', icon: '<path d="M12 22v-8M5 22h14M12 14 5 7l7-5 7 5-7 7ZM5 7l7 2 7-2"/>' },
];

const bookingLinks = [
  { id: 'booking', label: 'Booking.com', sourceUrl: 'https://www.booking.com/Share-yh9qoc', href: 'https://www.booking.com/Share-yh9qoc', verificationStatus: 'Belum diverifikasi' },
  { id: 'hotels-app', label: 'Hotels App', sourceUrl: 'https://hotelsapp.onelink.me/fSyN/f17ne2jb', href: 'https://hotelsapp.onelink.me/fSyN/f17ne2jb', verificationStatus: 'Belum diverifikasi' },
  { id: 'agoda', label: 'Agoda', sourceUrl: 'https://www.agoda.com/kampung-pa-go-resort-ciwidey/hotel/bandung-id.html?countryId=192&finalPriceView=1&isShowMobileAppPrice=false&cid=1844160&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2026-11-10&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=IDR&isFreeOccSearch=false&los=1&searchrequestid=c36845e1-49d6-437d-b0b4-03e96a49115a&ds=whtZ%2FAs2fqGjaYft', href: 'https://www.agoda.com/kampung-pa-go-resort-ciwidey/hotel/bandung-id.html', verificationStatus: 'Kandidat evergreen; tujuan properti belum diverifikasi' },
  { id: 'traveloka', label: 'Traveloka', sourceUrl: 'https://trv.lk/c09bf19b', href: 'https://trv.lk/c09bf19b', verificationStatus: 'Belum diverifikasi' },
  { id: 'tiket', label: 'tiket.com', sourceUrl: 'https://www.tiket.com/id-id/hotel/indonesia/kampung-pago-resort-hotel-605001685363341546?room=1&adult=2&checkin=2026-11-10&checkout=2026-11-11&utm_source=google-hotel&utm_term=1302ff78-9786-4861-ad10-58d178253d05&utm_medium=aff-meta&utm_campaign=Google-Hotel-0023-B2B-none-hotel&utm_external=aff&searchSessionId=77E2AAB7-EFF4-44D5-B93A-95A4EBC1756D&referrer=https%3A%2F%2Fwww.tiket.com%2Fid-id%2Fhotel%2Fsearch%3FhotelID%3D1302ff78-9786-4861-ad10-58d178253d05%26checkin%3D2026-11-10%26checkout%3D2026-11-11%26adult%3D2%26country%3DID%26device%3Ddesktop%26isAat%3Dtrue%26utm_source%3Dgoogle-hotel%26utm_term%3D1302ff78-9786-4861-ad10-58d178253d05%26utm_medium%3Daff-meta%26utm_campaign%3DGoogle-Hotel-0023-B2B-none-hotel%26utm_external%3Daff%26tag_meta_id%3D34412887%26tag_meta_type%3Dgoogle-hotel%26isRedirect%3Dtrue%26currency%3DIDR%26night%3D1%26id%3Dkampung-pago-resort-hotel-605001685363341546%26type%3DHOTEL%26room%3D1%26q%3DCiwidey&utm_page=searchResultPage&tag_meta_id=34412887&tag_meta_type=google-hotel&night=1', href: 'https://www.tiket.com/id-id/hotel/indonesia/kampung-pago-resort-hotel-605001685363341546', verificationStatus: 'Kandidat evergreen; tujuan properti belum diverifikasi' },
  { id: 'wego', label: 'Wego', sourceUrl: 'https://www.wego.com/hotels/searches/BDO/2026-11-10/2026-11-11/3076168?guests=2&wego_hotel_id=3076168&bow_only=true&ts_code=2f2fc&wg_source=meta_distribution&wg_medium=gha&wg_campaign=fbl&ulang=id&wego_price=VVNEOjE3LjU2OjNkYTVmYmRjNTVlODI4MTAzNGJhODkxN2Y2OGJkZDRiYzFiZjNhOTgyYzg1OWViZTViYTQ2ODZkNmU3ZjJmMzI6YWd5bWJ3eWticWM6MTc5NDMxNTE0MzpEOklEOjMzYTExMTViZDllOTQyNDY6MjowOnRydWU6ZmFsc2U6Ug%3D%3D&provider=aG90ZWxzLndlZ28uY29t&view=map&search_id=b1722144e647985d', href: 'https://www.wego.com/hotels/searches/BDO/2026-11-10/2026-11-11/3076168?guests=2&wego_hotel_id=3076168&bow_only=true&ts_code=2f2fc&wg_source=meta_distribution&wg_medium=gha&wg_campaign=fbl&ulang=id&wego_price=VVNEOjE3LjU2OjNkYTVmYmRjNTVlODI4MTAzNGJhODkxN2Y2OGJkZDRiYzFiZjNhOTgyYzg1OWViZTViYTQ2ODZkNmU3ZjJmMzI6YWd5bWJ3eWticWM6MTc5NDMxNTE0MzpEOklEOjMzYTExMTViZDllOTQyNDY6MjowOnRydWU6ZmFsc2U6Ug%3D%3D&provider=aG90ZWxzLndlZ28uY29t&view=map&search_id=b1722144e647985d', verificationStatus: 'Belum diverifikasi; URL bertanggal' },
  { id: 'direct', label: 'Booking Direct', sourceUrl: 'https://kampungpagoresorthotel-bke.zoombookdirect.com/search/2026-11-10/2026-11-11/rooms/1/adults/2?channel=google-pre-pay&currency=IDR&adType=0&utm_campaign', href: 'https://kampungpagoresorthotel-bke.zoombookdirect.com/search/2026-11-10/2026-11-11/rooms/1/adults/2?channel=google-pre-pay&currency=IDR&adType=0&utm_campaign', verificationStatus: 'Belum diverifikasi; URL bertanggal' },
];

document.querySelector('#services-grid').innerHTML = services.map((service) => `
  <article class="service-card"><div class="service-icon">${icon(service.icon)}</div><h3>${service.name}</h3><p>${service.description}</p><a class="service-link" href="${whatsappUrl(service.message)}" target="_blank" rel="noopener noreferrer">${service.cta}<span aria-hidden="true">↗</span></a></article>
`).join('');

document.querySelector('#booking-grid').innerHTML = bookingLinks.map((link) => `
  <a class="booking-link" href="${link.href}" target="_blank" rel="noopener noreferrer"><span>${link.label}</span><span aria-hidden="true">↗</span></a>
`).join('');

document.querySelector('#year').textContent = new Date().getFullYear();

const galleryPhotos = [
  { src: './public/images/gallery/pago-exterior.webp', alt: 'Bangunan Kampung Pago di sisi kolam dan jalur pejalan kaki.', caption: 'Area tepi air', width: 1200, height: 745 },
  { src: './public/images/gallery/pago-reception.webp', alt: 'Tampak depan gedung resepsionis Kampung Pago.', caption: 'Gedung resepsionis', width: 1200, height: 800 },
  { src: './public/images/gallery/pago-corridor.webp', alt: 'Koridor beratap dengan kursi rotan di depan kamar.', caption: 'Koridor kamar', width: 1200, height: 800 },
  { src: './public/images/gallery/pago-hall.webp', alt: 'Ruang luas dengan karpet hijau dan bukaan ke area luar.', caption: 'Ruang bersama', width: 1200, height: 800 },
  { src: './public/images/gallery/pago-lobby.webp', alt: 'Area lobi dan meja resepsionis Kampung Pago.', caption: 'Area lobi', width: 1200, height: 800 },
  { src: './public/images/gallery/pago-walkway.webp', alt: 'Koridor beratap dengan pagar putih membentang di atas kolam.', caption: 'Jalur tepi air', width: 1024, height: 682 },
  { src: './public/images/gallery/pago-restaurant.webp', alt: 'Area bersantap dengan meja makan dan kursi merah.', caption: 'Area bersantap', width: 1024, height: 682 },
  { src: './public/images/gallery/pago-cottage.webp', alt: 'Pondok Kampung Pago di antara pepohonan.', caption: 'Pondok di tengah pepohonan', width: 1200, height: 800 },
  { src: './public/images/gallery/pago-room.webp', alt: 'Kamar dengan dua tempat tidur dan dinding berpanel kayu.', caption: 'Kamar dengan dua tempat tidur', width: 1200, height: 800 },
  { src: './public/images/gallery/pago-twin-room.webp', alt: 'Kamar dengan dua tempat tidur berseprai terang.', caption: 'Kamar twin', width: 1200, height: 630 },
];

const galleryGrid = document.querySelector('#gallery-grid');
const galleryToggle = document.querySelector('#gallery-toggle');
const galleryDialog = document.querySelector('#gallery-dialog');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxCaption = document.querySelector('#lightbox-caption');
const lightboxCounter = document.querySelector('#lightbox-counter');
let activePhotoIndex = 0;

galleryGrid.innerHTML = galleryPhotos.map((photo, index) => `
  <button class="gallery-photo" type="button" data-photo-index="${index}" aria-label="Buka foto: ${photo.caption}" ${index > 4 ? 'hidden' : ''}>
    <img src="${photo.src}" alt="${photo.alt}" width="${photo.width}" height="${photo.height}" loading="lazy" />
    <span>${photo.caption}</span>
  </button>
`).join('');

galleryToggle.addEventListener('click', () => {
  const expanded = galleryToggle.getAttribute('aria-expanded') === 'true';
  galleryToggle.setAttribute('aria-expanded', String(!expanded));
  galleryGrid.querySelectorAll('[data-photo-index]').forEach((photo) => {
    if (Number(photo.dataset.photoIndex) > 4) photo.hidden = expanded;
  });
  galleryToggle.innerHTML = expanded
    ? 'Lihat semua foto <span aria-hidden="true">↓</span>'
    : 'Tampilkan lebih sedikit <span aria-hidden="true">↑</span>';
});

function showPhoto(index) {
  activePhotoIndex = (index + galleryPhotos.length) % galleryPhotos.length;
  const photo = galleryPhotos[activePhotoIndex];
  lightboxImage.src = photo.src;
  lightboxImage.alt = photo.alt;
  lightboxCaption.textContent = photo.caption;
  lightboxCounter.textContent = `${String(activePhotoIndex + 1).padStart(2, '0')} / ${String(galleryPhotos.length).padStart(2, '0')}`;
}

galleryGrid.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-photo-index]');
  if (!trigger) return;
  showPhoto(Number(trigger.dataset.photoIndex));
  galleryDialog.showModal();
});

galleryDialog.querySelector('.lightbox-close').addEventListener('click', () => galleryDialog.close());
galleryDialog.querySelector('.lightbox-prev').addEventListener('click', () => showPhoto(activePhotoIndex - 1));
galleryDialog.querySelector('.lightbox-next').addEventListener('click', () => showPhoto(activePhotoIndex + 1));
galleryDialog.addEventListener('click', (event) => {
  if (event.target === galleryDialog) galleryDialog.close();
});
document.addEventListener('keydown', (event) => {
  if (!galleryDialog.open) return;
  if (event.key === 'ArrowLeft') showPhoto(activePhotoIndex - 1);
  if (event.key === 'ArrowRight') showPhoto(activePhotoIndex + 1);
});
