import "./Descripcion.css"

export default function Descripcion({status,especie,origen,genero,setHide}){

    

    return(
        <div className="d-flex flex-column">
        <button className="btn boton_cierre" onClick={()=>setHide(true)}>X</button>
        <div className="d-flex flex-column justify-content-center">
            
            <ul className="list-group">
                <div className="container lista_desordenada">
                    <li className="fw-bold p-2">Character Status: {status}</li>
                    <li className="fw-bold d-flex flex-column padding_piola"><span className="fw-normal">Species </span><span>{especie}</span></li>
                    <li className="fw-bold d-flex flex-column padding_piola"><span className="fw-normal">Origin </span><span>{origen}</span></li>
                    <li className="fw-bold d-flex flex-column padding_piola"><span className="fw-normal">Gender </span><span>{genero}</span></li>
                </div>
            </ul>
            
        </div>
        </div>
    )
}