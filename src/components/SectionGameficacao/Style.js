import styled from "styled-components";

const Section = styled.section`
    .gameficacao {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem 0;
        .text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
        .section-title{
                text-align: center;
                font-size: 2rem;
                font-weight: 700;
                color: var(--texto);
                text-align: center;
                margin-bottom: 1rem;
                border-bottom: 0.4px solid var(--secundaria);
        }
        .section-subtitle{
                font-size: 1.5rem;
                color: var(--texto);
                text-align: center;
                margin-bottom: 2rem;
        }
        .section-text{
                color: var(--text);
                text-align: center;
                margin-bottom: 2rem;
        }
        .swiper-button-prev{
            color: var(--secundaria);
            left: -50px;
        }
        .swiper-button-next{
            color: var(--secundaria);
            right: -50px;
        } 
    }
    @media screen and (min-width: 1024px){
        .gameficacao{
            flex-direction: row;
        }
        .section-text{
            width: 75%;
        }
    }
`;

export { Section };
