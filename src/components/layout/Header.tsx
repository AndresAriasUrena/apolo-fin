'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Logo className="h-16" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#productos" className="text-gray-700 hover:text-apolo-purple transition-colors">
              Productos
            </Link>
            <Link href="#soluciones" className="text-gray-700 hover:text-apolo-purple transition-colors">
              Soluciones
            </Link>
            <Link href="#precios" className="text-gray-700 hover:text-apolo-purple transition-colors">
              Precios
            </Link>
            <Link href="#empresa" className="text-gray-700 hover:text-apolo-purple transition-colors">
              Empresa
            </Link>
            <button className="ml-4 px-4 py-2 text-apolo-purple border border-apolo-purple rounded-lg hover:bg-apolo-purple hover:text-white transition-all">
              Iniciar sesión
            </button>
            <button className="px-4 py-2 bg-apolo-purple text-white rounded-lg hover:bg-purple-700 transition-all">
              Abrir cuenta
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="#productos" className="text-gray-700 hover:text-apolo-purple">
                Productos
              </Link>
              <Link href="#soluciones" className="text-gray-700 hover:text-apolo-purple">
                Soluciones
              </Link>
              <Link href="#precios" className="text-gray-700 hover:text-apolo-purple">
                Precios
              </Link>
              <Link href="#empresa" className="text-gray-700 hover:text-apolo-purple">
                Empresa
              </Link>
              <button className="px-4 py-2 text-apolo-purple border border-apolo-purple rounded-lg">
                Iniciar sesión
              </button>
              <button className="px-4 py-2 bg-apolo-purple text-white rounded-lg">
                Abrir cuenta
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};