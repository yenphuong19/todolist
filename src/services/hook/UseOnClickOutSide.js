import { useEffect } from 'react';

const UseOnClickOutSide = (ref, handler) => {
    useEffect(() => {
        const listener = e => {
            if (ref.current.contains(e.target) || ref.current.parentElement.contains(e.target)) {
                return;
            }
            handler();
        }
        document.addEventListener('mousedown', listener)

        return () => {
            document.removeEventListener('mousedown', listener)
        }

    }, [ref, handler])
}

export default UseOnClickOutSide;