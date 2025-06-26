'use client';

import { motion } from 'framer-motion';
import { 
  CreditCard, 
  BarChart3, 
  Users, 
  Zap, 
  Shield, 
  Smartphone,
  Globe,
  Clock
} from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Tarjetas corporativas inteligentes',
    description: 'Emite tarjetas físicas y virtuales con límites personalizados y controles de gasto en tiempo real.',
    color: 'bg-apolo-purple/10',
    iconColor: 'text-apolo-purple'
  },
  {
    icon: BarChart3,
    title: 'Analytics avanzado',
    description: 'Visualiza el flujo de caja, proyecciones y métricas clave de tu negocio en dashboards intuitivos.',
    color: 'bg-apolo-aqua/10',
    iconColor: 'text-apolo-aqua'
  },
  {
    icon: Users,
    title: 'Gestión de equipos',
    description: 'Administra permisos, aprobaciones y accesos de tu equipo desde una plataforma centralizada.',
    color: 'bg-apolo-coral/10',
    iconColor: 'text-apolo-coral'
  },
  {
    icon: Zap,
    title: 'Pagos instantáneos',
    description: 'Realiza transferencias SPEI ilimitadas sin costo y pagos internacionales competitivos.',
    color: 'bg-apolo-purple/10',
    iconColor: 'text-apolo-purple'
  },
  {
    icon: Shield,
    title: 'Seguridad bancaria',
    description: 'Protección de grado bancario con encriptación de 256 bits y autenticación multifactor.',
    color: 'bg-apolo-aqua/10',
    iconColor: 'text-apolo-aqua'
  },
  {
    icon: Smartphone,
    title: 'App móvil completa',
    description: 'Gestiona tus finanzas desde cualquier lugar con nuestra app para iOS y Android.',
    color: 'bg-apolo-coral/10',
    iconColor: 'text-apolo-coral'
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="productos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Todo lo que necesitas para <span className="text-apolo-purple">crecer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una plataforma completa que se adapta a las necesidades de tu empresa, 
            sin importar su tamaño o industria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-apolo-purple mb-2">10,000+</div>
            <p className="text-gray-600">Empresas activas</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-apolo-purple mb-2">$5M+</div>
            <p className="text-gray-600">Procesados mensualmente</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-apolo-purple mb-2">99.9%</div>
            <p className="text-gray-600">Uptime garantizado</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-apolo-purple mb-2">24/7</div>
            <p className="text-gray-600">Soporte dedicado</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};