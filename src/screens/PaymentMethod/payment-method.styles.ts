import styled from 'styled-components';
import themes from '../../styles/themes.styles';

const colors = themes.light.colors;
const shadows = themes.light.shadow;

export const PaymentMethodContainer = styled.section`
  padding: 60px 0 100px;
  background: ${colors.light};
  position: relative;
  overflow: hidden;

  a {
    color: ${colors.primary};

    &:hover {
        text-decoration: underline;
    }
  }

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

  .payment {
    &-container {
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

    &-options {
      margin-bottom: 30px;
    }

    &-option {
      background-color: #f8fafc;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 15px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 15px;

      .active {
        border-color: ${colors.primary};
        background-color: rgba(99, 102, 241, 0.05);
      }

      &-icon {
        width: 50px;
        height: 50px;
        background-color: white;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
      }

      &-details {
        flex: 1;
      }

      &-title {
        font-weight: 600;
        font-size: 16px;
        color: ${colors.dark};
        margin-bottom: 5px;
      }

      &-desc {
        font-size: 14px;
        color: ${colors.gray};
      }

      &-radio {
        width: 20px;
        height: 20px;
        border: 2px solid #cbd5e1;
        border-radius: 50%;
        position: relative;
        transition: all 0.3s ease;

        &::after {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: ${colors.primary};
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    &-footer {
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
  }

  .order-summary {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 20px;
    margin-top: 30px;

    h4 {
      font-size: 18px;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .summary {
    &-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 16px;
    }

    &-divider {
      height: 1px;
      background-color: rgba(255, 255, 255, 0.2);
      margin: 15px 0;
    }

    &-total {
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      font-size: 18px;
    }
  }

  .pix {
    &-instructions {
      background-color: #f8fafc;
      border-radius: 12px;
      padding: 25px;
      margin-bottom: 30px;
    }

    &-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 15px;
    }

    &-qr {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }

    &-code {
      display: flex;
      align-items: center;
      gap: 10px;
      background-color: white;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 20px;
      width: 100%;

      &-text {
        flex: 1;
        font-size: 14px;
        color: ${colors.dark};
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        user-select: all;
      }
    }

    &-steps {
      list-style: none;
    }

    &-step {
      display: flex;
      gap: 12px;
      margin-bottom: 12px;
    }
  }

  .qr-code {
    width: 300px;
    height: 300px;
    background-color: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .copy-button {
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    font-weight: 500;
    color: ${colors.dark};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #f1f5f9;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }

  .step {
    &-number {
      width: 24px;
      height: 24px;
      background-color: ${colors.primary};
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 600;
    }

    &-text {
      flex: 1;
      font-size: 14px;
      color: ${colors.gray};
    }
  }

  .confirm-button {
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:hover {
      background: ${colors.primaryDark};
      transform: translateY(-2px);
      box-shadow: 0 6px 10px rgba(99, 102, 241, 0.25);
    }
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

  @media (max-width: 1024px) {
    .payment-container {
      flex-direction: column;
    }

    .payment-summary {
      min-height: 300px;
    }
  }

  @media (max-width: 768px) {
    .payment-form-wrapper {
      padding: 30px 20px;
    }
  }
`;
