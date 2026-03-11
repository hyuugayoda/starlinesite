import React from 'react';
import { motion } from 'framer-motion';

export default function ClientsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Empresas que utilizam e
            <br />
            <span className="text-blue-600">recomendam Starline</span>
          </h2>
        </div>

        {/* Clients Logos Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16"
        >
          <img 
            src="/images/clientes-logos.png"
            alt="Logos dos clientes Starline"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}