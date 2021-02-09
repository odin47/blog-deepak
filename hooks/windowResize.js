import {useEffect, useState} from 'react';

const windowResize = () => {
    const [state, setState] = useState({
        width: 0,
        height: 0
    });
    useEffect(() => {
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

export default windowResize;
