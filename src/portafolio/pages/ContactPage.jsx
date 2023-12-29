import { useForm } from "../../hooks/useForm"
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

export const ContactPage = () => {

  const{name, email, mensaje, onInputChange, formState , onResetForm, isFormValid}=useForm({
    name:'',
    email:'',
    mensaje:''
  });

  const handleSubmit=(e)=>{

    e.preventDefault();
    
    if(name.length<=0 || email.length<=0 ){
      return;
    }else if (mensaje.length<=0){
      Swal.fire({
        title: "No has escrito nada",
        text: "Escribe un mensaje por favor",
        icon: "warning"
      });
      
    }else{
      emailjs.sendForm('service_zfd2goo', 'template_e3gaicc',e.target, 'oogBIo9ND4hmpdSHy')
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tu mensaje ha sido enviado",
          showConfirmButton: false,
          timer: 1000
        });
        onResetForm();
      }, (error) => {
          console.log(error.text);
      })
    }
  }

  return (


    <div className="row screem justify-content-center align-items-center p-4">
      
      <div className="col-md-5 animate__animated animate__bounceIn ">
      <h1 className="contact-title text-center fw-bold">Contacto</h1>
      <form onSubmit={handleSubmit} id="form">
      <div className="mb-3">
          <label htmlFor="inputName" 
                className="form-label"
                >Nombre</label>
          <input 
            type="text" 
            className="form-control" 
            id="inputName" 
            name="name"
            value={name}
            onChange={onInputChange}
            />
        </div>

        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="inputEmail"
            name="email"
            value={email}
            onChange={onInputChange}
            />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Escriba su mensaje aquí</label>
          <textarea 
            className="form-control" 
            id="exampleFormControlTextarea1" 
            rows="3"
            name="mensaje"
            value={mensaje}
            onChange={onInputChange}
            ></textarea>
        </div>

        <button className="btn w-100 " type="submit">Enviar</button>
        
      </form>
        
      </div>
    </div>


  )
}
