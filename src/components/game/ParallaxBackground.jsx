import React, { useMemo } from 'react';
import { Image as KonvaImage } from 'react-konva';

// Fungsi untuk membuat SVG sebagai Data URI
const createSvgDataUri = (svgString) => {
    return `data:image/svg+xml;base64,${btoa(svgString)}`;
};

// Komponen Latar Belakang
const BackgroundLayer = ({ imageUri, speed, cameraX, canvasWidth, y, imgHeight }) => {
    const img = useMemo(() => {
        const image = new window.Image();
        image.src = imageUri;
        return image;
    }, [imageUri]);

    const xPos = (cameraX * speed) % canvasWidth;

    return (
        <>
            <KonvaImage image={img} x={-xPos} y={y} width={canvasWidth} height={imgHeight} />
            <KonvaImage image={img} x={-xPos + canvasWidth} y={y} width={canvasWidth} height={imgHeight} />
        </>
    );
};


const ParallaxBackground = ({ cameraX, canvasWidth }) => {
    // Definisi SVG untuk lapisan latar belakang
    const hillsSvg = createSvgDataUri(`
        <svg width="800" height="250" viewBox="0 0 800 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-200 250C-50 100, 150 150, 400 180C650 210, 750 100, 1000 250H-200Z" fill="#161b22"/>
        </svg>
    `);
    const farHillsSvg = createSvgDataUri(`
        <svg width="800" height="300" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-200 300C0 150, 250 200, 400 220C550 240, 750 150, 1000 300H-200Z" fill="#0d1117"/>
        </svg>
    `);

    return (
        <>
            <BackgroundLayer imageUri={farHillsSvg} speed={0.2} cameraX={cameraX} canvasWidth={canvasWidth} y={200} imgHeight={300} />
            <BackgroundLayer imageUri={hillsSvg} speed={0.4} cameraX={cameraX} canvasWidth={canvasWidth} y={250} imgHeight={250} />
        </>
    );
};

export default ParallaxBackground;
