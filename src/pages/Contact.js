import Footer from "../components/Footer";
import Header from "../components/Header";
import "../assets/css/Contact.css";

function Contact() { 
  return (
    <div>
      <Header></Header>
      <div className="static">
      <form className="form">
        <div className="title">Contactez nous</div>
        <input type="text" placeholder="Your email" className="input" />
        <textarea placeholder="Your message"></textarea>
        
        <button>Submit</button>
      </form>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Contact;