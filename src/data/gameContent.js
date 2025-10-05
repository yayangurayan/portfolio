// Data untuk mendefinisikan level, posisi platform, item, dll.
export const level1 = {
    platforms: [
        { x: 0, y: 450, width: 300, height: 50 },
        { x: 350, y: 380, width: 200, height: 30 },
        { x: 600, y: 300, width: 250, height: 30 },
        { x: 400, y: 200, width: 150, height: 30 },
        { x: 750, y: 150, width: 150, height: 30 },
    ],
    skills: [
        { x: 450, y: 340, name: 'HTML' },
        { x: 700, y: 260, name: 'CSS' },
        { x: 475, y: 160, name: 'JS' },
    ],
    bugs: [
        { x: 400, y: 350, width: 30, height: 30, vx: 1.5 },
        { x: 650, y: 270, width: 30, height: 30, vx: -1.5 },
    ],
    // Tujuan akhir level (setelah semua skill terkumpul)
    goal: { x: 800, y: 100, width: 60, height: 50 },
    // Data untuk kartu preview proyek
    projects: {
        "Tapstok": {
            title: "Proyek: Tapstok",
            tech: ["Manajemen Stok", "NFC"]
        }
    }
};
