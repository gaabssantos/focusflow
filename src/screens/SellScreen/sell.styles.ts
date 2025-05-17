import styled from 'styled-components';
import themes from '../../styles/themes.styles';

const colors = themes.light.colors;
const shadows = themes.light.shadow;

export const SellContainer = styled.section`
  padding: 60px 0 100px;
  background: ${colors.light};
  position: relative;
  overflow: hidden;

  &:before {
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

  .section-title {
    text-align: center;

    h2 {
      font-size: 40px;
      font-weight: 700;
      color: ${colors.dark};
      margin-bottom: 15px;
      margin-top: 75px;
    }

    p {
      font-size: 18px;
      color: ${colors.gray};
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .contact {
    &-container {
      display: flex;
      align-items: stretch;
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: ${shadows.primary};
      position: relative;
      z-index: 1;
      margin-top: 40px;
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

  .form-group {
    margin-bottom: 25px;

    label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 8px;
      color: ${colors.dark};
    }

    input,
    select,
    textarea {
      width: 100%;
      padding: 14px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      font-size: 16px;
      transition: all 0.3s ease;
      background-color: #f8fafc;
    }

    input:focus,
    select:focus,
    textarea:focus {
      outline: none;
      border-color: ${colors.primary};
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
      background-color: white;
    }
  }

  .form-row {
    display: flex;
    gap: 15px;

    .form-group {
      flex: 1;
    }
  }

  .form-button {
    width: 100%;
    padding: 16px;
    font-size: 18px;
    border-radius: 8px;
    background: ${colors.primary};
    color: white;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 20px;

    &:hover {
      background: ${colors.primaryDark};
      transform: translateY(-2px);
      box-shadow: 0 6px 10px rgba(99, 102, 241, 0.25);
    }
  }

  .form-footer {
    text-align: center;
    font-size: 14px;
    color: ${colors.gray};

    a {
      color: ${colors.primary};
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
