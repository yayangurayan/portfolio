// Data untuk level, posisi platform, item, dll.
export const gameContent = {
    platforms: [
        // Blok awal
        { x: 0, y: 450, width: 300, height: 50 },
        { x: 350, y: 380, width: 200, height: 30 },
        { x: 600, y: 300, width: 250, height: 30 },
        { x: 400, y: 200, width: 150, height: 30 },
        { x: 750, y: 150, width: 150, height: 30 },
        
        // Bagian tengah yang lebih menantang
        { x: 1000, y: 350, width: 300, height: 30 },
        { x: 1200, y: 250, width: 180, height: 30 },
        { x: 1500, y: 180, width: 250, height: 30 },
        
        // Blok akhir menuju tujuan
        { x: 1800, y: 450, width: 400, height: 50 },
    ],
    skills: [
        { x: 450, y: 340, name: 'HTML' },
        { x: 700, y: 260, name: 'CSS' },
        { x: 475, y: 160, name: 'JS' },
        { x: 1280, y: 210, name: 'React' },
        { x: 1600, y: 140, name: 'Zustand' }
    ],
    bugs: [
        // Bug dengan jangkauan patroli yang ditentukan
        { id: 1, x: 400, y: 350, width: 30, height: 30, vx: 1.5, originalX: 350, range: 150 },
        { id: 2, x: 650, y: 270, width: 30, height: 30, vx: -2, originalX: 600, range: 200 },
        { id: 3, x: 1850, y: 420, width: 30, height: 30, vx: 2.5, originalX: 1800, range: 350 },
    ],
    // Tujuan akhir setelah semua skill terkumpul
    goal: { x: 2100, y: 370, width: 60, height: 80 },
    // Data untuk kartu preview proyek
    projects: {
        "Tapstok": {
            title: "Proyek: Tapstok",
            tech: ["Manajemen Stok", "NFC"]
        }
    }
};
