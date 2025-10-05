import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';
import { useGameStore } from '/src/store/useGameStore.js';
import { level1 } from '/src/data/gameContent.js';
import { useEventListener } from '/src/hooks/useEventListener.js';

// --- Konstanta & Komponen ---
const PLAYER_SIZE = { width: 40, height: 60 };
const PLAYER_SPEED = 5;
const GRAVITY = 0.6;
const JUMP_FORCE = -14;
const PLAYER_INITIAL_POS = { x: 50, y: 300 };

// Komponen Visual
const Player = ({ x, y }) => ( <Rect x={x} y={y} width={PLAYER_SIZE.width} height={PLAYER_SIZE.height} fillLinearGradientStartPoint={{ x: 0, y: 0 }} fillLinearGradientEndPoint={{ x: PLAYER_SIZE.width, y: PLAYER_SIZE.height }} fillLinearGradientColorStops={[0, '#8B5CF6', 1, '#EC4899']} cornerRadius={5} shadowBlur={10} shadowColor="#8B5CF6" /> );
const Platform = ({ x, y, width, height }) => ( <Rect x={x} y={y} width={width} height={height} fill="#30363d" cornerRadius={3} /> );
const SkillItem = ({ x, y, name }) => ( <Text text={name} x={x} y={y} fontSize={20} fill="#FBBF24" fontFamily="Inter, sans-serif" shadowColor="black" shadowBlur={5} shadowOpacity={0.5} /> );
const Goal = ({ x, y, width, height }) => ( <Rect x={x} y={y} width={width} height={height} fillLinearGradientStartPoint={{ x: 0, y: 0 }} fillLinearGradientEndPoint={{ x: width, y: height }} fillLinearGradientColorStops={[0, '#10B981', 1, '#F59E0B']} cornerRadius={5} shadowBlur={15} shadowColor="#10B981" /> );
const Bug = ({ x, y, width, height }) => ( <Rect x={x} y={y} width={width} height={height} fill="#EF4444" cornerRadius={15} shadowBlur={5} shadowColor="#EF4444"/> );

