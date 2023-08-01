import "./CampoTexto.css"

const CampoTexto = () => {
    return (
        <div className="campo-texto">
            <label>Nome</label>
            <input placeholder="Digite seu nome"/>
        </div>
    )
    // Nosso formulário tem uma label e um input com placeholder.
}

export default CampoTexto

// O que fizemos acima é o mesmo que escrever function CampoTexto() {}