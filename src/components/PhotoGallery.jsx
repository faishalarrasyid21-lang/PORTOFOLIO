import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import img1 from '../assets/photography/photo-1.jpg';
import img2 from '../assets/photography/photo-2.jpg';
import img3 from '../assets/photography/photo-3.jpg';
import img4 from '../assets/photography/photo-4.jpg';

const photos = [img1, img2, img3, img4];

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(motion.div)`
  position: relative;
  width: 90%;
  max-width: 1000px;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 40px;
  background: none;
  border: none;
  color: #fff;
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 10001;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    top: 20px;
    right: 20px;
    font-size: 2rem;
  }
`;

const NavButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #fff;
  font-size: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s;
  position: absolute;
  z-index: 10;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  &.prev {
    left: -80px;
  }
  
  &.next {
    right: -80px;
  }
  
  @media (max-width: 768px) {
    &.prev { left: 0px; }
    &.next { right: 0px; }
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledImage = styled(motion.img)`
  max-width: 100%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  user-select: none;
`;

const Indicator = styled.div`
  color: #fff;
  margin-top: 20px;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 2px;
`;

export default function PhotoGallery({ isOpen, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Reset ke gambar pertama saat galeri dibuka
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(0);
            // Kunci scroll body
            document.body.style.overflow = 'hidden';
        } else {
            // Kembalikan scroll body
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Navigasi menggunakan keyboard
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <Overlay
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <CloseButton onClick={onClose} aria-label="Tutup Galeri">
                        <i className="fa-solid fa-xmark"></i>
                    </CloseButton>
                    
                    <Content
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <NavButton className="prev" onClick={prevSlide} aria-label="Sebelumnya">
                            <i className="fa-solid fa-chevron-left"></i>
                        </NavButton>
                        
                        <ImageContainer>
                            <AnimatePresence mode="wait">
                                <StyledImage
                                    key={currentIndex}
                                    src={photos[currentIndex]}
                                    alt={`Karya Fotografi ${currentIndex + 1}`}
                                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.3 }}
                                />
                            </AnimatePresence>
                            
                            <Indicator>
                                {currentIndex + 1} / {photos.length}
                            </Indicator>
                        </ImageContainer>

                        <NavButton className="next" onClick={nextSlide} aria-label="Selanjutnya">
                            <i className="fa-solid fa-chevron-right"></i>
                        </NavButton>
                    </Content>
                </Overlay>
            )}
        </AnimatePresence>
    );
}
