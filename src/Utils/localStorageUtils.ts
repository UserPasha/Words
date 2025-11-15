export const saveState = (state: any) => {
    try {
        const serialized = JSON.stringify(state);
        localStorage.setItem('state', serialized);
    } catch {}
};

export const loadState = () => {
    try {
        const serialized = localStorage.getItem('state');
        if (!serialized) return undefined;
        return JSON.parse(serialized);
    } catch {
        return undefined;
    }
};
