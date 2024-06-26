import styled from "styled-components"

const Destaque = styled.header`
  background-image: url(${props => props.imagem});
  background-size: cover;
  background-position: center;
  background-color: var(--secundaria);
  display: flex;
  height: 20rem;
  flex-direction: row;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: flex-end; /* Alinha o conteúdo na parte inferior */
  margin: 0;
  margin-bottom: 30px;
  border-radius: 0 0 100px 100px;
  box-shadow: 2px 8px 10px 0px rgba(0,0,0,0.51);

  .merriweather-light {
  font-family: "Merriweather", serif;
  font-weight: 300;
  font-style: normal;
  }

  .merriweather-regular {
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-style: normal;
  }

  .merriweather-bold {
  font-family: "Merriweather", serif;
  font-weight: 500;
  font-style: normal;
  }

  h1{
    text-transform: uppercase;
    text-align: center;
    font-size: 36px;
    color: var(--destaque);
  }

  .titulo{
    padding: 1rem 1rem 5.5rem 1rem;
  }
  @media screen and (min-width: 1024px){
    h1{
      font-size: 36px;
    }
  }
`

export {Destaque}