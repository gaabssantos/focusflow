import { useState } from 'react';
import { Container } from '../../components/ContainerComponent/container.styles';
import { SellContainer } from './sell.styles';
import PaymentMethod from '../PaymentMethod/payment-method.screen';
import { Link } from 'react-router-dom';

const SellScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  return (
    <SellContainer className="contact">
      <Container>
        <div className="contact-form-wrapper">
          {currentStep === 1 ? (
            <>
              <div className="section-title">
                <h2>Entre em Contato</h2>
                <p>
                  Preencha o formulário abaixo para receber mais informações
                  sobre nossos serviços.
                </p>
              </div>

              <div className="contact-container">
                <div className="contact-overlay">
                  <h3>Simplifique sua vida com o FocusFlow</h3>
                  <p>
                    Organize suas tarefas, gerencie seu tempo e aumente sua
                    produtividade com nossa plataforma intuitiva.
                  </p>
                  <ul className="contact-benefits">
                    <li className="contact-benefit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Respostas em até 24 horas
                    </li>
                    <li className="contact-benefit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Suporte personalizado
                    </li>
                    <li className="contact-benefit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Melhoria contínua na produtividade
                    </li>
                  </ul>
                </div>
              </div>

              <div className="contact-form-header">
                <h3>Preencha seus dados</h3>
                <p>
                  Enviaremos mais informações sobre o FocusFlow diretamente para
                  seu e-mail.
                </p>
              </div>

              <form className="contact-form" onSubmit={handleNextStep}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstname">Nome</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      placeholder="Digite seu nome"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastname">Sobrenome</label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleInputChange}
                      placeholder="Digite seu sobrenome"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>

                <button type="submit" className="form-button">
                  Próximo
                </button>

                <div className="form-footer">
                  Ao enviar este formulário, você concorda com nossa{' '}
                  <Link to={"/privacidade"}><a href="#">Política de Privacidade</a></Link>.
                </div>
              </form>
            </>
          ) : (
            <PaymentMethod />
          )}
        </div>
      </Container>
    </SellContainer>
  );
};

export default SellScreen;
