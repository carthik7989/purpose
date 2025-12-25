"use client";

import CountdownTimer from "./CountdownTimer";
import { useState, useEffect, useRef } from 'react';

// Modified hook that accepts a trigger flag
const useCounter = (end: number, shouldStart: boolean, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!shouldStart || hasAnimated.current) return;

        hasAnimated.current = true;
        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(end * ease));

            if (progress < duration) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [end, duration, shouldStart]);

    return count;
};

export default function Statistics() {
    const [isVisible, setIsVisible] = useState(false);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only trigger once
                }
            },
            {
                threshold: 0.6, // Trigger when 50% visible
            }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const years = useCounter(20, isVisible);
    const people = useCounter(1000, isVisible);

    return (
        <section className="flex flex-col items-center gap-10 bg-background-light fp font-big-shoulders max-container overflow-hidden">
            <h2 className="text-3xl md:text-[38px] lg:text-5xl 2xl:text-[54px] uppercase font-semibold text-text">Event Starts In</h2>
            <CountdownTimer variant="default" />
            <div ref={statsRef} className="flex gap-5 sm:gap-10 lg:gap-30 mt-0 md:mt-5">
                <div className="flex gap-2 md:gap-5 items-center">
                    <div className="text-5xl sm:text-6xl md:text-8xl xl:text-9xl text-primary font-bold">{years}+</div>
                    <div className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">Backed by 20+ years of HR <br />leadership</div>
                </div>
                <div className="flex gap-2 md:gap-5 items-center">
                    <div className="text-5xl sm:text-6xl md:text-8xl xl:text-9xl text-primary font-bold">{people >= 1000 ? (people / 1000).toFixed(0) + 'k' : people}+</div>
                    <div className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">people guided</div>
                </div>
            </div>
        </section>
    );
}