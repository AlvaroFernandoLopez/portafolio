
// import { Card } from "../components/Card"
// import { CardProject } from "../components/CardProject"
// import { Carousel } from "../components/Carousel"

import { CardProject } from "../components/CardProject";


// export const ProjectsPage = () => {

//   return (

//     <div className="row screem  align-items-center m-0 gy-4 animate__animated animate__bounceInUp ">

//         <div className="col-sm-6 col-md-4  "><CardProject/></div>
//         <div className="col-sm-6 col-md-4 "><CardProject/></div>
//         <div className="col-sm-6 col-md-4 "><CardProject/></div>

//     </div>
//   )
// }



export const ProjectsPage = () => {
  const proyectos = [
    {
      id: 1,
      titulo: 'App Clima',
      descripcion: 'Mantente informado del clima donde quieras. Desarrollado con:(React, redux, Bootstrap y Axios)',
      url: './assets/proyectos/weather-app.jpg',
      githubUrl:'https://github.com/AlvaroFernandoLopez/weather',
      link_project:'https://weather-delta-sooty.vercel.app/'
    },

    {
      id: 2,
      titulo: 'App journal',
      descripcion: 'Lleva un diario de tu vida y sube las fotos que desees. Desarrollado con:(React, redux, mateial UI, firebase y claudinary)',
      url: './assets/proyectos/journal-app.jpg',
      githubUrl:'https://github.com/AlvaroFernandoLopez/journal',
      link_project:'https://journal-gules.vercel.app/'
    },
   


  ];
  return (
    <div className="row screem flex-row align-items-center m-0 gy-4 animate__animated animate__bounceInUp ">
        <h1 className="text-center p-0 m-0">Mis proyectos</h1>
     
      {
        proyectos.map(proyecto => (
        
            <CardProject
              key={proyecto.id}
              {...proyecto}
            />
        ))
        
      } 
      </div>
      
  )
}
