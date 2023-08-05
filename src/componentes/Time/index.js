import "./Time.css"

const Time = (props) => {
    const cssEstilo = {backgroundColor: props.corSecundaria}

    return (
        <section className="time" style={cssEstilo}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
}

export default Time