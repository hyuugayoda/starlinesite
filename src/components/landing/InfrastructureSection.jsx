import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Shield, Check } from 'lucide-react';

const pillars = [
  {
    icon: Server,
    title: 'Softswitch Class 5',
    features: [
      'Núcleo de 1.000 ligações por licença',
      'PABX na Nuvem | Legacy Edition',
      'Agentes/ramais ilimitados inclusos',
      '+ de 10 Premiações Internacionais',
      'RFC Implementadas',
      'STIR/SHAKEN'
    ],
    color: 'blue'
  },
  {
    icon: Database,
    title: 'Data Center Tier III',
    features: [
      'Seguro, redundante e escalável',
      'Conectividade com mais de 5.000 km de Fibra Óptica',
      'Conexão com Cable Landing Stations',
      'São Paulo, Rio de Janeiro e Fortaleza',
      'Conexão física e direta com Cloud Providers',
      'Google Cloud, Azure, IBM, Oracle, AWS'
    ],
    color: 'orange'
  },
  {
    icon: Shield,
    title: 'Hardware Homologado',
    subtitle: 'ANATEL',
    features: [
      'Session Border Controller (SBC)',
      'Hardware homologado pela Anatel',
      'Até 300.000 registros SIP',
      '20.000 ligações simultâneas',
      'Cluster Redundante',
      'SBC Premiado Mundialmente + ISO 9001'
    ],
    color: 'green'
  }
];

export default function InfrastructureSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full mb-4" style={{ backgroundColor: '#185e9720', color: '#185e97' }}>
            INFRAESTRUTURA
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#185e97' }}>
            Infraestrutura First Class
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Com um dos <strong className="text-gray-800">menores custos</strong> por canal do mundo sem abrir mão de qualidade, 
            sob <strong className="text-gray-800">três principais pilares!</strong>
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: pillar.color === 'blue' ? '#185e9720' : pillar.color === 'orange' ? '#f97316' + '20' : '#10b981' + '20' }}>
                <pillar.icon className="w-7 h-7" style={{ color: pillar.color === 'blue' ? '#185e97' : pillar.color === 'orange' ? '#f97316' : '#10b981' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
              {pillar.subtitle && (
                <span className="inline-block text-white text-xs px-3 py-1 rounded-full mb-4" style={{ backgroundColor: '#185e97' }}>{pillar.subtitle}</span>
              )}
              <ul className="space-y-3 mt-4">
                {pillar.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: pillar.color === 'blue' ? '#185e97' : pillar.color === 'orange' ? '#f97316' : '#10b981' }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Security Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-orange-500">Firewall</span> Inteligente totalmente Integrado
              </h3>
              <p className="text-gray-300 mb-6">
                Firewall inteligente integrado para ataques de segurança e roubo de serviço SIP, 
                pacotes malformados, ataques de negação de serviço (DoS). Serviço de segurança SIP 
                aprimorado para proteger a privacidade de sua empresa.
              </p>
              <p className="text-gray-400 text-sm mb-8">
                Função Geo, bloqueio de país e sistema de reconhecimento de User Agent para bloqueio 
                em caso de IP risco de invasão.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 border-l-4 border-orange-500">
                  <p className="text-sm">Firewall inteligente e automático integrado</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border-l-4" style={{ borderColor: '#185e97' }}>
                  <p className="text-sm">White List & Black List para IP, Países e User Agent</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border-l-4 border-green-500">
                  <p className="text-sm">Análise de pacotes com base em códigos de falha</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border-l-4 border-purple-500">
                  <p className="text-sm">Bloqueio baseado em monitoramento em tempo real</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-6">
                <Shield className="w-16 h-16 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2" style={{ color: '#4fa3ff' }}>256-bit</div>
              <p className="text-gray-400">Criptografia em padrão Militar</p>
              <p className="text-sm text-gray-500 mt-2">Seguro de +6,8 Milhões de Reais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}