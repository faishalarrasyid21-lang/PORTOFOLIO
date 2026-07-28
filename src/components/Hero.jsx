import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const HeroSection = styled.section`
  padding: 140px 0 100px;
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  min-height: 80vh;

  @media (max-width: 768px) {
    padding: 100px 0 60px;
    min-height: auto;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 40px;
    padding-top: 100px;
  }
`;

const TextColumn = styled.div`
  flex: 1;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 900;
  color: var(--text-main);
  margin-bottom: 24px;
  line-height: 1.1;
  letter-spacing: -0.03em;

  span {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--text-muted);
  margin-bottom: 40px;
  line-height: 1.7;
  max-width: 520px;

  @media (max-width: 768px) {
    margin: 0 auto 40px;
    font-size: 1.05rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled.a`
  padding: 16px 36px;
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(0, 162, 100, 0.3);

  &:hover {
    background-color: var(--primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 162, 100, 0.4);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 14px 20px;
  }
`;

const SecondaryButton = styled.a`
  padding: 16px 36px;
  background-color: transparent;
  color: var(--text-main);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
    background-color: rgba(0, 162, 100, 0.05);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 14px 20px;
  }
`;

const ImageColumn = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 48px rgba(0,0,0,0.12);
  border: 1px solid var(--border-color);

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

export default function Hero() {
  return (
    <HeroSection id="hero">
      <HeroContainer>
        <TextColumn>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Halo, saya <br />
            <span>Faishal Arrasyid</span>
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Saya seorang Frontend Developer yang berfokus pada pembuatan antarmuka digital yang bersih, modern, dan memberikan pengalaman pengguna (*user experience*) yang luar biasa.
          </Subtitle>
          <ButtonGroup
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <PrimaryButton href="#portfolio">Lihat Karya</PrimaryButton>
            <SecondaryButton href="#contact">Hubungi Saya</SecondaryButton>
          </ButtonGroup>
        </TextColumn>

        <ImageColumn
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <ImageWrapper>
            <img src={profileImg} alt="Faishal Arrasyid" />
          </ImageWrapper>
        </ImageColumn>
      </HeroContainer>
    </HeroSection>
  );
}
