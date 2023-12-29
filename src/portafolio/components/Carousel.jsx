import { proyectos } from "../proyectos";
import { Card } from "./Card";


export const Carousel = (  ) => {

    return (

        <div id="carouselExampleAutoplaying" className="carousel carousel-dark slide  p-3" data-bs-ride="carousel">
            <div className="carousel-inner">
                
                {
                    proyectos.map(proyecto=>(
                        <div 
                            className={`carousel-item ${proyecto.active}`}
                            key={proyecto.id}
                        >
                            <Card {...proyecto}/>
                        </div>
                    ))
                }
               
                
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
