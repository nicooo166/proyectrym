import "./Home.css"
import BotonInicio from "../../components/boton/BotonInicio"

export default function Home(){
    return(
        <div>
            <div className="bg_white mx-auto text-center py-5">
                <h1 className="verde_oscuro text-center t_1">Proyect Rick & Morty</h1>
                <h2 className="verde_oscuro text-center t_2">Welcome to Rick & Morty Proyect!</h2>
                <p className="verde_oscuro text-center t_3">This proyect was made for practising React and to made a functional website.</p>
                <p className="verde_oscuro text-center t_4">In this website you can know information of the characters of this animated series.</p>
                <p className="verde_oscuro text-center t_5">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.</p>
                <p className="verde_oscuro text-center fs-2 t_6">Lets go!</p>
                <div className="org_boton">
                <BotonInicio nombreBoton="Characters" pasaje="/characters"/>
                <BotonInicio nombreBoton="Contact" pasaje="/contact"/>
                </div>
            </div>
        </div>
    )
}