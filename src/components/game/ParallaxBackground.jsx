import React, { useMemo } from 'react';
import { Image as KonvaImage } from 'react-konva';

const ParallaxBackground = ({ cameraX, canvasWidth, canvasHeight }) => {
    // Fungsi untuk membuat SVG sebagai Data URI untuk menghindari file eksternal
    const createSvgDataUri = (svgString) => `data:image/svg+xml;base64,${btoa(svgString)}`;

    // Mendefinisikan lapisan-lapisan latar belakang
    const layers = useMemo(() => [
        {
            speed: 0.1,
            imgHeight: 300,
            y: canvasHeight - 300,
            uri: createSvgDataUri(`<svg width="800" height="300" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-200 300C0 150, 250 200, 400 220C550 240, 750 150, 1000 300H-200Z" fill="#0d1117"/></svg>`)
        },
        {
            speed: 0.2,
            imgHeight: 250,
            y: canvasHeight - 250,
            uri: createSvgDataUri(`<svg width="800" height="250" viewBox="0 0 800 250" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-200 250C-50 100, 150 150, 400 180C650 210, 750 100, 1000 250H-200Z" fill="#161b22"/></svg>`)
        }
    ], [canvasHeight]);

    // Merender setiap lapisan
    return layers.map((layer, index) => {
        const img = useMemo(() => {
            const image = new window.Image();
            image.src = layer.uri;
            return image;
        }, [layer.uri]);

        const xPos = (cameraX * layer.speed) % canvasWidth;
        
        // Merender beberapa gambar secara seamless untuk menciptakan ilusi tak terbatas
        return (
            <React.Fragment key={index}>
                <KonvaImage image={img} x={-xPos} y={layer.y} width={canvasWidth} height={layer.imgHeight} />
                <KonvaImage image={img} x={-xPos + canvasWidth} y={layer.y} width={canvasWidth} height={layer.imgHeight} />
                <KonvaImage image={img} x={-xPos + 2 * canvasWidth} y={layer.y} width={canvasWidth} height={layer.imgHeight} />
            </React.Fragment>
        );
    });
};

export default ParallaxBackground;
