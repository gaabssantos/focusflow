import { Container } from "../../components/ContainerComponent/container.styles";
import { FeaturesContainer } from "./features.styles";

const Features = () => {
  return (
    <FeaturesContainer id="features" className="features">
      <Container>
        <div className="section-title">
          <h2>Tudo o que você precisa em um só lugar</h2>
          <p>
            FocusFlow combina todas as ferramentas essenciais para manter sua
            vida organizada e produtiva.
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3 className="feature-title">Rotinas Organizadas</h3>
            <p className="feature-desc">
              Crie e gerencie rotinas diárias, semanais e mensais com
              facilidade. Configure lembretes e nunca mais esqueça compromissos
              importantes.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3 className="feature-title">Controle Financeiro</h3>
            <p className="feature-desc">
              Acompanhe suas receitas e despesas, crie orçamentos personalizados
              e visualize relatórios detalhados para tomar melhores decisões
              financeiras.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <h3 className="feature-title">Tarefas Diárias</h3>
            <p className="feature-desc">
              Organize suas tarefas por prioridade, adicione prazos e monitore
              seu progresso. Celebre cada conquista ao concluir seus objetivos.
            </p>
          </div>
        </div>
      </Container>
    </FeaturesContainer>
  );
};

export default Features;
