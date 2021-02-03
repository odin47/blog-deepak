import {useLayoutEffect, useState} from 'react';

const useInnerWidth = () => {
    const [state, setState] = useState({
        width: 0,
        height: 0
    });
    useLayoutEffect(() => {
        const handleResize = () => {
            setState({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return state;
}

export default useInnerWidth;
