// Data terpusat untuk semua proyek (WDD 3.1, 3.1)
// Gambar masih placeholder, bisa diganti nanti.

export const projects = [
  {
    id: 'tapstok',
    featured: true,
    title: 'Tapstok: Sistem Manajemen Stok Berbasis NFC',
    subtitle: 'Pemberdayaan UMKM (Program P2MW)',
    tags: ['Vue.js', 'NFC', 'Manajemen', 'Mobile'],
    imageUrl: 'https://placehold.co/600x400/8B5CF6/E5E7EB?text=Tapstok+App',
    description:
      'Memimpin tim 4 orang mengembangkan sistem manajemen stok terintegrasi NFC untuk UMKM lokal. Merancang aplikasi yang mencatat barang masuk/keluar secara real-time.',
    problem:
      'UMKM lokal kesulitan melacak inventaris secara manual, yang sering menyebabkan kesalahan pencatatan, kehilangan stok, dan inefisiensi operasional.',
    solution:
      'Aplikasi seluler yang terhubung dengan stiker NFC. Setiap produk ditandai, memungkinkan pencatatan instan hanya dengan memindai tag. Uji coba berhasil mengurangi kesalahan inventaris hingga 70%.',
    links: {
      repo: '#',
      demo: '#',
    },
  },
  {
    id: 'bus-ticket',
    featured: true,
    title: 'Digitalisasi Pemesanan Tiket Bus Antarkota',
    subtitle: 'Platform Pemesanan Berbasis Web',
    tags: ['JavaScript', 'HTML', 'CSS', 'Web'],
    imageUrl: 'https://placehold.co/600x400/8B5CF6/E5E7EB?text=Web+Tiket+Bus',
    description:
      'Mengembangkan platform pemesanan tiket berbasis web (MVP) untuk penyedia layanan bus antarkota, mendukung bisnis transportasi kecil untuk mengurangi operasi manual.',
    problem:
      'Penyedia jasa transportasi bus kecil masih mengandalkan pencatatan manual dan pemesanan via telepon, yang rentan terhadap *human error* dan tidak efisien.',
    solution:
      'Membangun MVP (Minimum Viable Product) dengan fitur pencarian rute, pemilihan jadwal, dan manajemen pesanan. Desain UI dibuat responsif menggunakan HTML, CSS, dan JavaScript.',
    links: {
      repo: '#',
      demo: '#',
    },
  },
  {
    id: 'market-analysis',
    featured: true,
    title: 'Analisis Pasar Modal & Saham',
    subtitle: 'Studi Kasus & Laporan Analisis (Persona)',
    tags: ['Analisis', 'TradingView', 'Finansial'],
    imageUrl: 'https://placehold.co/600x400/8B5CF6/E5E7EB?text=Market+Analysis',
    description:
      'Kumpulan analisis teknikal dan fundamental pribadi untuk mengidentifikasi peluang investasi di pasar saham, sejalan dengan persona sebagai *stock enthusiast*. (Sertifikasi BEI).',
    problem:
      'Mengidentifikasi peluang investasi dan mengelola risiko di pasar saham Indonesia yang fluktuatif membutuhkan pendekatan yang sistematis dan berbasis data.',
    solution:
      'Menerapkan analisis teknikal (menggunakan TradingView) dan analisis fundamental (berdasarkan laporan keuangan dan berita) untuk membuat keputusan investasi yang terinformasi.',
    links: {
      repo: '#', // Bisa link ke TradingView profile jika ada
      demo: '#',
    },
  },
  // Tambahkan proyek lain di sini nanti
]
