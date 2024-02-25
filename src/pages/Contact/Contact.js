import Navegacion from "../../components/navegacion/Navegacion"
import "./Contact.css"

export default function Contact(){
    return(
        <div>
            <div>
            <Navegacion hoja="Contact"/>
            <main className="color_fondo">
                <h1 className="text-center color_texto pb-5 fs-2">Contact</h1>
                    <p className="color_texto fs-3 text-center">Leave us your information so we can contact you</p>
                <form action="creo usuario en formspree y pego el link si quiero...">
                    <div className="row g-3 pb-2">
                        <div className="col">
                            <label htmlFor="name" className="color_texto">Name</label>
                            <input type="text" className="form-control"  aria-label="First name" id="name"/>
                        </div>
                        <div className="col">
                            <label htmlFor="email" className="color_texto">Email</label>
                            <input type="email" className="form-control"  aria-label="Last name" id="email"/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label color_texto">Message</label>
                        <textarea className="form-control text_area" id="message" rows="3"></textarea>
                    </div>
                    <input className="btn boton_form" type="submit" value="Send"/>
                </form>
            </main>
        </div>
            
            
        </div>
    )
}