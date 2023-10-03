import "./Campo.css"

const Campo = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value)
    }

    return (
        <div className={`campo campo-${props.type || 'text'}`}>
            <label>
                {props.label}
            </label>

            <input
            type={props.type || 'text'}
            value={props.valor}
            onChange={aoDigitar}
            required = {props.obrigatorio}
            placeholder={props.placeholder}/>

        </div>
    )
}

export default Campo