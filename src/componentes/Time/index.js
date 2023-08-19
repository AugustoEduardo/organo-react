import Colaborador from "../Colaborador"
import "./Time.css"

const Time = (props) => {
    const cssEstilo = {backgroundColor: props.corPrimaria}

    return (
        (props.colaboradores.length > 0) ? <section className="time" style={cssEstilo}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.nome)} value={props.corSecundaria} type="color" className="input-cor" />
            <h3 style={{borderColor: props.corSecundaria}}>{props.nome}</h3>
            <div className="colaboradores">
            {props.colaboradores.map (colaborador => {

                return <Colaborador
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                corDeFundo={props.corSecundaria}
                aoDeletar = {props.aoDeletar}
            
                />
            })}
            </div>

        </section>
        : ""
    )
}

export default Time