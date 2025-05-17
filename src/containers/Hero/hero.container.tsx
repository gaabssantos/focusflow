import { useEffect, useState } from 'react';
import { Container } from '../../components/ContainerComponent/container.styles';
import themes from '../../styles/themes.styles';
import { HeroContainer } from './hero.styles';
import Button from '../../components/Button/button.component';
import { Link } from 'react-router-dom';

const palavras = ['vida financeira', 'rotina', 'tarefas diárias'];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % palavras.length);
      setFadeKey((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer className="hero">
      <Container>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Um único lugar para{' '}
              <span key={fadeKey} className="word-flip hero-title">
                {palavras[index]}
              </span>
            </h1>

            <p className="hero-subtitle">
              Simplifique suas rotinas, gerencie suas finanças e mantenha suas
              tarefas diárias organizadas em um único aplicativo intuitivo.
            </p>

            <div className="hero-cta">
              <Link to={'/signup'}>
                <Button>Experimente agora</Button>
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">
                  Satisfação<span className="tooltip">*</span>
                </div>
              </div>
              <div className="stat">
                <div className="stat-number">50K+</div>
                <div className="stat-label">
                  Usuários estimados<span className="tooltip">*</span>
                </div>
              </div>
              <div className="stat">
                <div className="stat-number">4.9</div>
                <div className="stat-label">
                  Avaliação média<span className="tooltip">*</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card card-task">
              <div
                className="card-icon"
                style={{ backgroundColor: themes.light.colors.primary }}
              >
                ✓
              </div>
              <div className="card-content">
                <h4>Tarefas Concluídas</h4>
                <p>+28% nesta semana</p>
              </div>
            </div>
            <div className="floating-card card-finance">
              <div
                className="card-icon"
                style={{ backgroundColor: themes.light.colors.secondary }}
              >
                💰
              </div>
              <div className="card-content">
                <h4>Economia</h4>
                <p>R$ 350 este mês</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
