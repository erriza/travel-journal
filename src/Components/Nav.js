import logo from './../Icons/Fill 213.svg'

function Navegador() {
    return (
        <nav>
            <img src={logo} className="nav-logo"></img>
            <h2 className="nav-title">my travel journal.</h2>
        </nav>
    )
}

export default Navegador