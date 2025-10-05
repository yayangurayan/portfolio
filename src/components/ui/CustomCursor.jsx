import React, { useState, useEffect } from 'react';
import { useMousePosition } from '/src/hooks/useMousePosition.js';

const CustomCursor = () => {
    const position = useMousePosition();
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseOver = (e) => setIsPointer(!!e.target.closest('a, button, [role=button]'));
        document.addEventListener('mouseover', handleMouseOver);
        return () => document.removeEventListener('mouseover', handleMouseOver);
    }, []);

    return (
        <div className="hidden md:block pointer-events-none fixed z-[9999] top-0 left-0">
            <div
                className="absolute rounded-full bg-primary-1-dark transition-all duration-200"
                style={{
                    left: `${position.x}px`, top: `${position.y}px`,
                    width: isPointer ? '0px' : '8px', height: isPointer ? '0px' : '8px',
                    transform: 'translate(-50%, -50%)',
                }}
            />
            <div
                className="absolute rounded-full border-2 border-primary-1-dark/50 transition-all duration-300"
                style={{
                    left: `${position.x}px`, top: `${position.y}px`,
                    width: isPointer ? '50px' : '40px', height: isPointer ? '50px' : '40px',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: isPointer ? 'rgba(139, 92, 246, 0.2)' : 'transparent',
                }}
            />
        </div>
    );
};

export default CustomCursor;
