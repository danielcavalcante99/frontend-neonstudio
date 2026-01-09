import { useEffect, useState } from "react";

export const useAutoScroll = (max = 200, speed = 50): number => {
    const [scroll, setScroll] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setScroll((prev) => (prev >= max ? 0 : prev + 1));
        }, speed);

        return () => clearInterval(interval);
    }, [max, speed]);

    return scroll;
};
