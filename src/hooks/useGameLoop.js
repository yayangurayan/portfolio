import { useRef, useEffect } from 'react';

// Hook kustom untuk menjalankan game loop menggunakan requestAnimationFrame
// Ini memastikan animasi dan fisika berjalan sehalus mungkin
export const useGameLoop = (callback) => {
    const requestRef = useRef();
    const previousTimeRef = useRef();

    // Fungsi yang dipanggil di setiap frame
    const animate = (time) => {
        if (previousTimeRef.current !== undefined) {
            const deltaTime = time - previousTimeRef.current;
            // Panggil callback dengan delta time untuk perhitungan fisika yang konsisten
            callback(deltaTime);
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        // Hentikan loop saat komponen di-unmount
        return () => cancelAnimationFrame(requestRef.current);
    }, [callback]); // Jalankan ulang efek jika callback berubah
};
