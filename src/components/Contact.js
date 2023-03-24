import {FcTwoSmartphones} from "react-icons/fc";
import {MdAlternateEmail} from "react-icons/md";
import {BsLinkedin} from "react-icons/bs";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__heading">Contact Me <FcTwoSmartphones/></h2>
     <div className="contact__card-container">
<div className="contact__card">
        <a href="mailto: mazurek321.dev@gmail.com" className="email" target="__blank"><MdAlternateEmail />E-mail</a>
        </div>
        <div className="contact__card">
        <a href="https://pl.linkedin.com/in/mateusz-mazurek-99659421a" className="linkedin" target="__blank"><BsLinkedin />LinkedIn</a>
        </div>
     </div>
        
  
    </section>
  )
}

export default Contact