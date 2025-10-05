import React, { useEffect, useState } from 'react';

const ProjectPreviewCard = ({ project, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Animasikan kartu saat muncul
        const timer = setTimeout(() => setIsVisible(true), 50);

        // Tutup kartu secara otomatis setelah beberapa detik
        const closeTimer = setTimeout(() => {
            setIsVisible(false);
            // Panggil onClose setelah animasi fade-out selesai
            setTimeout(onClose, 300);
        }, 4000);

        return () => {
            clearTimeout(timer);
            clearTimeout(closeTimer);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9998] transition-opacity duration-300">
            <div className={`bg-dark-bg-secondary border border-dark-border p-6 rounded-lg shadow-2xl transition-all duration-300 w-full max-w-sm text-center ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <h3 className="text-sm font-bold text-primary-1-dark uppercase mb-2">Pencapaian Diraih!</h3>
                <h4 className="text-2xl font-bold text-white mb-3">{project.title}</h4>
                <div className="flex justify-center flex-wrap gap-2">
                    {project.tech.map(t => (
                        <span key={t} className="bg-dark-bg text-xs font-medium px-3 py-1 rounded-full">{t}</span>
                    ))}
                </div>
                <p className="text-xs text-dark-font-secondary mt-4">Portofolio akan segera terbuka...</p>
            </div>
        </div>
    );
};

export default ProjectPreviewCard;
