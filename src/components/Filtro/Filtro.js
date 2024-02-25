import "./Filtro.css"
import {useState} from "react"

export default function Filtro({nombreFiltro, titulo, filtrarPersonaje}){

    let [colorLabel, setColorLabel] = useState("true")

    let cambio_color=()=>{
        if(colorLabel===false){
            setColorLabel(true)
        }else{
            setColorLabel(false)
        }
    }

    return(

        <div className="form-check form-switch filtro_color ps-5 pe-4 py-2 rounded">
            <input className="form-check-input input_color" onChange={cambio_color} type="checkbox" role="switch" id={nombreFiltro} value={nombreFiltro} onClick={(event)=>filtrarPersonaje(event.target)}/>
            <label className={colorLabel === false ? "blanco form-check-label" : "celeste form-check-label"} htmlFor={nombreFiltro}>{titulo}</label>
        </div>

    )
}