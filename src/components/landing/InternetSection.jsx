import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Check, Gauge, Server, Shield } from 'lucide-react';

const speeds = [
  { speed: '1GB', color: 'from-gray-400 to-blue-400' },
  { speed: '2GB', color: 'from-blue-400 to-blue-500' },
  { speed: '3GB', color: 'from-blue-500 to-blue-600' },
  { speed: '4GB', color: 'from-blue-600 to-blue-700' },
];

const linkFullBenefits = [
  'Atendimento personalizado por Consultor de Negócios',
  'Monitoramento proativo: alertas em caso de indisponibilidade do serviço',
  'Suporte técnico e escalonamento especializado em regime 24/7',
  'Atendimento local em tempo reduzido',
  'Relatórios on-line de disponibilidade e consumo',
  'Sem limite de consumo'
];

function SpeedMeter({ speed, color, delay }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const rotation = useMotionValue(-45);
  const count = useMotionValue(0);
  const speedNum = parseInt(speed);

  const handleViewportEnter = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
      animate(rotation, 45, {
        duration: 1.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      });
      
      animate(count, speedNum, {
        duration: 1.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onViewportEnter={handleViewportEnter}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: delay }}
      className="flex flex-col items-center"
    >
      <div className="relative w-32 h-16 mb-4">
        <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-t-full opacity-20`}></div>
        <motion.div 
          style={{ rotate: rotation }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-10 bg-gray-800 rounded-full origin-bottom"
        />
      </div>
      <motion.span className="text-2xl font-bold text-gray-800">
        {useTransform(count, (latest) => Math.round(latest) + 'GB')}
      </motion.span>
    </motion.div>
  );
}

export default function InternetSection() {
  return (
    <section id="internet" className="py-24 bg-gradient-to-b from-indigo-50/40 via-blue-50/60 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full Internet */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full mb-4" style={{ backgroundColor: '#185e9720', color: '#185e97' }}>
            INTERNET CORPORATIVA
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#185e97' }}>
            Full Internet
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Proporcione à sua empresa uma conexão de alta performance por meio da tecnologia de fibra 
            óptica, garantindo links de internet com o desempenho e a confiabilidade necessárias para 
            impulsionar o crescimento do seu negócio a uma velocidade incomparável!
          </p>
        </div>

        {/* Speed Meters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {speeds.map((item, index) => (
            <SpeedMeter 
              key={index}
              speed={item.speed}
              color={item.color}
              delay={index * 0.15}
            />
          ))}
        </div>

        {/* Features Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <span className="text-white px-6 py-3 rounded-lg font-semibold shadow-lg" style={{ backgroundColor: '#185e97' }}>
            SLA Disponibilidade: 99,00% a.m.
          </span>
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
            IP Fixo
          </span>
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
            Garantia de 100%
          </span>
        </div>

        {/* Link Full Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white">
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Link de Internet Corporativo
              <span className="block text-orange-500">(Link Full)</span>
            </h3>
            <p className="text-gray-300 mb-6">
              <strong className="text-white">Oferecemos links de internet full</strong>, estáveis e de alta 
              performance, com infraestrutura própria de fibra óptica, exclusivos para empresas que demandam conectividade ininterrupta e segura no Rio Grande do Sul.
            </p>
            <p className="text-gray-400 text-sm">
              Atendimento direto e personalizado para cada cliente, com suporte especializado e monitoramento contínuo.
            </p>
          </div>
          <div className="space-y-4">
            {linkFullBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-purple-500 to-pink-500">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-200">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Redundancy Section */}
        <div className="mt-20 text-center bg-gradient-to-br from-white to-purple-50/30 rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
          <h3 className="text-3xl font-bold mb-6" style={{ color: '#185e97' }}>
            Redundância de Links 🔗
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Em um cenário empresarial cada vez mais dinâmico, a estabilidade da conexão 
            à internet é <strong className="text-gray-800">essencial para garantir o sucesso do negócio.</strong>
          </p>
          <p className="text-gray-500 max-w-3xl mx-auto">
            A interrupção do acesso à internet pode causar inconvenientes tanto para a empresa 
            quanto para seus clientes. <strong className="text-gray-700">Para contornar essa situação, a prática da 
            Redundância de Links de Internet surge como uma solução eficaz.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}