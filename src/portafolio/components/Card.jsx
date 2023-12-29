
import React from 'react'

export const Card = ({ id, title, description,url}) => {

    

    return (
        <div className="col-sm-6 col-md-4 p-3  animate__animated animate__fadeIn animate__slow">
            <div className="card shadow-efect">
                <div className="img-card">
                    <img className="img-fluid" src={url} alt="" />
                </div>
                <div className="card-content">
                    <h4>App clima</h4>
                    <p> Molestiae, corrupti cupiditate. nobis officia ut doloremque voluptate, iusto veritatis, aspernatur dolorum consectetur?</p>
                </div>


            </div>
        </div>
       
        
                // <div className="col-8 col-sm-6 mx-auto ">
                //     <div className="card m-0">
                //         <img className="img-fluid" alt="100%x280" src={url} />
                //         <div className="card-body">
                //             <h4 className="card-title">{title}</h4>
                //             <p className="card-text">{description}</p>
                //         </div>
                //     </div>
                // </div>
            
     
          
       
        
    )
}
