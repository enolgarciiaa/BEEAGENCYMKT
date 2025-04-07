// src/components/ContactForm.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import fondoContacto from "/src/assets/fondo-contacto.jpg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#060606] text-white py-20 px-1 sm:px-4 overflow-hidden">
      <div className="max-w-[110rem] mx-auto flex flex-col lg:flex-row gap-8 items-center min-h-[700px]">
        {/* Imagen a la izquierda */}
        <motion.div className="w-full lg:w-[60%] h-full flex justify-center items-center">
          <img
            src={fondoContacto}
            alt="Contacto visual"
            className="h-full w-auto object-contain"
          />
        </motion.div>

        {/* Formulario a la derecha */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-full w-full lg:w-[40%] space-y-6 bg-gray-900 p-6 sm:p-8 rounded-xl border border-gray-700 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Contáctanos</h2>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Nombre completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400"
              placeholder="Tu nombre"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400"
                placeholder="+34 123 456 789"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Mensaje *
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400"
              placeholder="Cuéntanos sobre tu proyecto..."
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                isSubmitting
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-yellow-400 text-black hover:bg-yellow-500 hover:shadow-lg transform hover:scale-[1.02]'
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="mt-4 p-3 bg-green-900 text-green-100 rounded-lg text-center border border-green-700">
              ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-4 p-3 bg-red-900 text-red-100 rounded-lg text-center border border-red-700">
              Hubo un error al enviar. Por favor intenta nuevamente.
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;