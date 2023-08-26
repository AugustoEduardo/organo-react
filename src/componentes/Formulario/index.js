import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css"

const Formulario = (props) => {

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");
    const [nomeTime, setNomeTime] = useState("");
    const [corTime, setCorTime] = useState("");

    const aoSalvar = (evento) => {
        evento.preventDefault()
        if (time === "Selecione um time") {
            alert("Por favor escolha um time")
            return;
        }
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const aoSalvarTime = (evento) => {
        evento.preventDefault()
        props.cadastrarTime({
            nome: nomeTime,
            cor: corTime
        })

        setNomeTime('')
        setCorTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={aoSalvarTime}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    obrigatorio={true}
                    label="Time"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterar={valor => setNomeTime(valor)}
                />
                <Campo
                    obrigatorio={true}
                    type="color"
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterar={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar um Novo Time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;