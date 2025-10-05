import { create } from 'zustand';
import { sfx } from '../sound/sfx';
import { gameContent } from '../data/gameContent';

// Mengelola state game secara global
export const useGameStore = create((set) => ({
  gameStatus: 'start', // 'start', 'playing', 'gameOver', 'won'
  collectedSkills: [],
  projectToShow: null,
  isMuted: sfx.getIsMuted(),

  startGame: () => set({ 
    gameStatus: 'playing', 
    collectedSkills: [],
    projectToShow: null,
  }),

  winGame: () => set({ gameStatus: 'won' }),
  
  gameOver: () => set({ gameStatus: 'gameOver' }),

  restartGame: () => set({ gameStatus: 'start', collectedSkills: [], projectToShow: null }),

  collectSkill: (skillName) => set((state) => ({
    collectedSkills: state.collectedSkills.includes(skillName) 
      ? state.collectedSkills 
      : [...state.collectedSkills, skillName],
  })),

  showProjectPreview: (projectName) => set({ projectToShow: gameContent.projects[projectName] }),
  clearProjectPreview: () => set({ projectToShow: null }),

  toggleMute: () => set({ isMuted: sfx.toggleMute() }),
}));
