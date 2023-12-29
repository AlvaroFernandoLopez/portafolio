


export const CardProject = ({ titulo, url, descripcion, githubUrl, link_project }) => {

  return (
    <div className="col-sm-6 col-md-4 m-0">
      <div className="card ">
        <img className="card-img-top img-card" src={url} />
        <div className="card-body">
          <h5 className="card-title fw-bold fs-4">{titulo}</h5>
          <p className="card-text">
            {descripcion}
          </p>
          {/* <a className="btn-card" href="">Ver proyecto</a> */}
          <div className="links-contacto d-flex justify-content-center align-items-center">
            <a href={`${githubUrl}`} target="_blank"><i className="fa-brands fa-github"></i></a>
            <a href={`${link_project}`} target="_blank"><i className="fa-solid fa-code"></i></a>
          </div>
        </div>

      </div>

    </div>
  )
}
