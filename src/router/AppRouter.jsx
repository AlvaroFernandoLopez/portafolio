import { Navigate, Route, Routes } from "react-router-dom"
import { AboutPage, HomePage, ProjectsPage } from "../portafolio"
import { NavBar } from "../ui/componentes/NavBar"
import { ContactPage } from "../portafolio/pages/ContactPage"
import { Footer } from "../ui/componentes/Footer"




export const AppRouter = () => {
  return (
    <>
      {/*Header */}

      <NavBar/>
      {/*Contenido */}
      
      <div className="container-fluid container-md p-0 ">
        <Routes>
            <Route path="home" element={<HomePage/>} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="/*" element={<Navigate to={'/home'}/>} />
      </Routes>
        
      
      <Footer/>
      
      
        
    </div>
    </>
  )
}


