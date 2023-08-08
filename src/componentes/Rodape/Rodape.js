import "./Rodape.css"

export const Rodape = () => {
    return (
    <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="http://linkedin.com/in/eduardoaadias">
                        <img src="/imagens/linkedin.png" alt="Logo do Linkedin"></img>
                    </a>
                </li>

                <li>
                    <a href="http://github.com/augustoeduardo">
                        <img src="/imagens/github.png" alt="Logo do Github"></img>
                    </a>
                </li>
            </ul>
        </section>

        <section id="organo">                
            <img src="./imagens/logo.png" alt="Logo do Organo"></img>
        </section>

        <section>
            <p>Desenvolvido por Eduardo A. Dias</p>
        </section>
    </footer>
    )
}

