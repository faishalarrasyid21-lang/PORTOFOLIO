import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import profileImg from '../assets/profile.jpg';

const Section = styled.section`
  padding: 120px 0;
  background-color: transparent;
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
`;

const TextColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 992px) {
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 24px;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 20px;
  text-align: left;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);

  @media (max-width: 992px) {
    text-align: center;
  }
`;

const ActionButton = styled.a`
  margin-top: 20px;
  display: inline-block;
  padding: 14px 32px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 50px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const GraphicColumn = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GraphicContainer = styled.div`
  position: relative;
  width: 340px;
  height: 340px;

  @media (max-width: 576px) {
    width: 260px;
    height: 260px;
  }
`;

const ShadowBox = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  box-shadow: 0 0 30px rgba(103, 232, 249, 0.2);
  z-index: 1;
`;

const MainBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: translate(-8px, -8px);
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 24px;
  transition: transform 0.5s ease;
  
  ${MainBox}:hover & {
    transform: scale(1.05);
  }
`;

export default function About() {
    return (
        <Section id="about">
            <Container>
                <LayoutGrid>
                    <TextColumn
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <Title>Tentang Saya</Title>
                        <Description>
                            Halo! Nama saya Faishal Arrasyid. Saya adalah seorang individu yang bersemangat dalam dunia teknologi informasi dan pengembangan perangkat lunak. Saya suka mempelajari hal-hal baru dan terus menantang diri untuk menciptakan karya digital yang inovatif.
                        </Description>
                        <Description>
                            Fokus utama saya adalah membangun aplikasi web modern yang responsif, berkinerja tinggi, dan memberikan pengalaman pengguna yang luar biasa. Setiap detail dalam desain dan kode memiliki peran penting untuk menghasilkan produk yang berkualitas tinggi.
                        </Description>
                        <ActionButton href="#hobbies">
                            Jelajahi Minat Saya
                        </ActionButton>
                    </TextColumn>

                    <GraphicColumn
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <GraphicContainer>
                            <ShadowBox />
                            <MainBox>
                                <ProfileImage src={profileImg} alt="Faishal Arrasyid" />
                            </MainBox>
                        </GraphicContainer>
                    </GraphicColumn>
                </LayoutGrid>
            </Container>
        </Section>
    );
}
