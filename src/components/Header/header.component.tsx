import { Link, useLocation } from 'react-router-dom';
import { ButtonContainer } from '../Button/button.styles';
import { Container } from '../ContainerComponent/container.styles';
import { HeaderContainer, Logo, Nav } from './header.style';

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Container>
        <Nav>
          <Logo href="#">
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
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
              <path d="M12 8v8"></path>
              <path d="M8 12h8"></path>
            </svg>
            <Link to={'/'}>FocusFlow</Link>
          </Logo>

          <ul className="nav-links">
            <li>
              {location.pathname !== '/' ? (
                <a href="#features" className="nav-link">
                  <Link to={'/'}>Recursos</Link>
                </a>
              ) : (
                <a href="#features" className="nav-link">
                  Recursos
                </a>
              )}
            </li>
            <li>
              {location.pathname !== '/' ? (
                <a href="#how-it-works" className="nav-link">
                  <Link to={'/'}>Como Funciona</Link>
                </a>
              ) : (
                <a href="#how-it-works" className="nav-link">
                  Como Funciona
                </a>
              )}
            </li>
            <li>
              {location.pathname !== '/' ? (
                <a href="#signup" className="nav-link">
                  <Link to={'/'}>Experimente</Link>
                </a>
              ) : (
                <a href="#signup" className="nav-link">
                  Experimente
                </a>
              )}
            </li>
          </ul>

          <div className="nav-cta">
            <Link to={'/signup'}>
              <ButtonContainer>Comece Agora</ButtonContainer>
            </Link>
          </div>
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
