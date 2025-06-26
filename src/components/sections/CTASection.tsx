'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-apolo-purple to-purple-700 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-apolo-aqua rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Empieza a transformar tus finanzas hoy
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Únete a miles de empresas que ya están creciendo con Apolo. 
            Sin comisiones ocultas, sin letra pequeña.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-apolo-aqua" />
              <span className="text-white/90">Cuenta gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-apolo-aqua" />
              <span className="text-white/90">Sin permanencia</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-apolo-aqua" />
              <span className="text-white/90">Activación inmediata</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-apolo-purple rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group font-semibold">
              Abrir cuenta gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-semibold">
              Hablar con ventas
            </button>
          </div>

          <p className="mt-6 text-sm text-white/70">
            No se requiere tarjeta de crédito • Configuración en 5 minutos
          </p>
        </motion.div>
      </div>
    </section>
  );
};