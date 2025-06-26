'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'CEO',
    company: 'TechStart MX',
    content: 'Apolo transformó la manera en que gestionamos nuestras finanzas. Ahora tenemos visibilidad completa de nuestros gastos y el control que necesitábamos para escalar.',
    rating: 5,
    image: '/api/placeholder/64/64'
  },
  {
    name: 'Carlos Rodríguez',
    role: 'CFO',
    company: 'E-commerce Plus',
    content: 'Las tarjetas corporativas con límites personalizados nos han permitido delegar gastos sin perder el control. El dashboard en tiempo real es increíble.',
    rating: 5,
    image: '/api/placeholder/64/64'
  },
  {
    name: 'Ana Martínez',
    role: 'Fundadora',
    company: 'Agencia Digital 360',
    content: 'Como agencia, necesitábamos una solución flexible para manejar múltiples proyectos y presupuestos. Apolo superó todas nuestras expectativas.',
    rating: 5,
    image: '/api/placeholder/64/64'
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Empresas que confían en <span className="text-apolo-purple">Apolo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Miles de empresas mexicanas están transformando sus finanzas con nuestra plataforma
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-apolo-purple/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-apolo-purple text-apolo-purple" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-apolo-purple to-apolo-aqua rounded-full" />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} en {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <p className="text-center text-gray-600 mb-8">
            Empresas líderes confían en Apolo
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-50">
            {/* Placeholder para logos de empresas */}
            {['Empresa 1', 'Empresa 2', 'Empresa 3', 'Empresa 4', 'Empresa 5'].map((company, i) => (
              <div key={i} className="text-2xl font-bold text-gray-400">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};