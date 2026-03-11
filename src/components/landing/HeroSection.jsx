import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Wifi, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="bg-gray-50 pt-20 relative min-h-screen overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left">

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Telefonia
              <span className="block" style={{ color: '#185e97' }}>Descomplicada</span>
              <span className="block text-gray-800 text-4xl sm:text-5xl lg:text-6xl mt-1">para Empresas Exigentes</span>
            </h1>

            {/* Subheading */}
            <p className="text-base text-gray-500 leading-relaxed max-w-md mb-8">
              Soluções completas em telecomunicações: PABX na Nuvem, Internet Corporativa, 
              API WhatsApp Business e muito mais. Sua empresa pronta para o amanhã!
            </p>

            {/* CTA Button */}
            <div className="mb-12">
              <a href="https://wa.me/555123190300?text=Olá!%20Gostaria%20de%20mais%20informações." target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="h-14 px-8 text-white font-semibold rounded-xl text-lg transition-all duration-300 bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-200">
                  Fale com Nosso Time
                </Button>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-left">
                <div className="text-3xl font-bold" style={{ color: '#185e97' }}>99,9%</div>
                <div className="text-sm text-gray-400">Up-Time</div>
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-orange-500">24/7</div>
                <div className="text-sm text-gray-400">Suporte</div>
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-orange-500">+100</div>
                <div className="text-sm text-gray-400">Recursos</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative">

            {/* Image with overlay */}
            <div className="relative rounded-3xl overflow-hidden mb-4 shadow-xl">
              <img
                src="/images/hero-equipe.jpg"
                alt="Equipe trabalhando"
                className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-5 left-6 text-white">
                <p className="text-xl font-bold">Conectando empresas</p>
                <p className="text-white/80 text-sm">Soluções para o seu negócio</p>
              </div>
            </div>
            
            <div className="grid gap-3">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#185e9715' }}>
                    <Phone className="w-6 h-6" style={{ color: '#185e97' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Telefone Fixo na Nuvem</h3>
                    <p className="text-gray-500 text-sm">PABX empresarial com ligações ilimitadas para todo Brasil. Reduza até 90% dos custos.</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Internet Corporativa</h3>
                    <p className="text-gray-500 text-sm">Links de alta performance com SLA de 99% e IP Fixo. De 1GB a 4GB de velocidade.</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">API WhatsApp Business</h3>
                    <p className="text-gray-500 text-sm">Integração oficial com chatbots, automação e atendimento 24/7 para seus clientes.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}