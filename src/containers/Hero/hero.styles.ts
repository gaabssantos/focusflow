import styled from 'styled-components';
import themes from '../../styles/themes.styles';

const colors = themes.light.colors;
const shadows = themes.light.shadow;

export const HeroContainer = styled.section`
  padding: 160px 0 100px;
  position: relative;
  overflow: hidden;

  .word-flip {
    display: inline-block;
    animation: slideDown 0.4s ease forwards;
    opacity: 0;
  }

  .tooltip {
    position: relative;
    cursor: pointer;
    margin-left: 4px;
    color: #888;

    &::after {
      content: 'Baseado em projeções internas e simulações. Sujeitos a variações.';
      position: absolute;
      bottom: 125%;
      left: 50%;
      transform: translateX(-50%);
      background-color: #1a1a1a;
      color: #fff;
      padding: 6px 10px;
      border-radius: 6px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s;
      z-index: 10;
    }

    &:hover::after {
      opacity: 1;
    }
  }

  .hero {
    &-content {
      display: flex;
      align-items: center;
      gap: 40px;
    }

    &-text {
      flex: 1;
    }

    &-title {
      font-size: 56px;
      line-height: 1.1;
      font-weight: 800;
      margin-bottom: 20px;
      background: ${colors.gradient};
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    &-subtitle {
      font-size: 20px;
      color: ${colors.gray};
      margin-bottom: 30px;
      line-height: 1.6;
    }

    &-cta {
      display: flex;
      gap: 15px;
      margin-bottom: 40px;
    }

    &-stats {
      display: flex;
      gap: 40px;
    }

    &-image {
      flex: 1;
      position: relative;
    }
  }

  .stat {
    border-left: 3px solid ${colors.primary};
    padding-left: 15px;

    &-number {
      font-size: 32px;
      font-weight: 700;
      color: ${colors.dark};
    }

    &-label {
      font-size: 14px;
      color: ${colors.gray};
    }
  }

  .floating-card {
    position: absolute;
    background: white;
    border-radius: 12px;
    padding: 15px;
    box-shadow: ${shadows.primary};
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .card-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
  }

  .card-task {
    top: 20%;
    left: -50px;
    animation: float 4s ease-in-out infinite;
  }

  .card-finance {
    bottom: 15%;
    right: -40px;
    animation: float 4s ease-in-out infinite 1s;
  }

  .card-content {
    h4 {
      font-size: 14px;
      margin-bottom: 5px;
    }

    p {
      font-size: 12px;
      color: ${colors.gray};
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: ${colors.gradient};
    opacity: 0.1;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: ${colors.gradient};
    opacity: 0.1;
    z-index: -1;
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-20%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1024px) {
    .hero-title {
      font-size: 48px;
    }
  }

  @media (max-width: 768px) {
    .hero-content {
      flex-direction: column;
    }

    .hero-title {
      font-size: 36px;
      text-align: center;
    }

    .hero-subtitle {
      text-align: center;
    }

    .hero-cta {
      justify-content: center;
    }

    .hero-stats {
      justify-content: center;
    }
  }
`;
