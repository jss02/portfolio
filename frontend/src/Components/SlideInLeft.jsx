import { useRef, useEffect } from 'react'

export default function SlideInLeft({ children }) {
    const elemRef = useRef(null);

    useEffect(() => {
        const elem = elemRef.current;

        const observer = new IntersectionObserver(
            ([element]) => {
                if (element.isIntersecting) {
                    elem.classList.add('slide-in-show');
                } else {
                    elem.classList.remove('slide-in-show')
                }
            }, {
                threshold: 0.1,
            }
        );

        if (elem) {
            observer.observe(elem);
        }

        return () => {
            if (elem) {
                observer.unobserve(elem);
            }
        }
    }, []);

    return (
        <div ref={elemRef} className="slide-in-left">{children}</div>
    )
}
