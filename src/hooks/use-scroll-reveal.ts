import { useEffect, useRef, useState, RefObject } from "react";

type UseScrollRevealOptions = {
    threshold?: number;
    rootMargin?: string;
};

type UseScrollRevealReturn<T extends HTMLElement> = {
    ref: RefObject<T | null>;
    isVisible: boolean;
};

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(
    options: UseScrollRevealOptions = {}
): UseScrollRevealReturn<T> => {
    const { threshold = 0.1, rootMargin = "0px" } = options;

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                const entry = entries[0];

                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin]);

    return { ref, isVisible };
};