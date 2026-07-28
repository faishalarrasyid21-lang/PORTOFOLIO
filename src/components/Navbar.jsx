import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logoImg from '../assets/logo.png';

const Header = styled.header`
  position: fixed;
  top: 20px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

const NavWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  background-color: rgba(15, 15, 15, 0.8);
  backdrop-filter: blur(16px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 40px;
  object-fit: contain;
  filter: invert(1) brightness(2);
`;

const DesktopMenu = styled.nav`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-weight: 600;
  font-size: 1rem;
  color: ${props => props.$active 
    ? props.theme.colors.primary 
    : '#FFFFFF'};
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.primaryHover};
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: none;
  color: #FFFFFF;
  font-size: 1.5rem;
  transition: color 0.4s ease;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #FFFFFF;
  padding: 24px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  gap: 20px;
`;

export default function Navbar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'portfolio', 'hobbies', 'contact'];
            const scrollY = window.pageYOffset;

            for (const sectionId of sections) {
                const el = document.getElementById(sectionId);
                if (el) {
                    const sectionHeight = el.offsetHeight;
                    const sectionTop = el.offsetTop - 150;
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'hero', label: 'Beranda', icon: 'fa-house' },
        { id: 'about', label: 'Tentang Saya', icon: 'fa-user' },
        { id: 'portfolio', label: 'Karya', icon: 'fa-briefcase' },
        { id: 'hobbies', label: 'Hobi', icon: 'fa-heart' },
        { id: 'contact', label: 'Kontak', icon: 'fa-paper-plane' }
    ];

    return (
        <Header>
            <NavWrapper>
                <LogoLink href="#hero">
                    <LogoImg src={logoImg} alt="FAISHAL ARRASYID Logo" />
                </LogoLink>
                
                <DesktopMenu>
                    {navLinks.map((link) => (
                        <NavLink 
                            key={link.id} 
                            href={`#${link.id}`}
                            $active={activeSection === link.id}
                        >
                            <i className={`fa-solid ${link.icon}`}></i> {link.label}
                        </NavLink>
                    ))}
                </DesktopMenu>

                <MobileToggle onClick={() => setIsMobileOpen(!isMobileOpen)}>
                    <i className={`fa-solid ${isMobileOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
                </MobileToggle>

                <MobileMenu $isOpen={isMobileOpen}>
                    {navLinks.map((link) => (
                        <NavLink 
                            key={link.id} 
                            href={`#${link.id}`}
                            $active={activeSection === link.id}
                            onClick={() => setIsMobileOpen(false)}
                        >
                            <i className={`fa-solid ${link.icon}`}></i> {link.label}
                        </NavLink>
                    ))}
                </MobileMenu>
            </NavWrapper>
        </Header>
    );
}
