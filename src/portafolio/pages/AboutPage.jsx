import { useNavigate } from "react-router-dom"



export const AboutPage = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/contact',{replace:true})
  }
  return (
    <>
      <div className="row screem align-items-center justify-content-center">
        <div className="col-10  col-md-6 p-3 ">
          <div className="acerca-de-mi d-flex flex-column animate__animated animate__fadeIn ">
            <h3 className="text-center fw-bold ">ACERCA DE MI</h3>

            <p>
                Mi nombre es Alvaro Fernando Lopez Bolivar, soy Ingeniero Electrónico y desarrollador FronEnd junior, apasionado por el desarrollo  web. Manejo tecnologias 
                como Javascript, React Js, Git, Node Js, Boostrap, Material UI y cuento con conocimientos en bases 
                de datos como Mongo DB. Ademas realizo pruebas unitarias y de integración a componentes a travéz de 
                Jest. Me caracterizo por ser una persona responsable y eficiente, que se actualiza a medida que emergen nuevas tecnologías.

            </p>
            
         <button className="btn mx-auto fw-bold" onClick={handleClick}>Contactar</button>
        
            
          </div>


        </div>
      </div>
    </>
  )
}
