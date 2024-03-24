import { useCallback, useEffect, useRef } from 'react';

function useClickOutside(close) {
    const ref = useRef(null);

    const handleClickOutside = useCallback((event) => {
        const element = ref.current;
        if (element && !element.contains(event.target)) {
            close()
        }
    }, [close]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    return ref;
}
export default useClickOutside