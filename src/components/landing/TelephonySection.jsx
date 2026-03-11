import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Grid3X3, 
  Users, 
  Mic, 
  Mail, 
  GitBranch,
  Share2,
  CheckCircle,
  Headphones,
  CheckSquare
} from 'lucide-react';

const telephonyFeatures = [
  {
    icon: Phone,
    title: 'Chamadas',
    description: 'Ligue para todo o Brasil e +200 países com um só plano.'
  },
  {
    icon: Grid3X3,
    title: 'Autoatendimento',
    description: 'Autoatendimento automático com direcionamento para usuários ou departamentos.'
  },
  {
    icon: Users,
    title: 'Cenários de Atendimento',
    description: 'Crie múltiplos autoatendimentos personalizados por número, departamentos ou usuários.'
  },
  {
    icon: Mic,
    title: 'Gravação de Chamadas',
    description: 'Monitore o atendimento da sua equipe com gravação de chamadas.'
  },
  {
    icon: Mail,
    title: 'Correio de Voz',
    description: 'Cada ramal conta com correio de voz acessível de qualquer dispositivo.'
  },
  {
    icon: GitBranch,
    title: 'Extensão ou Ramal',
    description: 'Encaminhe suas chamadas de forma automática para cada ramal/usuário.'
  }
];

const pabxBenefits = [
  { title: 'Simplicidade', description: 'Dashboard intuitivo para fácil gerenciamento' },
  { title: 'Flexibilidade', description: 'Escolha o número exato de ramais e canais' },
  { title: 'Confiabilidade', description: 'SLA de 99,7% para máxima disponibilidade' },
  { title: 'Economia', description: 'Elimine custos com hardware e manutenção' },
];

const callFeatures = [
  'Transfira chamadas para seu departamento de vendas',
  'Atenda via App ou Siga-me no seu celular sem custo adicional',
  'Crie grupos de chamadas para a Matriz da sua empresa',
  'Transfira suas chamadas para uma Filial ou Time Externo sem custo',
  'Correio de voz enviado para o e-mail do colaborador'
];

export default function TelephonySection() {
  return (
    <section id="telefonia" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 text-sm font-semibold rounded-full mb-4">
            TELEFONIA EMPRESARIAL
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Telefone <span className="text-orange-500">Fixo:</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold">
              E1 na Nuvem | SipTrunck Ilimitado
            </span>
            <span className="text-white px-4 py-2 rounded-lg font-semibold" style={{ backgroundColor: '#185e97' }}>
              PABX na Nuvem para a Empresa ou Home Office
            </span>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="text-orange-400 font-bold text-lg mb-2">Redução de até 90%</div>
            <p className="text-gray-300">nos chamados relacionados à telefonia</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="text-orange-400 font-bold text-lg mb-2">Uptime de 99,7%</div>
            <p className="text-gray-300">garantido por SLA</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="text-orange-400 font-bold text-lg mb-2">Escalabilidade instantânea</div>
            <p className="text-gray-300">conforme as necessidades da sua empresa</p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {telephonyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-gray-800"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#185e9720' }}>
                <feature.icon className="w-6 h-6" style={{ color: '#185e97' }} />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* PABX Section */}
        <div className="rounded-3xl p-8 lg:p-12 mb-16" style={{ background: 'linear-gradient(to right, #185e97, #134a7a)' }}>
          <h3 className="text-3xl font-bold mb-8 text-center">
            Nosso PABX em nuvem e serviço de operadora SIP Trunk oferecem:
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pabxBenefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-l-4 border-orange-500">
                <h4 className="text-orange-400 font-bold mb-2">{benefit.title}</h4>
                <p className="text-white/80 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Transform Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Coluna esquerda: imagem */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[420px]">
            <img 
              src="/images/telephony-profissional.jpg"
              alt="Profissional atendendo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-2xl font-bold">Atendimento Profissional</p>
              <p className="text-white/90">Sua equipe sempre conectada</p>
            </div>
          </div>

          {/* Coluna direita: lista + card */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-3xl font-bold mb-3">
                Transforme <span className="text-orange-500">o atendimento</span> da sua empresa!
              </h3>
              <p className="text-gray-400 mb-6">
                Recursos que sua equipe e clientes vão adorar!
              </p>
              <ul className="space-y-3">
                {callFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card +100 Recursos integrado */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-white/10 flex items-center gap-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent flex-shrink-0">+100</div>
              <div>
                <div className="text-lg font-semibold text-white">Recursos de Telefonia Empresarial</div>
                <p className="text-gray-400 text-sm mt-1">Ligações protegidas com criptografia ponta-a-ponta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}