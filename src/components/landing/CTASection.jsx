import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Team Success Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 max-w-4xl mx-auto"
        >
          <img 
            src="/images/cta-equipe.jpg"
            alt="Equipe de sucesso"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
            <div>
              <p className="text-3xl sm:text-4xl font-bold mb-2">Junte-se a centenas de empresas</p>
              <p className="text-lg text-white/90">que já transformaram sua comunicação</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Sua empresa pronta
            <br />
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">para o amanhã</span>
          </h2>

          <div className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg font-semibold text-xl mb-10 shadow-xl shadow-amber-500/20">
            Pronto para Inovar na sua Empresa?
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center">
            <a href="https://wa.me/5551231903000?text=Olá!%20Gostaria%20de%20solicitar%20uma%20proposta." target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="h-14 px-8 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#185e97' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#134a7a'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#185e97'}
              >
                Melhorar minha Comunicação
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}