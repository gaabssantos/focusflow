import styled from "styled-components";
import themes from "../../styles/themes.styles";

export const TestimonialsSection = styled.section`
  padding: 60px 0 100px;
  background: ${themes.light.colors.light};
  position: relative;
  overflow: hidden;
`;

export const SectionBackground = styled.div`
  &::before {
    content: '';
    position: absolute;
    top: -300px;
    right: -300px;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: ${themes.light.colors.gradient};
    opacity: 0.05;
    z-index: 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 50px;
  
  h2 {
    font-size: 40px;
    font-weight: 700;
    color: ${themes.light.colors.dark};
    margin-bottom: 15px;
  }
  
  p {
    font-size: 18px;
    color: ${themes.light.colors.gray};
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const TestimonialsContainer = styled.div`
  position: relative;
  z-index: 1;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: ${themes.light.shadow.primary};
  padding: 30px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.15);
  }
`;

export const TestimonialQuote = styled.div`
  margin-bottom: 20px;
  position: relative;
  
  svg {
    color: ${themes.light.colors.primary};
    opacity: 0.2;
    position: absolute;
    top: -10px;
    left: -5px;
    width: 40px;
    height: 40px;
  }
  
  p {
    font-size: 16px;
    line-height: 1.7;
    position: relative;
    z-index: 1;
    color: ${themes.light.colors.dark};
    padding-left: 15px;
  }
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  background-color: ${themes.light.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 20px;
`;

export const AuthorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 5px 0;
  color: ${themes.light.colors.dark};
`;

export const AuthorRole = styled.p`
  font-size: 14px;
  color: ${themes.light.colors.gray};
  margin: 0;
`;

export const TestimonialRating = styled.div`
  display: flex;
  margin-bottom: 15px;
  gap: 5px;
  
  svg {
    color: #fbbf24;
    width: 18px;
    height: 18px;
  }
`;

export const TestimonialTags = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 15px;
  flex-wrap: wrap;
`;

export const TestimonialTag = styled.span`
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 100px;
  background-color: rgba(99, 102, 241, 0.1);
  color: ${themes.light.colors.primary};
  font-weight: 500;
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 10px;
`;

type NavButtonProps = {
    active: boolean;
}

export const NavButton = styled.button<NavButtonProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? `${themes.light.colors.primary}` : `${themes.light.colors.gray}`};
  opacity: ${props => props.active ? '1' : '0.3'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: ${props => props.active ? '1' : '0.6'};
  }
`;

export const ViewMoreButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto 0;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: transparent;
  border: 2px solid ${themes.light.colors.primary};
  color: ${themes.light.colors.primary};
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  max-width: 200px;
  
  svg {
    margin-left: 8px;
  }
  
  &:hover {
    background-color: ${themes.light.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;
