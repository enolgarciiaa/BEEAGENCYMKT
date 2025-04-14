import FormularioContact from '/src/components/componentespc/FormularioContact';
import Footer from '/src/components/Footer';
import CustomCursor from "/src/components/CustomCursor";


function Contact() {
  return (
    <div className="bg-white">
      
      <FormularioContact />

      {/* FOOTER */}
        <Footer />
        
       <CustomCursor />
      
    </div>
  );
}

export default Contact;

  