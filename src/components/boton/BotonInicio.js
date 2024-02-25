import "./BotonInicio.css"
import { Link } from "react-router-dom"

export default function Boton_inicio({nombreBoton, pasaje}){
    return(
        <div>
            <Link className="Btn_inicio btn" to={pasaje}>{nombreBoton}</Link>
        </div>
    )
}