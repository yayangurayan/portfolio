// Data terpusat untuk semua proyek (WDD 3.1, 3.1)
// Gambar masih placeholder, bisa diganti nanti.
// SEMUA string sekarang memiliki varian _id dan _en

export const projects = [
  {
    id: 'tapstok',
    featured: true,
    title_id: 'Tapstok: Sistem Manajemen Stok Berbasis NFC',
    title_en: 'Tapstok: NFC-Based Stock Management System',
    subtitle_id: 'Pemberdayaan UMKM (Program P2MW)',
    subtitle_en: 'MSME Empowerment (P2MW Program)',
    tags: ['Vue.js', 'NFC', 'Manajemen', 'Mobile'],
    imageUrl: 'https://placehold.co/600x400/8B5CF6/E5E7EB?text=Tapstok+App',
    description_id:
      'Memimpin tim 4 orang mengembangkan sistem manajemen stok terintegrasi NFC untuk UMKM lokal. Merancang aplikasi yang mencatat barang masuk/keluar secara real-time.',
    description_en:
      'Led a team of 4 in developing an NFC-integrated stock management system for local MSMEs. Designed an app that records incoming/outgoing goods in real-time.',
    problem_id:
      'UMKM lokal kesulitan melacak inventaris secara manual, yang sering menyebabkan kesalahan pencatatan, kehilangan stok, dan inefisiensi operasional.',
    problem_en:
      'Local MSMEs struggled with manual inventory tracking, leading to frequent recording errors, stock loss, and operational inefficiencies.',
    solution_id:
      'Aplikasi seluler yang terhubung dengan stiker NFC. Setiap produk ditandai, memungkinkan pencatatan instan hanya dengan memindai tag. Uji coba berhasil mengurangi kesalahan inventaris hingga 70%.',
    solution_en:
      'A mobile application connected to NFC stickers. Each product is tagged, allowing instant logging just by scanning. Trials successfully reduced inventory errors by up to 70%.',
    links: {
      repo: '#',
      demo: '#',
    },
  },
  {
    id: 'bus-ticket',
    featured: true,
    title_id: 'Digitalisasi Pemesanan Tiket Bus Antarkota',
    title_en: 'Digitalization of Intercity Bus Ticket Booking',
    subtitle_id: 'Platform Pemesanan Berbasis Web',
    subtitle_en: 'Web-Based Booking Platform',
    tags: ['JavaScript', 'HTML', 'CSS', 'Web'],
    imageUrl: 'https://placehold.co/600x400/8B5CF6/E5E7EB?text=Web+Tiket+Bus',
    description_id:
      'Mengembangkan platform pemesanan tiket berbasis web (MVP) untuk penyedia layanan bus antarkota, mendukung bisnis transportasi kecil untuk mengurangi operasi manual.',
    description_en:
      'Developed a web-based ticket booking platform (MVP) for intercity bus service providers, supporting small transport businesses in reducing manual operations.',
    problem_id:
      'Penyedia jasa transportasi bus kecil masih mengandalkan pencatatan manual dan pemesanan via telepon, yang rentan terhadap *human error* dan tidak efisien.',
    problem_en:
      'Small bus transport providers still rely on manual booking and phone orders, which is prone to human error and inefficiency.',
    solution_id:
      'Membangun MVP (Minimum Viable Product) dengan fitur pencarian rute, pemilihan jadwal, dan manajemen pesanan. Desain UI dibuat responsif menggunakan HTML, CSS, dan JavaScript.',
    solution_en:
      'Built an MVP (Minimum Viable Product) with route search, schedule selection, and order management features. The UI was built responsively using HTML, CSS, and JavaScript.',
    links: {
      repo: '#',
      demo: '#',
    },
  },
  {
    id: 'market-analysis',
    featured: true,
    title_id: 'Analisis Pasar Modal & Saham',
    title_en: 'Capital Market & Stock Analysis',
    subtitle_id: 'Studi Kasus & Laporan Analisis (Persona)',
    subtitle_en: 'Case Studies & Analysis Reports (Persona)',
    tags: ['Analisis', 'TradingView', 'Finansial'],
    imageUrl: 'https://placehold.co/600x400/8B5CF6/E5E7EB?text=Market+Analysis',
    description_id:
      'Kumpulan analisis teknikal dan fundamental pribadi untuk mengidentifikasi peluang investasi di pasar saham, sejalan dengan persona sebagai *stock enthusiast*. (Sertifikasi BEI).',
    description_en:
      'A collection of personal technical and fundamental analyses to identify investment opportunities in the stock market, aligning with the *stock enthusiast* persona. (IDX Certified).',
    problem_id:
      'Mengidentifikasi peluang investasi dan mengelola risiko di pasar saham Indonesia yang fluktuatif membutuhkan pendekatan yang sistematis dan berbasis data.',
    problem_en:
      'Identifying investment opportunities and managing risk in the volatile Indonesian stock market requires a systematic, data-driven approach.',
    solution_id:
      'Menerapkan analisis teknikal (menggunakan TradingView) dan analisis fundamental (berdasarkan laporan keuangan dan berita) untuk membuat keputusan investasi yang terinformasi.',
    solution_en:
      'Applying technical analysis (using TradingView) and fundamental analysis (based on financial reports and news) to make informed investment decisions.',
    links: {
      repo: '#', // Bisa link ke TradingView profile jika ada
      demo: '#',
    },
  },
]
