import { Card } from "./Card";


export const ProjectList = () => {
    const proyectos=[
        {
         id:1,
         titulo:'App Clima',
         descripcion:'App desarrollada con React',
         url:'./assets/proyectos/weather-app'
        },

        {
            id:2,
            titulo:'App Store',
            descripcion:'App desarrollada con React',
            url:'./assets/proyectos/journal-app'
        },
        {
            id:3,
            titulo:'App Red Social',
            descripcion:'App desarrollada con react',
            url:'./assets/proyectos/weather-app'
        }


    ];
  return (
    <div className="row row-cols-md-3 g-3">
        {
            proyectos.map(proyecto=>(
               
                <Card 
                    key={proyecto.id}
                    {...proyecto}
                />
            ))
        }

    </div>
  )
}
