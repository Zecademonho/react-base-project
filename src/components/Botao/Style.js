import styled, { css } from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh; /* Defina a altura desejada para centralizar verticalmente */
  // Novo prop. Quando isFinal for true, adicione margem.
  // Isso é para os botões no final da página.
  ${({ isFinal }) =>
    isFinal &&
    css`
      margin: 2rem !important;
    `}
`;

const BaixeButton = styled.button`
  background-color: var(--detalhe);
  color: var(--destaque);
  box-shadow: 1px 15px 15px 0px rgba(0,0,0,0.35);
  width: 15em;
  height: 4em;
  border-radius: 1em;
  border: none;
  outline: none;
  transition: .5s;
  &:hover{
      transform: scale(1.05);
      background-color: var(--terciaria);
      cursor: pointer;
    }
`;

const CenteredButton = ({ children, isFinal }) => (
  <CenteredContainer isFinal={ isFinal }>
    <BaixeButton>{ children }</BaixeButton>
  </CenteredContainer>
);

export default CenteredButton;