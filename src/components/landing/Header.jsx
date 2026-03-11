import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
  { label: 'Soluções', href: '#solucoes', hasDropdown: true },
  { label: 'Telefonia', href: '#telefonia' },
  { label: 'Internet', href: '#internet' },
  { label: 'WhatsApp Business', href: '#whatsapp' },
  { label: 'Sobre', href: '#sobre' }];


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Starline */}
          <a href="#" className="flex items-center">
            <img
              src="/images/logo-starline.png"
              alt="Starline Telefonia"
              className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) =>
            <a
              key={index}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition-colors flex items-center gap-1"
              style={{ '--hover-color': '#185e97' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#185e97'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}>

                {item.label}
                
              </a>
            )}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a
              href="tel:5123190300"
              className="hidden md:flex items-center gap-2 text-sm text-gray-600"
              onMouseEnter={(e) => e.currentTarget.style.color = '#185e97'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}>

              <Phone className="w-4 h-4" />
              (51) 2319 0300
            </a>
            
            <a href="https://wa.me/555123190300?text=Olá!%20Gostaria%20de%20mais%20informações." target="_blank" rel="noopener noreferrer">
              <Button
                className="hidden sm:inline-flex bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-full px-6 shadow-lg shadow-amber-500/20">
                Fale Conosco
              </Button>
            </a>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>

              {mobileMenuOpen ?
              <X className="w-6 h-6" /> :

              <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen &&
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-gray-100">

              <nav className="flex flex-col gap-4 py-4">
                {navItems.map((item, index) =>
              <motion.a
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                href={item.href}
                className="text-sm font-medium text-gray-600 transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = '#185e97'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
                onClick={() => setMobileMenuOpen(false)}>

                    {item.label}
                  </motion.a>
              )}
                <motion.a
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.05 }}
                href="tel:5123190300"
                className="flex items-center gap-2 text-sm text-gray-600">

                  <Phone className="w-4 h-4" />
                  (51) 2319 0300
                </motion.a>
                <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: (navItems.length + 1) * 0.05 }}>

                  <a href="https://wa.me/555123190300?text=Olá!%20Gostaria%20de%20mais%20informações." target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-full w-full shadow-lg shadow-amber-500/20">
                      Fale Conosco
                    </Button>
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </motion.header>);

}