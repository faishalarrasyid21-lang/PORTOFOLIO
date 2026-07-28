import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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

const GridItem = ({ area, icon, title, description, link }) => {
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
              <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-[#ff4b4b] hover:text-[#e63e3e] font-bold transition-colors">
                Lihat Situs Web <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: 'Website Remas',
            desc: 'Platform website resmi untuk organisasi Remaja Masjid (Remas). Dibangun dengan antarmuka yang bersih dan interaktif, memudahkan penyebaran informasi kegiatan, kajian, dan program kepemudaan secara digital kepada masyarakat.',
            icon: 'fa-mosque',
            color1: '#00A264', // Hijau Sprout
            color2: '#006B42',
            link: 'https://remasal-falaah.web.app/'
        },
        {
            id: 2,
            title: 'Falaah Audio Visual',
            desc: 'Portofolio bisnis profesional untuk penyedia layanan perentalan alat Audio Visual. Menampilkan katalog peralatan, galeri proyek eksklusif, dan layanan dokumentasi dengan desain yang sangat elegan dan berkelas.',
            icon: 'fa-video',
            color1: '#785ED8', // Ungu
            color2: '#4A3596',
            link: 'https://falaahaudiovisual.web.app/'
        }
    ];

    return (
        <Section id="portfolio">
            <Container>
                <Header 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <Tag>Portofolio</Tag>
                    <Title>Karya & Proyek</Title>
                    <Divider />
                </Header>

                <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-12">
                    {projects.map((project, index) => (
                        <GridItem
                            key={project.id}
                            area=""
                            icon={project.icon}
                            title={project.title}
                            description={project.desc}
                            link={project.link}
                        />
                    ))}
                </ul>
            </Container>
        </Section>
    );
}
