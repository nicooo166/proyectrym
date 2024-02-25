import "./Tarjeta.css"
import Descripcion from "../Descripcion/Descripcion"
import {useState} from "react"

export default function Tarjeta({infoPersonaje}){

    let [hide, setHide] = useState(true)
    

    const showMore=()=>{
        setHide(false)
        
    }

    return(
        
            <div className="rounded card p-2 d-flex flex-row gap-3">
                <div className="d-flex flex-column max_width justify-content-between">
                    <img src={infoPersonaje.image} alt={infoPersonaje.name}></img>
                    <h3 className="text-center card-title mt-2 mb-3">{infoPersonaje.name}</h3>
                    <button className={hide===false?"nan_display":"btn w-50 p-2 color_boton"} onClick={showMore}>Know more...</button>
                </div>

                {
                    hide===false ? <Descripcion status={infoPersonaje.status} especie={infoPersonaje.species} origen={infoPersonaje.origin.name} genero={infoPersonaje.gender} setHide={setHide}/> :""
                    
                }
            </div>
        
    )
}