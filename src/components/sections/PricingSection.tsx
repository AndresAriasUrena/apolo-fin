'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mes',
    description: 'Perfecto para emprendedores y pequeños negocios',
    features: [
      'Cuenta empresarial digital',
      'Tarjeta de débito física',
      '5 usuarios incluidos',
      'Transferencias SPEI ilimitadas',
      'Dashboard básico',
      'Soporte por email'
    ],
    cta: 'Comenzar gratis',
    featured: false
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/mes',
    description: 'Ideal para empresas en crecimiento',
    features: [
      'Todo lo de Starter',
      'Tarjetas ilimitadas',
      'Usuarios ilimitados',
      'Analytics avanzado',
      'API y webhooks',
      'Integraciones contables',
      'Soporte prioritario 24/7',
      'Límites personalizados'
    ],
    cta: 'Empezar prueba gratis',
    featured: true
  },
  {
    name: 'Enterprise',
    price: 'Personalizado',
    period: '',
    description: 'Soluciones a medida para grandes empresas',
    features: [
      'Todo lo de Professional',
      'Gestor de cuenta dedicado',
      'Onboarding personalizado',
      'SLA garantizado',
      'Controles de compliance',
      'Reportes personalizados',
      'Integraciones custom',
      'Términos flexibles'
    ],
    cta: 'Contactar ventas',
    featured: false
  }
];

export const PricingSection = () => {
  return (
    <section className="py-20 bg-white" id="precios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Precios transparentes, <span className="text-apolo-purple">sin sorpresas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tu empresa. 
            Sin comisiones ocultas, sin letra pequeña.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.featured
                  ? 'bg-apolo-purple text-white shadow-2xl scale-105'
                  : 'bg-gray-50 text-gray-900 shadow-lg'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-apolo-coral text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Más popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`ml-1 ${plan.featured ? 'text-white/80' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={plan.featured ? 'text-white/90' : 'text-gray-600'}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 ${
                      plan.featured ? 'text-apolo-aqua' : 'text-apolo-purple'
                    }`} />
                    <span className={plan.featured ? 'text-white/90' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                plan.featured
                  ? 'bg-white text-apolo-purple hover:bg-gray-100'
                  : 'bg-apolo-purple text-white hover:bg-purple-700'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            ¿Tienes preguntas sobre nuestros planes?{' '}
            <a href="#" className="text-apolo-purple hover:underline font-semibold">
              Habla con nuestro equipo
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};