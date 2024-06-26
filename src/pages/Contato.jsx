import { useTranslation } from 'react-i18next';
import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";
import Base from "./Base"
import dadosComuns from '../utils/dados_comuns.json';

const Contato = () => {
    const { t } = useTranslation();
    return (
        <Base>
            <Banner titulo={t("Contato")} imagem={"imagens/heroHome.png"}/>
            <div className="adTexto">
                <h1>{t('Fale conosco')}</h1> 
                <p>{t('Temos um compromisso em oferecer o melhor atendimento e garantir que sua experiência explorando o Rio de Janeiro seja inesquecível. Se você tem dúvidas, sugestões ou precisa de mais informações, não hesite em nos contactar. Nossa equipe está pronta para ajudá-lo a descobrir todas as maravilhas que o Rio tem a oferecer.')}</p>
            </div>
            <div className="botoes">
                <Botao texto={t("Entre em contato")} isWhatsApp={true} numeroCelular={dadosComuns.whatsapp} mensagem={dadosComuns.mnsgs_padrao_whatsapp.geral} isFinal={true}></Botao>
            </div>
        </Base>
    
    )
}

export default Contato;