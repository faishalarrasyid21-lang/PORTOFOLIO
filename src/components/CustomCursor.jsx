import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            // Check if hovered element is clickable
            if (e.target.tagName.toLowerCase() === 'a' || 
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('a') || 
                e.target.closest('button') ||
                e.target.classList.contains('hobby-card') ||
                e.target.classList.contains('experience-card')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // Return nothing on touch devices to avoid ghost cursor issues
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            {/* Inner Dot */}
            <motion.div
                className="cursor-dot"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 0 : 1
                }}
                transition={{ type: 'tween', ease: 'linear', duration: 0.05 }}
            />
            {/* Outer Ring */}
            <motion.div
                className="cursor-ring"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(13, 202, 240, 0.1)' : 'transparent',
                    borderColor: isHovering ? 'rgba(13, 202, 240, 0.8)' : 'rgba(13, 202, 240, 0.3)'
                }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
            />
        </>
    );
}
