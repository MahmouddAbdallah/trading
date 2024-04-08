import { useCallback, useEffect, useRef } from 'react';

function useClickOutsideSize(close, size) {
    const ref = useRef(null);

    const handleClickOutside = useCallback((event) => {
        const element = ref.current;
        if (element && !element.contains(event.target) && size < 1024) {
            close();
        }
    }, [close, size]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    return ref;
}

export default useClickOutsideSize;
