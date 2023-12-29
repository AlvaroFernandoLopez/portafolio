import { Link, NavLink } from "react-router-dom"



export const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg  color-navbar navbar-dark fw-bold ">
                <div className="container-fluid container-md">
                    <Link 
                        className="navbar-brand"
                        to="/"
                    >
                        Fernando Lopez
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto  ">
                             <NavLink
                                className={({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }`}
                                to="/home"> Inicio</NavLink>
                             <NavLink 
                                className={({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }`}
                                to="/about"> Acerca de mi</NavLink>
                             <NavLink 
                                className={({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }`}
                                to="/projects"> 
                                 Portafolio
                            </NavLink >
                            <NavLink
                                className={({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }`}
                                to="/contact"
                            >
                                Contacto
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
       
    )
}
