import React from 'react';
import { 
  Phone, 
  Wifi, 
  MessageCircle, 
  Bot,
  Link2,
  Shield,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Phone,
    title: 'Telefone Fixo na Nuvem',
    description: 'PABX empresarial com E1 na Nuvem, SIP Trunk Ilimitado. Redução de até 90% nos custos com telefonia.',
    href: '#telefonia',
  },
  {
    icon: Wifi,
    title: 'Internet Corporativa',
    description: 'Links de internet full de alta performance com SLA 99%, IP Fixo e garantia de 100% da velocidade contratada.',
    href: '#internet',
  },
  {
    icon: MessageCircle,
    title: 'API WhatsApp Business',
    description: 'Integração oficial com a API do WhatsApp Business. Centralize atendimentos e automatize respostas.',
    href: '#whatsapp',
  },
  {
    icon: Bot,
    title: 'Chatbots sem Código',
    description: 'Construa chatbots inteligentes em 3 minutos. Interface intuitiva de arrastar e soltar.',
    href: '#whatsapp',
  },
  {
    icon: Link2,
    title: 'Redundância de Links',
    description: 'Conectividade ininterrupta com redundância de links para garantir o sucesso do seu negócio.',
    href: '#internet',
  },
  {
    icon: Shield,
    title: 'Firewall Inteligente',
    description: 'Proteção avançada com criptografia 256-bit, monitoramento 24/7 e segurança em padrão militar.',
    href: '#sobre',
  }
];

export default function FeaturesSection() {
  return (
    <section id="solucoes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-50 text-amber-600 text-sm font-semibold rounded-full mb-4">
            SOLUÇÕES
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Conheça nossos{' '}
            <span className="text-amber-600">principais produtos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em telecomunicações para empresas que buscam 
            eficiência, economia e tecnologia de ponta.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                transition: { duration: 0.3 }
              }}
              className="group p-8 rounded-3xl bg-white border border-gray-100 cursor-pointer"
              style={{ '--hover-border': '#185e9730' }}
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: '#185e9720' }}
              >
                <feature.icon 
                  className="w-7 h-7" 
                  style={{ color: '#185e97' }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>
              <a 
                href={feature.href}
                className="inline-flex items-center font-medium group/link"
                style={{ color: '#185e97' }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(feature.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Saiba mais
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}