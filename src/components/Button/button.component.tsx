import { ButtonContainer } from './button.styles';

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return <ButtonContainer>
    {children}
  </ButtonContainer>;
};

export default Button;
