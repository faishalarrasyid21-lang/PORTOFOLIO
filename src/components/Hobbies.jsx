import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PhotoGallery from './PhotoGallery';
import { GlowingEffect } from './ui/glowing-effect';
import { cn } from '../lib/utils';

const Section = styled.section`
  padding: 100px 0;
  background-color: transparent;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 60px;
`;

const Tag = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 8px;
  color: #ff4b4b;
  padding-bottom: 4px;
  margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Divider = styled.div`
  width: 60px;
  height: 4px;
  background-color: ${props => props.theme.colors.primary};
  margin: 20px auto 0;
  border-radius: 2px;
`;

const GridItem = ({ area, icon, title, description, links }) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.5rem] border-[0.75px] border-white/20 p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div 
          className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border-[0.75px] border-white/10 shadow-sm transition-all duration-300"
          style={{ padding: '2rem', backgroundColor: 'rgba(15, 20, 30, 0.75)', backdropFilter: 'blur(12px)' }}
        >
          <div className="relative flex flex-1 flex-col gap-5">
            <div className="text-4xl text-white mb-1">
              <i className={`fa-solid ${icon}`}></i>
            </div>
            <div className="space-y-4 flex-1 flex flex-col">
              <h3 className="pt-0.5 text-2xl font-bold text-white">
                {title}
              </h3>
              <p className="text-base leading-relaxed text-gray-300 flex-1">
                {description}
              </p>
              <div className="flex flex-col gap-3 mt-4">
                {links.map((link, idx) => (
                  <button key={idx} onClick={link.action} className="text-left text-[#ff4b4b] hover:text-[#e63e3e] font-bold transition-colors w-fit underline">
                    {link.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default function Hobbies() {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    // Data hobi dicocokkan dengan warna Sprout Social
    const hobbyList = [
        {
            id: 1,
            title: 'Teknologi',
            desc: 'Saya suka mencoba teknologi baru dan membangun proyek perangkat lunak untuk terus meningkatkan wawasan pemrograman.',
            icon: 'fa-laptop-code',
            bgColor: '#17A356', // Hijau Sprout
            innerColor: '#2DB96A',
            iconColor: '#0A522A',
            isCenter: false,
            links: [
                { text: 'Lihat Repositori >', action: () => window.open('https://github.com/faishalarrasyid21-lang', '_blank') }
            ]
        },
        {
            id: 2,
            title: 'Visual Art',
            desc: 'Mengabadikan momen indah, pemandangan, dan budaya di sekitar saya. Belajar melihat keindahan dari sudut berbeda.',
            icon: 'fa-camera-retro',
            bgColor: '#785ED8', // Ungu Sprout
            innerColor: '#8E75EB',
            iconColor: '#382A73',
            isCenter: true,
            links: [
                { text: 'Lihat Hasil Karya >', action: () => setIsGalleryOpen(true) }
            ]
        },
        {
            id: 3,
            title: 'Desain Grafis',
            desc: 'Mengeksplorasi kreativitas melalui perancangan media komunikasi visual seperti poster dan banner promosi.',
            icon: 'fa-palette',
            bgColor: '#17BED5', // Biru Cyan Sprout
            innerColor: '#32CFE4',
            iconColor: '#0A5E6B',
            isCenter: false,
            links: [
                { text: 'Lihat Desain 1 >', action: () => window.open('https://canva.link/dwhulte3cnmedxa', '_blank') },
                { text: 'Lihat Desain 2 >', action: () => window.open('https://canva.link/dwihurqibw9mgb', '_blank') }
            ]
        }
    ];

    return (
        <Section id="hobbies">
            <Container>
                <Header 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <Tag>Aktivitas</Tag>
                    <Title>Hobi & Minat</Title>
                    <Divider />
                </Header>
                
                <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-12">
                    {hobbyList.map((hobby, index) => (
                        <GridItem
                            key={hobby.id}
                            area=""
                            icon={hobby.icon}
                            title={hobby.title}
                            description={hobby.desc}
                            links={hobby.links}
                        />
                    ))}
                </ul>
            </Container>
            
            <PhotoGallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
        </Section>
    );
}
