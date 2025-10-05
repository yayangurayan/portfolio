import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';
import { useGameStore } from '../../stores/useGameStore';
import { gameContent } from '../../data/gameContent';
import { useEventListener } from '../../hooks/useEventListener';
import { useGameLoop } from '../../hooks/useGameLoop';
import { sfx } from '../../sound/sfx';
import ParallaxBackground from './ParallaxBackground';

// Komponen Visual untuk elemen game
const Player = ({ x, y, size }) => ( <Rect x={x} y={y} width={size.width} height={size.height} fillLinearGradientStartPoint={{ x: 0, y: 0 }} fillLinearGradientEndPoint={{ x: size.width, y: size.height }} fillLinearGradientColorStops={[0, '#8B5CF6', 1, '#EC4899']} cornerRadius={5} shadowBlur={10} shadowColor="#8B5CF6" /> );
const Platform = ({ x, y, width, height }) => ( <Rect x={x} y={y} width={width} height={height} fill="#30363d" cornerRadius={3} /> );
const SkillItem = ({ x, y, name }) => ( <Text text={name} x={x} y={y} fontSize={20} fill="#FBBF24" fontFamily="Inter, sans-serif" shadowColor="black" shadowBlur={5} shadowOpacity={0.5} /> );
const Goal = ({ x, y, width, height }) => ( <Rect x={x} y={y} width={width} height={height} fillLinearGradientStartPoint={{ x: 0, y: 0 }} fillLinearGradientEndPoint={{ x: width, y: height }} fillLinearGradientColorStops={[0, '#10B981', 1, '#F59E0B']} cornerRadius={5} shadowBlur={15} shadowColor="#10B981" /> );
const Bug = ({ x, y, width, height }) => ( <Rect x={x} y={y} width={width} height={height} fill="#EF4444" cornerRadius={15} shadowBlur={5} shadowColor="#EF4444"/> );

