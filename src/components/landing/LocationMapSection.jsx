import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/images/marker-icon-2x.png',
  iconUrl: '/images/marker-icon.png',
  shadowUrl: '/images/marker-shadow.png',
});

const LAT = -29.472556423394337;
const LNG = -51.8108588558256;
const MAPS_URL = `https://share.google/OP5gHr9v7WqGktWQN`;

export default function LocationMapSection() {
  return (
    <section className="py-24 bg-black" style={{ position: 'relative', zIndex: 1 }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Nossa Localização
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Onde nos <span style={{ color: '#4da6e8' }}>Encontrar</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Estamos em Teutônia/RS. Venha nos visitar!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            {/* Glassmorphism card */}
            <div className="flex-1 rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl flex flex-col justify-between"
              style={{ boxShadow: '0 8px 32px 0 rgba(24,94,151,0.25), inset 0 1px 0 rgba(255,255,255,0.1)' }}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: 'linear-gradient(135deg, #185e97 0%, #4da6e8 100%)', boxShadow: '0 4px 20px rgba(24,94,151,0.5)' }}>
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-white font-bold text-xl mb-3">Endereço</h4>
                <p className="text-slate-300 text-base leading-relaxed">
                  Rua Santos Dumont, 1022<br />
                  Sala 202 — Bairro Languiru<br />
                  <span className="text-blue-300 font-medium">Teutônia / RS</span>
                </p>
              </div>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #185e97 0%, #4da6e8 100%)', boxShadow: '0 4px 20px rgba(24,94,151,0.5)' }}
              >
                <Navigation className="w-5 h-5" />
                Starline Telefonia
              </a>
            </div>
          </motion.div>

          {/* Map with 3D-style frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
            style={{
              borderRadius: '24px',
              padding: '3px',
              background: 'linear-gradient(135deg, #185e97, #4da6e8, #f97316, #185e97)',
              boxShadow: '0 25px 60px rgba(24,94,151,0.4), 0 8px 25px rgba(0,0,0,0.4)',
            }}
          >
            <div style={{ borderRadius: '22px', overflow: 'hidden', height: '460px', position: 'relative', zIndex: 0 }}>
              <MapContainer
                center={[LAT, LNG]}
                zoom={17}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
                zoomControl={true}
              >
                <TileLayer
                  attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
                <Marker position={[LAT, LNG]}>
                  <Popup>
                    <div className="text-sm font-medium">
                      <strong>Starline Telefonia</strong><br />
                      Rua Santos Dumont, 1022, Sala 202<br />
                      Bairro Languiru – Teutônia/RS<br />
                      <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mt-1 inline-block">
                        Abrir no Google Maps
                      </a>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}