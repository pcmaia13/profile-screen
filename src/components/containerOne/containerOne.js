import './containerOne.css'

function ContainerOne({ nome }) {
    return (
        <div className="container">
            <img src="./perfil.png" alt=""></img>
            <h1>{nome}</h1>
        </div>
    )
}

export default ContainerOne