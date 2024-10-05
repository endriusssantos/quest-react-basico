const Botao = (props) => {
    const handleClick = () => {
        mostrarBotao(props)
    }
    return <button onClick={handleClick}>{props.label}</button>
}

const mostrarBotao = (props) => {
    alert('A label desse botão é ' + props.label)
}

export default Botao 