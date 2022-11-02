import { useState } from 'react';
import { Container, Content, Footer } from './styled.js'

export function About() {
    const [selected, setSelected] = useState("Sobre")

    function selectedContent() {
        switch (selected) {
            case "Sobre":
                return (
                    <div>
                    <p class="sobreTexto"><span class="marca">&lt;/FN&gt;</span><br/>Evanir Marques Junior.<br/>
                        47 anos de idade.      
                        <br/>Trabalhei como analista fiscal por 10 anos.<br/>
                              
                        Meu primero contato com programação está sendo no Curso do Serratec.</p>
                    </div>  
                );
            case "Interesses":
                return (
                    <div class="Interesses">
                    
                    </div>
            
                );
            case "Contatos":
                return (
                    <div id='contatos'>
                    <a href='https://www.linkedin.com/in/evanir-junior-4459521a2/' target="_blank"><img id="imagemContato" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Imagem Linkedin"></img></a>
                    <br/>
                    <a href="https://www.instagram.com/marx_junior/" target="_blank"><img id="imagemContato" src='https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white' alt="Imagem Instagram"></img></a>
                    <br/>
                    </div>
                    
                )
            case "Portfólio":
                return(
                <div id="Portfólio">
                <h1><a href='https://github.com/Evanirmarxjr'>Github</a></h1>  
                </div>  
                )
            default:
                break;
        }
    }

    return (
        <div>
        <Container>
            <img id="fotoPerfil" src={"https://github.com/Evanirmarxjr.png"} alt="foto-perfil"/>
            <h2>Evanir Maques Junior</h2>
            <h3>Serratec 2022-2</h3>
            <Content>
                <header>
                    <span onClick={() => setSelected("Sobre")}>Sobre</span>
                    <span onClick={() => setSelected("Contatos")}>Contatos</span>
                </header>
                {selectedContent()}

            </Content>
        </Container>
        <Footer>
        </Footer>
        </div>
    )
}