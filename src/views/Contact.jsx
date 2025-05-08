import { lazy, Suspense } from 'react';
import Footer from '/src/components/Footer';


const FormularioContact = lazy(() => import('/src/components/componentespc/FormularioContact'));

function Contact() {
  return (
    <div className="bg-white">
      <Suspense fallback={null}>
        <FormularioContact />
      </Suspense>

      <Footer />
      
    </div>
  );
}

export default Contact;