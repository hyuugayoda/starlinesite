import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: '300.000+', label: 'Registros SIP' },
  { number: '20.000', label: 'Ligações Simultâneas' },
  { number: '99,9%', label: 'Up-Time Garantido' },
  { number: '24/7', label: 'Monitoramento' }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-100 text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}