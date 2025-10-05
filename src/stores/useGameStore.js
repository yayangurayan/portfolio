import { create } from 'zustand';
import { level1 } from '../data/gameContent.js';

// Mengelola state game secara global
export const useGameStore = create((set) => ({
  gameStatus: 'start', // 'start', 'playing', 'won'
  collectedSkills: [], // Melacak skill yang terkumpul
  projectToShow: null, // State untuk menampilkan kartu preview proyek

  startGame: () => set({ 
    gameStatus: 'playing', 
    collectedSkills: [], // Reset skill
    projectToShow: null, // Reset preview
  }),

  winGame: () => set({ gameStatus: 'won' }),

  collectSkill: (skillName) => set((state) => ({
    // Tambahkan skill baru ke dalam array tanpa duplikat
    collectedSkills: state.collectedSkills.includes(skillName) 
      ? state.collectedSkills 
      : [...state.collectedSkills, skillName],
  })),

  // Aksi baru untuk menampilkan dan menghapus preview proyek
  showProjectPreview: (projectName) => set({ projectToShow: level1.projects[projectName] }),
  clearProjectPreview: () => set({ projectToShow: null }),
}));
