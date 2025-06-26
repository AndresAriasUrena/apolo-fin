import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

const footerLinks = {
  productos: [
    { name: 'Tarjetas corporativas', href: '#' },
    { name: 'Cuentas empresariales', href: '#' },
    { name: 'Pagos y transferencias', href: '#' },
    { name: 'Control de gastos', href: '#' },
  ],
  soluciones: [
    { name: 'Para startups', href: '#' },
    { name: 'Para PyMEs', href: '#' },
    { name: 'Para corporativos', href: '#' },
    { name: 'Para e-commerce', href: '#' },
  ],
  empresa: [
    { name: 'Acerca de nosotros', href: '#' },
    { name: 'Carreras', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Prensa', href: '#' },
  ],
  recursos: [
    { name: 'Centro de ayuda', href: '#' },
    { name: 'API Docs', href: '#' },
    { name: 'Guías', href: '#' },
    { name: 'Webinars', href: '#' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Logo className="h-8 mb-4" />
            <p className="text-gray-400 mb-6">
              La plataforma financiera que impulsa el crecimiento de las empresas mexicanas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-apolo-purple transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-apolo-purple transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-apolo-purple transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links sections */}
          <div>
            <h3 className="font-semibold mb-4">Productos</h3>
            <ul className="space-y-2">
              {footerLinks.productos.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Soluciones</h3>
            <ul className="space-y-2">
              {footerLinks.soluciones.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-apolo-purple" />
              <span className="text-gray-400">contacto@apolo.com.mx</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-apolo-purple" />
              <span className="text-gray-400">+52 55 1234 5678</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-apolo-purple" />
              <span className="text-gray-400">Ciudad de México, México</span>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 Apolo. Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Términos y condiciones
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Política de privacidad
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Aviso legal
            </Link>
          </div>
        </div>

        {/* Regulatory info */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-xs text-gray-500 text-center">
            Apolo Tecnología Financiera S.A. de C.V. es una Institución de Fondos de Pago Electrónico autorizada 
            por la Comisión Nacional Bancaria y de Valores (CNBV) para operar como tal. Los recursos de los 
            clientes se encuentran protegidos hasta por 25,000 UDIs por la protección de fondos de pago electrónico.
          </p>
        </div>
      </div>
    </footer>
  );
};