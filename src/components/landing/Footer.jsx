import React from 'react';
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';

const navLinks = [
{ label: 'Início', href: '#' },
{ label: 'Quem Somos', href: '#' },
{ label: 'Soluções', href: '#' },
{ label: 'Recursos', href: '#' },
{ label: 'Infraestrutura', href: '#' }];


const solucoes = [
{ label: 'Telefone Fixo na Nuvem', href: '#solucoes' },
{ label: 'Internet Corporativa', href: '#internet' },
{ label: 'API WhatsApp Business', href: '#whatsapp' },
{ label: 'Chatbots sem Código', href: '#solucoes' },
{ label: 'Redundância de Links', href: '#internet' },
{ label: 'Firewall Inteligente', href: '#' }];


export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="flex flex-col items-start">




            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Telefonia Descomplicada para Empresas Exigentes. Conectando seu negócio ao Futuro.
            </p>

            {/* Think Outside The Box */}
            <div className="mt-auto pt-8">
              {/* Caixa SVG minimalista */}
              








              
              <p className="text-xl font-bold leading-tight">
                <span className="text-gray-400">Think </span>
                <span style={{ color: '#185e97' }}>Outside</span>
                <span className="text-gray-400"> The </span>
                <span className="text-orange-500">Box.</span>
              </p>
              <p className="text-xs text-gray-600 mt-1 max-w-[180px] leading-relaxed">
                Inovar é questionar o óbvio e criar o extraordinário.
              </p>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map((link, i) =>
              <li key={i}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <h3 className="text-white font-semibold mb-4">Soluções</h3>
            <ul className="space-y-3">
              {solucoes.map((link, i) =>
              <li key={i}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/555123190300" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L0 24l6.335-1.507A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.727.977.994-3.634-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
                  (51) 2319-0300
                </a>
              </li>
              <li>
                <a href="tel:08004560300" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  0800 456 0300
                </a>
              </li>
              <li>
                <a href="mailto:contato@starline.tec.br" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  contato@starline.tec.br
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-5 items-center">
              <a
                href="https://www.instagram.com/telefoniastarline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/people/Starline-Telefonia/100093666665630/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-5">
              <img
                src="/images/logo-starline.png"
                alt="Starline Telefonia"
                className="h-10 w-auto brightness-0 invert opacity-80" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6">
          <p className="text-gray-500 text-sm text-center">
            © 2025 Starline Telefonia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>);

}