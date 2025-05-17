import styled from 'styled-components';
import themes from '../../styles/themes.styles';

const colors = themes.light.colors;

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  .nav-links {
    display: flex;
    gap: 30px;
    list-style: none;

    .nav-link {
      font-weight: 500;
      position: relative;
      transition: color 0.3s ease;

      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -5px;
        left: 0;
        background-color: ${colors.primary};
        transition: width 0.3s ease;
      }

      &:hover {
        color: ${colors.primary};

        &::after {
          width: 100%;
        }
      }
    }

    @media (max-width: 768px) {
      position: fixed;
      top: 80px;
      left: 0;
      right: 0;
      background: white;
      flex-direction: column;
      align-items: center;
      padding: 30px 0;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }
  }

  .nav-cta {
    display: flex;
    gap: 15px;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  color: ${colors.primary};

  svg {
    margin-right: 10px;
  }
`;
