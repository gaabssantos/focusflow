import styled from 'styled-components';
import themes from '../../styles/themes.styles';

const colors = themes.light.colors;
const shadow = themes.light.shadow;

export const FeaturesContainer = styled.section`
  padding: 100px 0;
  position: relative;
  overflow: hidden;

  .features {
    &-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
  }

  .feature {
    &-icon {
      width: 60px;
      height: 60px;
      border-radius: 12px;
      background: ${colors.gradient};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 25px;
      font-size: 24px;
      color: white;
    }

    &-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 15px;
    }

    &-desc {
      font-size: 15px;
      color: ${colors.gray};
      line-height: 1.7;
    }

    &-card {
      background: white;
      border-radius: 16px;
      padding: 40px 30px;
      box-shadow: ${shadow.primary};
      transition: all 0.3s ease;
      border: 1px solid rgba(0, 0, 0, 0.05);

      &:hover {
        transform: translateY(-10px);
        box-shadow:
          0 20px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    }
  }

  .section-title {
    text-align: center;
    margin-bottom: 80px;

    h2 {
      font-size: 40px;
      font-weight: 700;
      color: ${colors.dark};
      margin-bottom: 15px;
    }

    p {
      font-size: 18px;
      color: ${colors.gray};
      max-width: 600px;
      margin: 0 auto;
    }
  }

  @media (max-width: 1024px) {
    .features-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .features-grid {
      grid-template-columns: 1fr;
    }
  }
`;