const GameCanvas = () => {
    const { winGame, gameOver, collectSkill, collectedSkills, showProjectPreview } = useGameStore();
    
    // --- State & Ref untuk Game ---
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 800, height: 500 });
    const keys = useRef({ a: false, d: false, w: false });
    
    // --- State Entitas Game ---
    const [player, setPlayer] = useState({ x: 50, y: 300, vx: 0, vy: 0, onGround: false });
    const [skillsOnLevel, setSkillsOnLevel] = useState(gameContent.skills);
    const [bugs, setBugs] = useState(gameContent.bugs);
    const [particles, setParticles] = useState([]);
    const [cameraX, setCameraX] = useState(0);
    const isGameOver = useRef(false);

    // --- Konstanta Fisika & Game ---
    const PLAYER_SIZE = { width: 40, height: 60 };
    const PLAYER_SPEED = 300; // piksel per detik
    const GRAVITY = 2000;     // piksel per detik^2
    const JUMP_FORCE = -800;  // kecepatan vertikal awal saat melompat

    // --- Fungsi Helper ---
    const checkCollision = (r1, r2) => (r1.x < r2.x + r2.width && r1.x + r1.width > r2.x && r1.y < r2.y + r2.height && r1.y + r1.height > r2.y);
    const createParticles = useCallback((x, y, color = "#FBBF24", count = 20) => {
        setParticles(current => [...current, ...Array.from({ length: count }, () => ({ id: Math.random(), x, y, color, vx: (Math.random()-0.5)*300, vy: (Math.random()-0.5)*300, life: 0.5, opacity: 1, radius: Math.random()*3+1 }))]);
    }, []);

    // --- Input Handling ---
    const handleKeyDown = useCallback((e) => {
        const key = e.key.toLowerCase();
        if (key === 'a') keys.current.a = true;
        if (key === 'd') keys.current.d = true;
        if ((key === 'w' || key === ' ') && player.onGround) { e.preventDefault(); keys.current.w = true; }
    }, [player.onGround]);
    const handleKeyUp = useCallback((e) => {
        const key = e.key.toLowerCase();
        if (key === 'a') keys.current.a = false;
        if (key === 'd') keys.current.d = false;
        if (key === 'w' || key === ' ') keys.current.w = false;
    }, []);
    useEventListener('keydown', handleKeyDown);
    useEventListener('keyup', handleKeyUp);

    // --- Game Loop Utama ---
    useGameLoop(useCallback((deltaTime) => {
        if (isGameOver.current) return;
        const dt = deltaTime / 1000;

        // 1. Update Player
        setPlayer(p => {
            let { x, y, vx, vy, onGround } = { ...p };
            vx = keys.current.a ? -PLAYER_SPEED : (keys.current.d ? PLAYER_SPEED : 0);
            if (keys.current.w && onGround) { vy = JUMP_FORCE; onGround = false; keys.current.w = false; sfx.playJump(); }
            vy += GRAVITY * dt;

            let nextX = x + vx * dt, nextY = y + vy * dt;
            let newOnGround = false;

            for (const plat of gameContent.platforms) {
                if (checkCollision({ x: nextX, y: nextY, ...PLAYER_SIZE }, plat)) {
                    if (vy > 0 && y + PLAYER_SIZE.height <= plat.y) { nextY = plat.y - PLAYER_SIZE.height; vy = 0; newOnGround = true; }
                    else if (vy < 0 && y >= plat.y + plat.height) { nextY = plat.y + plat.height; vy = 0; }
                    else if (vx > 0 && x + PLAYER_SIZE.width <= plat.x) { nextX = plat.x - PLAYER_SIZE.width; }
                    else if (vx < 0 && x >= plat.x + plat.width) { nextX = plat.x + plat.width; }
                }
            }
            if (nextY > dimensions.height) { isGameOver.current = true; sfx.playHit(); gameOver(); }
            return { x: nextX, y: nextY, vx, vy, onGround: newOnGround };
        });

        // 2. Update Bugs & Cek Tabrakan
        setBugs(current => current.map(bug => {
            let newVx = bug.vx;
            if (bug.x < bug.originalX || bug.x > bug.originalX + bug.range) newVx = -bug.vx;
            if (checkCollision(player, bug)) { isGameOver.current = true; createParticles(player.x, player.y, "#EF4444"); sfx.playHit(); gameOver(); }
            return { ...bug, x: bug.x + newVx * dt * (Math.abs(newVx)/1.5), vx: newVx };
        }));

        // 3. Cek Tabrakan Skill
        setSkillsOnLevel(current => current.filter(skill => {
            if (checkCollision(player, { ...skill, width: 60, height: 30 })) { collectSkill(skill.name); createParticles(skill.x, skill.y); sfx.playCollect(); return false; }
            return true;
        }));

        // 4. Update Partikel
        setParticles(current => current.map(p => ({ ...p, x: p.x + p.vx * dt, y: p.y + p.vy * dt, life: p.life - dt, opacity: p.life / 0.5 })).filter(p => p.life > 0));

        // 5. Cek Kondisi Kemenangan
        if (collectedSkills.length === gameContent.skills.length && checkCollision(player, gameContent.goal)) {
            isGameOver.current = true; sfx.playWin(); showProjectPreview("Tapstok"); setTimeout(winGame, 4000);
        }

        // 6. Update Kamera
        setCameraX(prevX => prevX + (player.x - dimensions.width / 3 - prevX) * 0.1);

    }, [player, collectedSkills.length, dimensions.height]));

    // Efek untuk menyesuaikan ukuran canvas
    useEffect(() => {
        const updateSize = () => containerRef.current && setDimensions({ width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight });
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-dark-bg text-dark-font p-4">
            <div className="absolute top-4 left-4 z-10 bg-dark-bg-secondary/50 backdrop-blur-sm p-3 rounded-lg border border-dark-border">
                <h3 className="font-bold text-sm mb-2">Skills Terkumpul:</h3>
                <div className="flex gap-2 flex-wrap">
                    {gameContent.skills.map(skill => (
                        <span key={skill.name} className={`px-2 py-1 text-xs rounded-full transition-all duration-300 ${collectedSkills.includes(skill.name) ? 'bg-primary-1-dark text-white' : 'bg-dark-bg text-dark-font-secondary'}`}>{skill.name}</span>
                    ))}
                </div>
            </div>
            <div className="text-center mb-4">
                <h2 className="text-2xl font-bold">The Developer's Odyssey</h2>
                <p className="text-dark-font-secondary text-sm">Gunakan A/D untuk bergerak, W atau Spasi untuk melompat.</p>
            </div>
            <div ref={containerRef} className="w-full max-w-5xl h-[60vh] bg-dark-bg-secondary border border-dark-border rounded-lg shadow-2xl shadow-primary-2-dark/10 overflow-hidden">
                <Stage width={dimensions.width} height={dimensions.height}>
                    <Layer x={-cameraX}>
                        <ParallaxBackground cameraX={cameraX} canvasWidth={dimensions.width} canvasHeight={dimensions.height} />
                        {gameContent.platforms.map((p, i) => <Platform key={`p-${i}`} {...p} />)}
                        {skillsOnLevel.map((s, i) => <SkillItem key={`s-${i}`} {...s} />)}
                        {bugs.map((b, i) => <Bug key={`b-${i}`} {...b} />)}
                        {particles.map(p => <Circle key={p.id} x={p.x} y={p.y} radius={p.radius} fill={p.color} opacity={p.opacity} />)}
                        {collectedSkills.length === gameContent.skills.length && <Goal {...gameContent.goal} />}
                        <Player x={player.x} y={player.y} size={PLAYER_SIZE} />
                    </Layer>
                </Stage>
            </div>
        </div>
    );
};

export default GameCanvas;
