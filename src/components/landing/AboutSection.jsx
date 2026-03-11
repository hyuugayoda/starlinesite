import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full mb-6" style={{ backgroundColor: '#185e9720', color: '#185e97' }}>
              QUEM SOMOS
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Quem <span className="text-orange-500">somos?</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A Starline nasceu com um propósito claro: <strong className="text-gray-800">simplificar a comunicação empresarial.</strong> 
              Oferecemos tecnologia de ponta com a confiabilidade que seu negócio precisa para crescer.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Nossa equipe trabalha todos os dias para entregar <strong className="text-gray-800">soluções inteligentes e eficientes,</strong> 
              pensando em cada detalhe que faz diferença no dia a dia da sua empresa.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Sabemos que cada negócio é único. Por isso, oferecemos suporte dedicado e personalizado, 
              acompanhando você em cada etapa da jornada.
            </p>
            
            <div className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-amber-500/20">
              Conectando seu negócio ao futuro.
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Team Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/about-equipe.jpg"
                alt="Equipe Starline"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xl font-bold">Nossa Equipe</p>
                <p className="text-white/90">Dedicada ao seu sucesso</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#185e9720' }}>
                <Target className="w-7 h-7" style={{ color: '#185e97' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Excelência</h3>
              <p className="text-gray-600">Busca constante pela qualidade máxima em cada solução entregue.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Inovação</h3>
              <p className="text-gray-600">Tecnologia de ponta para antecipar e superar expectativas.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pessoas</h3>
              <p className="text-gray-600">Clientes são a parte mais importante do nosso negócio.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Confiabilidade</h3>
              <p className="text-gray-600">99,9% de uptime com infraestrutura redundante e segura.</p>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}