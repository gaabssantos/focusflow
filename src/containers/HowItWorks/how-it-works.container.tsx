import { Container } from "../../components/ContainerComponent/container.styles";
import { HowItWorksContainer } from "./how-it-works.styles";

const HowItWorks = () => {
  return (
    <HowItWorksContainer id="how-it-works" className="features">
      <Container>
        <div className="section-title">
          <h2>Como o FocusFlow funciona</h2>
          <p>
            Um processo simples para transformar sua produtividade em apenas
            três passos.
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">1</div>
            <h3 className="feature-title">Crie sua conta</h3>
            <p className="feature-desc">
              Registre-se em apenas um minuto e configure seu perfil
              personalizado para começar a organizar sua vida.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">2</div>
            <h3 className="feature-title">Personalize seu espaço</h3>
            <p className="feature-desc">
              Adicione suas tarefas, compromissos e metas financeiras. Ajuste as
              configurações conforme suas necessidades.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">3</div>
            <h3 className="feature-title">Aumente sua produtividade</h3>
            <p className="feature-desc">
              Sincronize com todos os seus dispositivos e aproveite a clareza e
              foco que vêm com uma vida bem organizada.
            </p>
          </div>
        </div>
      </Container>
    </HowItWorksContainer>
  );
};

export default HowItWorks;