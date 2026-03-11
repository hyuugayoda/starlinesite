import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Bot, Clock, Zap, Check } from 'lucide-react';

const whatsappFeatures = [
  {
    icon: MessageCircle,
    title: 'API Oficial do WhatsApp Business',
    description: 'Integração oficial conectando sua empresa de forma segura e profissional à ferramenta de comunicação mais utilizada do Brasil.'
  },
  {
    icon: Bot,
    title: 'Chatbots sem código',
    description: 'Construa e lance um chatbot inteligente do WhatsApp em 3 minutos. Sem codificação necessária - interface intuitiva de arrastar e soltar.'
  },
  {
    icon: Clock,
    title: 'Muito Mais Responsivo',
    description: 'Responda às mensagens do cliente e do WhatsApp 24 horas por dia, 7 dias por semana. Capture mais leads e conecte-se com mais contatos.'
  },
  {
    icon: Zap,
    title: 'Automação e Integração',
    description: 'Integração nativa com Google Sheets, HubSpot e Zapier. Conecte a outras ferramentas usando a API REST.'
  }
];

const benefits = [
  'Centralizar atendimentos',
  'Distribuir conversas entre equipes',
  'Automatizar respostas',
  'Integrar com CRMs e ERPs',
  'Elevar a eficiência do atendimento ao cliente'
];

export default function WhatsAppSection() {
  return (
    <section id="whatsapp" className="py-24 bg-gradient-to-b from-white via-emerald-50/30 to-slate-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-64 h-64 bg-emerald-200/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/15 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <img 
              src="/images/meta-logo.png"
              alt="Meta Logo" 
              className="h-8 sm:h-10"
            />
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-600 text-sm font-semibold rounded-full">
              WHATSAPP BUSINESS
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            <span style={{ color: '#185e97' }}>API Oficial</span> do{' '}
            <span className="text-emerald-600">WhatsApp Business</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Centralize atendimentos, distribua conversas entre equipes, automatize respostas e integre com CRMs e ERPs. 
            Tudo isso com a eficiência e segurança que sua empresa precisa.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {whatsappFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl hover:border-emerald-200 transition-all cursor-pointer relative overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                  whileHover={{ scale: 1.15, rotate: 12 }}
                >
                  <feature.icon className="w-7 h-7 text-emerald-600" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-8 lg:p-12 text-white text-center shadow-2xl shadow-emerald-500/20 relative overflow-hidden"
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%']
              }}
              transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
              className="w-full h-full"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}
            />
          </div>

          <div className="relative z-10">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Conecte-se de forma inteligente
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-emerald-50 mb-8 max-w-2xl mx-auto"
            >
              Automatize processos, responda rapidamente e ofereça uma experiência excepcional aos seus clientes.
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4">
              {benefits.map((benefit, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-white/30 transition-all cursor-default"
                >
                  <Check className="w-4 h-4" />
                  {benefit}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}