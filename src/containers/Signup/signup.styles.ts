import styled from 'styled-components';
import themes from '../../styles/themes.styles';

const colors = themes.light.colors;
const shadows = themes.light.shadow;

export const SignupContainer = styled.section`
  padding: 100px 0;
  background: ${colors.light};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -300px;
    right: -300px;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: ${colors.gradient};
    opacity: 0.05;
    z-index: 0;
  }

  .signup {
    &-container {
      display: flex;
      align-items: stretch;
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: ${shadows.primary};
      position: relative;
      z-index: 1;
    }

    &-overlay {
      background: linear-gradient(
        135deg,
        rgba(99, 102, 241, 0.8),
        rgba(244, 114, 182, 0.8)
      );
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 40px;
      color: white;
      width: 100%;

      h3 {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 15px;
      }

      p {
        font-size: 16px;
        margin-bottom: 25px;
        opacity: 0.9;
      }
    }

    &-benefits {
      list-style: none;
      margin-bottom: 30px;
    }

    &-benefit {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;
      font-size: 16px;

      svg {
        width: 20px;
        height: 20px;
      }
    }

    &-form-wrapper {
      flex: 1;
      padding: 50px;
      display: flex;
      flex-direction: column;
    }

    &-form-header {
      margin-bottom: 30px;
      text-align: center;

      h3 {
        font-size: 28px;
        font-weight: 700;
        color: ${colors.dark};
        margin-bottom: 10px;
      }

      p {
        font-size: 16px;
        color: ${colors.gray};
      }
    }

    &-form {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
`;
