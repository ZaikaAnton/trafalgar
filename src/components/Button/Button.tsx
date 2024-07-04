import styled from 'styled-components';

import { ButtonProps } from './Button.props';
import Typography from '../../Typography';

function Button({ children, ...props }: ButtonProps) {
  return (
    <BntEntry {...props}>
      <Typography variant="buttonM">{children}</Typography>
    </BntEntry>
  );
}

export default Button;

const BntEntry = styled.button`
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 261px;
  background: ${({ theme }) => theme.colors.Primary60};
  box-sizing: border-box;
  border: 2px solid ${({ theme }) => theme.colors.Primary60};
  color: white;
  width: 100%;

  margin-bottom: 48px;
  cursor: pointer;
  @media (max-width: 579px) {
    width: 360px;
    margin: 16px auto 32px;
  }
`;
