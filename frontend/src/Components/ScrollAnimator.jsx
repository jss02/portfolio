import { useRef, useEffect } from 'react'

/*
Scroll animation wrapper

Give class with initial animation state styling and make sure {animation}-show has the result animation state
*/

export default function ScrollAnimator({ children, animation, threshold=0.1 }) {
    const elemRef = useRef(null);

    useEffect(() => {
        const elem = elemRef.current;

        const observer = new IntersectionObserver(
            ([element]) => {
                if (element.isIntersecting) {
                    elem.classList.add(animation + '-show');
                } else {
                    elem.classList.remove(animation + '-show')
                }
            }, {
                threshold: threshold,
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
        <div ref={elemRef} className={animation}>{children}</div>
    )
}
