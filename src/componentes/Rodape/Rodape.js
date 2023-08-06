import "./Rodape.css"

export const Rodape = () => {
    return (
    <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/imagens/fb.png" alt="Logo do Facebook"></img>
                    </a>
                </li>

                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/imagens/tw.png" alt="Logo do Twitter"></img>
                    </a>
                </li>

                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imagens/ig.png" alt="Logo do Instagram"></img>
                    </a>
                </li>
            </ul>
        </section>

        <section>                
            <img src="./imagens/logo.png" alt="Logo do Organo"></img>
        </section>

        <section>
            <p>Desenvolvido por Alura</p>
        </section>
    </footer>
    )
}

