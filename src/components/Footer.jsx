import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 40px 0;
  background-color: transparent;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.textMuted};
  font-size: 0.95rem;
`;

const BackToTop = styled.a`
  color: ${props => props.theme.colors.textMain};
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.2s;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export default function Footer() {
    return (
        <FooterContainer>
            <Container>
                <Copyright>
                    &copy; 2026. Dibuat oleh Faishal.
                </Copyright>
                <div>
                    <BackToTop href="#hero">Kembali Ke Atas</BackToTop>
                </div>
            </Container>
        </FooterContainer>
    );
}
