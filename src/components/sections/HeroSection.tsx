'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CreditCard, TrendingUp, Shield } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-apolo-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-apolo-aqua/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Finanzas empresariales{' '}
              <span className="text-apolo-purple">simplificadas</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              La plataforma financiera todo-en-uno diseñada para impulsar el crecimiento 
              de tu empresa. Gestiona pagos, gastos y tesorería desde un solo lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-apolo-purple text-white rounded-lg hover:bg-purple-700 transition-all flex items-center justify-center gap-2 group">
                Abrir cuenta gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 border border-gray-300 rounded-lg hover:border-apolo-purple transition-all">
                Ver demo
              </button>
            </div>
            <div className="mt-8 flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-apolo-purple" />
                <span>Regulado por CNBV</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-apolo-purple" />
                <span>Sin comisiones ocultas</span>
              </div>
            </div>
          </motion.div>

          {/* Right content - Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              {/* Mock dashboard */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Balance general</h3>
                  <span className="text-2xl font-bold text-apolo-purple">$2,450,000</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-apolo-purple/10 rounded-lg p-4">
                    <p className="text-sm text-gray-600">Ingresos</p>
                    <p className="text-xl font-semibold text-apolo-purple">+$850,000</p>
                  </div>
                  <div className="bg-apolo-coral/10 rounded-lg p-4">
                    <p className="text-sm text-gray-600">Gastos</p>
                    <p className="text-xl font-semibold text-apolo-coral">-$320,000</p>
                  </div>
                  <div className="bg-apolo-aqua/10 rounded-lg p-4">
                    <p className="text-sm text-gray-600">Ahorro</p>
                    <p className="text-xl font-semibold text-gray-700">$530,000</p>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-r from-apolo-purple/20 to-apolo-aqua/20 rounded-lg flex items-end p-4">
                  <div className="flex gap-1 items-end">
                    {[40, 60, 45, 70, 65, 80, 75, 90].map((height, i) => (
                      <div
                        key={i}
                        className="w-6 bg-apolo-purple rounded-t"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3"
            >
              <TrendingUp className="w-6 h-6 text-apolo-purple" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};