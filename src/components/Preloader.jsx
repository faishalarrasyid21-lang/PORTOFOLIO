import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import heroCharacter from '../assets/hero-character.png';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #050505; /* Dark background to match cosmic theme */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ImageContainer = styled(motion.div)`
  width: 250px;
  height: 250px;

  @media (min-width: 768px) {
    width: 350px;
    height: 350px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 0 30px rgba(103, 232, 249, 0.3));
  }
`;

export default function Preloader({ onComplete }) {
  useEffect(() => {
    // Show preloader for 2.5 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <Overlay
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }} // Fade out with a slight zoom and blur
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <ImageContainer
        // Float in from bottom, then gently float up and down
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: [0, -15, 0], opacity: 1 }}
        transition={{ 
          opacity: { duration: 0.8, ease: "easeOut" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <img src={heroCharacter} alt="Loading..." />
      </ImageContainer>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-gray-400 text-sm tracking-[0.2em] font-light uppercase"
      >
        Mempersiapkan Kosmos...
      </motion.p>
    </Overlay>
  );
}
