import Colaborador from "../Colaborador"
import "./Time.css"
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    const cssEstilo = {backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.cor, '0.6')}

    return (
        (props.colaboradores.length > 0) ? <section className="time" style={cssEstilo}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.id)} value={props.cor} type="color" className="input-cor" />
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className="colaboradores">
            {props.colaboradores.map (colaborador => {

                return (
                <Colaborador
                key={colaborador.nome}
                id={colaborador.id}
                favorito={colaborador.favorito}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                corDeFundo={props.cor}
                aoDeletar={props.aoDeletar}
                aoFavoritar={props.aoFavoritar}
            
                />
                )
            })}
            </div>

        </section>
        : ""
    )
}

export default Time