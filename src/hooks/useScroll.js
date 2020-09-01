import { useEffect } from 'react';

export const useScroll = (handler) => {

    useEffect(() => {
        function handleScroll(e) {
            handler(e);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return {
        scrollLeft: window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop: window.pageYOffset || document.documentElement.scrollTop,
    };
}