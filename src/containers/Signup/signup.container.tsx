import { Container } from '../../components/ContainerComponent/container.styles';
import { SignupContainer } from './signup.styles';

const Signup = () => {
  return (
    <SignupContainer id="signup" className="signup">
      <Container>
        <div className="signup-container">
          <div className="signup-overlay">
            <h3>Transforme sua produtividade hoje mesmo</h3>
            <p>
              Junte-se a milhares de pessoas que estão organizando melhor suas
              vidas com o FocusFlow.
            </p>
            <ul className="signup-benefits">
              <li className="signup-benefit">
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
                Acesso completo, pague uma vez só
              </li>
              <li className="signup-benefit">
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
                Não é necessário cartão de crédito
              </li>
              <li className="signup-benefit">
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
                Cancele a qualquer momento
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </SignupContainer>
  );
};

export default Signup;