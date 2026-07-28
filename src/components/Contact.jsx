import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import GooeyDock from './ui/gooey-dock';

const GithubIcon = ({ className }) => <i className={`fa-brands fa-github text-2xl flex items-center justify-center ${className}`}></i>;
const LinkedinIcon = ({ className }) => <i className={`fa-brands fa-linkedin-in text-2xl flex items-center justify-center ${className}`}></i>;
const InstagramIcon = ({ className }) => <i className={`fa-brands fa-instagram text-2xl flex items-center justify-center ${className}`}></i>;
const TiktokIcon = ({ className }) => <i className={`fa-brands fa-tiktok text-2xl flex items-center justify-center ${className}`}></i>;

const Section = styled.section`
  padding: 100px 0;
  background-color: transparent;
  border-top: 1px solid ${props => props.theme.colors.border};

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



const ContactInfo = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  background: rgba(15, 20, 30, 0.85);
  backdrop-filter: blur(12px);
  padding: 60px 40px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid ${props => props.theme.colors.border};
  
  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.theme.colors.textMain};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    line-height: 1.4;
  }
`;

const Desc = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textMuted};
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
  line-height: 1.6;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 32px;
  }
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

const MethodItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
`;

const MethodIcon = styled.div`
  width: 56px;
  height: 56px;
  background: rgba(255, 75, 75, 0.1);
  color: ${props => props.theme.colors.primary};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const MethodDetail = styled.div`
  h4 {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${props => props.theme.colors.textMuted};
    margin-bottom: 4px;
  }

  a, span {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${props => props.theme.colors.textMain};
    transition: color 0.2s;
    
    @media (max-width: 768px) {
      font-size: 0.95rem;
      word-break: break-word;
    }
  }

  a:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const SocialLinks = styled.div`
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid ${props => props.theme.colors.border};
  
  h4 {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${props => props.theme.colors.textMuted};
    margin-bottom: 24px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const SocialIcon = styled.a`
  width: 48px;
  height: 48px;
  background: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.textMain};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: 1px solid ${props => props.theme.colors.border};

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: #FFFFFF;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 162, 100, 0.2);
    border-color: ${props => props.theme.colors.primary};
  }
`;

export default function Contact() {
    return (
        <Section id="contact">
            <Container>
                <Header 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <Tag>Hubungi</Tag>
                    <Title>Mari Berkolaborasi</Title>
                    <Divider />
                </Header>
                
                <ContactInfo 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <Subtitle>Punya pertanyaan atau proyek menarik?</Subtitle>
                    <Desc>Silakan hubungi saya melalui detail kontak di bawah ini. Saya akan berusaha membalas secepat mungkin!</Desc>
                    
                    <ContactMethods>
                        <MethodItem>
                            <MethodIcon><i className="fa-solid fa-envelope"></i></MethodIcon>
                            <MethodDetail>
                                <h4>Email</h4>
                                <a href="mailto:faishalarrasyid21@gmail.com">faishalarrasyid21@gmail.com</a>
                            </MethodDetail>
                        </MethodItem>
                        
                        <MethodItem>
                            <MethodIcon><i className="fa-solid fa-location-dot"></i></MethodIcon>
                            <MethodDetail>
                                <h4>Lokasi</h4>
                                <span>Kota Kediri, Indonesia</span>
                            </MethodDetail>
                        </MethodItem>
                    </ContactMethods>
                    
                    <SocialLinks>
                        <h4>Ikuti Saya:</h4>
                        <GooeyDock items={[
                           { icon: GithubIcon, label: "GitHub", onClick: () => window.open("https://github.com/faishalarrasyid21-lang", "_blank") },
                           { icon: LinkedinIcon, label: "LinkedIn", onClick: () => window.open("https://www.linkedin.com/in/faishal-arrasyid-0bb287345", "_blank") },
                           { icon: InstagramIcon, label: "Instagram", onClick: () => window.open("https://www.instagram.com/_faishalarrasyid/", "_blank") },
                           { icon: TiktokIcon, label: "TikTok", onClick: () => window.open("https://www.tiktok.com/@ig_faishalarrasyid?is_from_webapp=1&sender_device=pc", "_blank") },
                        ]} />
                    </SocialLinks>
                </ContactInfo>
            </Container>
        </Section>
    );
}
