import Forms from "../components/Anunciante/Forms/Forms"
import Base from "./Base" 
import formulario from "../data/formularios.json"
import Botao from "../components/Botao/Botao";
import { Style } from "../components/Anunciante/Forms/StylePag"

const ElementosContato = formulario.slice(0, 3);

const ElementosEndereco = formulario.slice(3, 9);




function Form_Anunciante() {
    
    return (

        
        <Base>

        <Style>
            <main className="Conteudo">
                <section className="Form-Contato">
                    <div className="Form-Contato-Escrito">
                            <h3 className="Form-Contato-Escrito-Titulo">Contato</h3>

                            {ElementosContato.map(
                            (e, index) => (
                                <Forms className=" FormsContato"
                                    key={index}
                                    name={e.name}
                                    type={e.type}
                                    text={e.text}
                                    placeholder={e.placeholder}
                        />
                        )
                        )  
                        } 
                    </div>

                </section>

                    <div className="ImgLogoForm">
                        <img src="../imagens/icons/android-chrome-512x512.png" alt="Logo"/>
                        <h3 className="textologo">Passeio Carioca</h3>
                    </div>


                <section className="Form-Endereco">
                        <div className="Form-Endereco-Escrito">

                            <h3 className="Form-Endereco-Escrito-Titulo">Endereço</h3>

                            {ElementosEndereco.map(
                                (e, index) => (
                                    <Forms className=" FormsEndereco"
                                        key={index}
                                        name={e.name}
                                        type={e.type}
                                        text={e.text}
                                        placeholder={e.placeholder}
                            />
                            )
                            )  
                            } 

                        </div>
                    </section>

                    <div align='center'>

                        <Botao texto="Enviar"></Botao>

                    </div>
                    
            </main> 

        </Style>

        </Base>

    )
 }



export default Form_Guia