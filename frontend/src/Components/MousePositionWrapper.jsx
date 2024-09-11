// Credit: Josh Comeau https://www.joshwcomeau.com/snippets/react-hooks/use-mouse-position/
// Unused component

import { useState, useEffect, createContext, useContext } from 'react';

const mousePositionContext = createContext();

export const useMousePosition = () => {
    return useContext(mousePositionContext);
};

const MousePositionWrapper = ( {children} ) => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    useEffect(() => {
        const updateMousePosition = ev => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
    
        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

  return (
    <mousePositionContext.Provider value={mousePosition}>
        {children}
    </mousePositionContext.Provider>
  );
};

export default MousePositionWrapper;