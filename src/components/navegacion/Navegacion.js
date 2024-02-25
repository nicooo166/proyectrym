import "./Navegacion.css"
import { Link } from "react-router-dom"
export default function Navegacion({hoja}){
    return(

            <nav className="navbar navbar-expand-lg mod_nav">
                <div className="container-fluid">
                       <Link to="/" className="text-decoration-none"><a className="navbar-brand verde_claro_titulo" href="#">Rick & Morty</a></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="https://rick-and-morty-proyect-umber.vercel.app/images/list.svg" alt="icono menu hamburguesa" className="icono_hamburguesa"></img>
                        </button>
                    <div className="collapse navbar-collapse justify-content-end padding_navegacion" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item rounded">
                        <Link to="/characters" className="text-decoration-none"><a className={hoja === "Characters"?"nav-link active":"nav-link verde_claro"} aria-current="page" href="#">Characters</a></Link>
                        </li>
                        <li className="nav-item rounded">
                        <Link to="/contact" className="text-decoration-none"><a className={hoja === "Contact"?"nav-link active":"nav-link verde_claro"} href="#">Contact</a></Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        
    )
}