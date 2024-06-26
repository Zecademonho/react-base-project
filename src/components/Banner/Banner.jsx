import { Destaque } from "./Style";

const Banner = ({ titulo, imagem }) => {
    return(
        <Destaque imagem={imagem}>
            <h1 className="titulo">{titulo}</h1>
        </Destaque>
    )
}

export default Banner;