const GameCanvas = () => {
    const { winGame, collectSkill, collectedSkills, showProjectPreview } = useGameStore();
    
    // State permainan
    const [player, setPlayer] = useState({ ...PLAYER_INITIAL_POS, vx: 0, vy: 0, onGround: false });
    const [skillsOnLevel, setSkillsOnLevel] = useState(level1.skills);
    const [bugs, setBugs] = useState(level1.bugs);
    const [particles, setParticles] = useState([]);
    const [hitEffect, setHitEffect] = useState(0); // Untuk opacity layar merah saat terkena bug
    const keys = useRef({ a: false, d: false, w: false });
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 800, height: 500 });
    const [isGoalReached, setIsGoalReached] = useState(false);

    const createExplosion = (x, y, color = "#FBBF24") => {
        const newParticles = Array.from({ length: 20 }).map(() => ({
            x, y,
            vx: (Math.random() - 0.5) * 5,
            vy: (Math.random() - 0.5) * 5,
            radius: Math.random() * 3 + 1,
            life: 30, opacity: 1, color
        }));
        setParticles(current => [...current, ...newParticles]);
    };

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'a' || e.key === 'A') keys.current.a = true;
        if (e.key === 'd' || e.key === 'D') keys.current.d = true;
        if ((e.key === 'w' || e.key === 'W' || e.key === ' ') && player.onGround) keys.current.w = true;
    }, [player.onGround]);
    
    const handleKeyUp = useCallback((e) => {
        if (e.key === 'a' || e.key === 'A') keys.current.a = false;
        if (e.key === 'd' || e.key === 'D') keys.current.d = false;
        if (e.key === 'w' || e.key === 'W' || e.key === ' ') keys.current.w = false;
    }, []);

    useEventListener('keydown', handleKeyDown);
    useEventListener('keyup', handleKeyUp);

    // Game Loop Utama
    useEffect(() => {
        let animationFrameId;
        const gameLoop = () => {
            if (isGoalReached) return;

            // Update posisi player (logika tidak berubah)
            setPlayer(p => { /* ... */ return p; });
            
            // Update posisi bug
            setBugs(currentBugs => currentBugs.map(bug => {
                let newX = bug.x + bug.vx;
                let newVx = bug.vx;
                // Pantulkan bug jika menyentuh batas platform tempat ia berada
                level1.platforms.forEach(p => {
                    if (bug.y > p.y - bug.height && bug.y < p.y + p.height) { // Cek apakah bug berada di level y platform
                        if (newX < p.x || newX + bug.width > p.x + p.width) {
                            newVx = -bug.vx;
                            newX = bug.x + newVx;
                        }
                    }
                });
                return { ...bug, x: newX, vx: newVx };
            }));

            // Deteksi kolisi skill (logika tidak berubah)
            setSkillsOnLevel(prevSkills => { /* ... */ return prevSkills; });
            
            // Deteksi kolisi bug
            bugs.forEach(bug => {
                const isColliding = player.x < bug.x + bug.width && player.x + PLAYER_SIZE.width > bug.x && player.y < bug.y + bug.height && player.y + PLAYER_SIZE.height > bug.y;
                if(isColliding) {
                    setPlayer(p => ({ ...p, ...PLAYER_INITIAL_POS, vy: 0 })); // Reset posisi
                    createExplosion(player.x + PLAYER_SIZE.width / 2, player.y + PLAYER_SIZE.height / 2, "#EF4444");
                    setHitEffect(1); // Tampilkan layar merah
                }
            });

            // Update partikel (logika tidak berubah)
            setParticles(prevParticles => { /* ... */ return prevParticles; });

            // Redupkan efek layar merah
            setHitEffect(val => Math.max(0, val - 0.05));

            // Cek kondisi kemenangan
            if (collectedSkills.length === level1.skills.length) {
                const goal = level1.goal;
                if (player.x < goal.x + goal.width && player.x + PLAYER_SIZE.width > goal.x && player.y < goal.y + goal.height && player.y + PLAYER_SIZE.height > goal.y) {
                    setIsGoalReached(true);
                    showProjectPreview("Tapstok");
                    setTimeout(winGame, 4500);
                }
            }

            animationFrameId = requestAnimationFrame(gameLoop);
        };
        animationFrameId = requestAnimationFrame(gameLoop);
        return () => cancelAnimationFrame(animationFrameId);
    }, [player, bugs, collectedSkills, showProjectPreview, winGame, isGoalReached]);

    useEffect(() => { /* ... logika resize tidak berubah ... */ }, []);

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-dark-bg text-dark-font font-inter p-4">
            <div className="absolute top-4 left-4 ..."> {/* UI Skill (tidak berubah) */} </div>
            <div className="text-center mb-4"> {/* UI Judul (tidak berubah) */} </div>
            
            <div ref={containerRef} className="w-full max-w-4xl bg-dark-bg-secondary border border-dark-border rounded-lg shadow-lg overflow-hidden">
                <Stage width={dimensions.width} height={dimensions.height}>
                    <Layer>
                        {level1.platforms.map((p, i) => <Platform key={`p-${i}`} {...p} />)}
                        {skillsOnLevel.map((s, i) => <SkillItem key={`s-${i}`} {...s} />)}
                        {bugs.map((b, i) => <Bug key={`b-${i}`} {...b} />)}
                        {particles.map((p, i) => <Circle key={`part-${i}`} x={p.x} y={p.y} radius={p.radius} fill={p.color} opacity={p.opacity} />)}
                        {collectedSkills.length === level1.skills.length && <Goal {...level1.goal} />}
                        <Player x={player.x} y={player.y} />
                        {/* Layer efek terkena bug */}
                        <Rect x={0} y={0} width={dimensions.width} height={dimensions.height} fill="rgba(239, 68, 68, 0.5)" opacity={hitEffect} />
                    </Layer>
                </Stage>
            </div>
        </div>
    );
};

export default GameCanvas;
