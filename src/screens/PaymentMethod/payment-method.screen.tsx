import { useState } from 'react';
import { Container } from '../../components/ContainerComponent/container.styles';
import { PaymentMethodContainer } from './payment-method.styles';
import qrCode from "../../assets/qr-code.png"
import { Link } from 'react-router-dom';

const PaymentMethod = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(import.meta.env.VITE_PAYMENT_LINK);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PaymentMethodContainer className="payment">
      <Container>
        <div className="section-title">
          <h2>Finalizar Pagamento</h2>
          <p>Escolha sua forma de pagamento para concluir sua compra.</p>
        </div>

        <div className="payment-container">
          <div className="payment-summary">
            <div className="payment-overlay">
              <h3>Seu Carrinho</h3>
              <p>
                Confira os detalhes do seu pedido antes de finalizar o
                pagamento.
              </p>

              <div className="order-summary">
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                  Resumo do Pedido
                </h4>

                <div className="summary-item">
                  <span>Plano Anual FocusFlow Pro</span>
                  <span>R$ 19,90</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-total">
                  <span>Total</span>
                  <span>R$ 19,90</span>
                </div>
              </div>
            </div>
          </div>

          <div className="payment-form-wrapper">
            <div className="payment-form-header">
              <h3>Escolha como pagar</h3>
              <p>Escolha a forma de pagamento que melhor se adapta a você.</p>
            </div>

            <div className="pix-instructions">
              <div className="pix-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6366f1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                Instruções para pagamento
              </div>

              <div className="pix-qr">
                <div className="qr-code">
                  <img src={qrCode} alt="qr-code" />
                </div>
                <div>Escaneie o QR Code acima ou</div>
              </div>

              <div className="pix-code">
                <div className="pix-code-text">{import.meta.env.VITE_PAYMENT_LINK}</div>
                <button
                  onClick={handleCopy}
                  className="copy-button flex items-center gap-2 px-3 py-1.5 border rounded-md bg-gray-100 hover:bg-gray-200 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span
                    className={`transition-opacity duration-300 ${copied ? 'text-green-600 font-semibold' : ''}`}
                  >
                    {copied ? 'Copiado!' : 'Copiar'}
                  </span>
                </button>
              </div>

              <ul className="pix-steps">
                <li className="pix-step">
                  <div className="step-number">1</div>
                  <div className="step-text">
                    Clique em copiar ou escaneie o QR Code
                  </div>
                </li>
                <li className="pix-step">
                  <div className="step-number">2</div>
                  <div className="step-text">
                    Cole no seu navegador
                  </div>
                </li>
                <li className="pix-step">
                  <div className="step-number">3</div>
                  <div className="step-text">
                    Escolha qual o método de pagamento no Mercado Pago
                  </div>
                </li>
                <li className="pix-step">
                  <div className="step-number">4</div>
                  <div className="step-text">
                    Realize o pagamento
                  </div>
                </li>
                <li className="pix-step">
                  <div className="step-number">5</div>
                  <div className="step-text">
                    Após o pagamento, pronto! Você já está garantido na pré-venda!
                  </div>
                </li>
              </ul>
            </div>
            <div className="payment-footer">
              Ao finalizar o pagamento, você concorda com nossos{' '}
              <Link to={"/termos"}><a href="#">Termos de Serviço</a></Link> e{' '}
              <Link to={"/privacidade"}><a href="#">Política de Privacidade</a></Link>.
            </div>
          </div>
        </div>
      </Container>
    </PaymentMethodContainer>
  );
};

export default PaymentMethod;
