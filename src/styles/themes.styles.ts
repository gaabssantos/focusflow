const themes = {
    light: (() => {
        const primary = '#6366f1';
        const primaryDark = '#4f46e5';
        const secondary = '#10b981';
        const accent = '#f472b6';
        const dark = '#1e293b';
        const light = '#f8fafc';
        const gray = '#94a3b8';

        return {
            colors: {
                primary,
                primaryDark,
                secondary,
                accent,
                dark,
                light,
                gray,
                gradient: `linear-gradient(135deg, ${primary}, #818cf8, ${accent})`,
            },
            shadow: {
                primary: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            },
        };
    })(),
};

export default themes;
