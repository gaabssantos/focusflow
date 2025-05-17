import styled from 'styled-components';
import themes from '../../styles/themes.styles';

const colors = themes.light.colors;

export const ButtonContainer = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  background: ${colors.primary};
  color: white;
  box-shadow: 0 4px 6px rgba(99, 102, 241, 0.25);
`;
