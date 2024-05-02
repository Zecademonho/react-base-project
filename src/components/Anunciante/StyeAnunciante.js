import styled from 'styled-components'

const StyleAnun = styled.article`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Roboto', serif;
    }

    .Conteudo {
        display: flex;
        flex-direction: column;
        font-size: 100%;
        margin-bottom: 48px;
        margin-right: 40em;
    }

    .Conteudo-Atrativo {
        display: flex;
        flex-direction: row;
        margin-top: 60px;
        margin-bottom: 20px;
        margin-left: 6.5em;;
    }

    .Conteudo-Atrativo-Escrito {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .Conteudo-Atrativo-Escrito-Title {
        font-weight: 600;
        font-size: 34px;
    }

    .Conteudo-Atrativo-Escrito-SubTitle {
        font-weight: 300;
        font-size: 20px;
    }

    .Conteudo-Principal {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        gap: 250px;
        margin-top: 60px;
        margin-bottom: 28px;
        margin-left: 6.5em;
    }

    .Conteudo-Principal-Escrito {
        border-top: 0.4px solid black;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .Title_Anunciante {
        font-weight: 400;
        font-size: 24px;
    }

    .BotaoAnun {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    }

    .Textinho {
        margin-top: 30px;
        font-size: 20px;
    }
        
    .BlocoImg {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: center;
    }

    .Imagem {
        height: 1100px;
        width: 700px;    
    }

`

export {StyleAnun}