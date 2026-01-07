
import React from 'react';
import Navbar from './components/Navbar';
import DiveAssistant from './components/DiveAssistant';
import { SERVICES, DIVE_SPOTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=2000" 
            alt="Underwater Diving" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight leading-tight uppercase">
            Siente el AzuL<br/>
            <span className="text-sky-400">En Jávea</span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light text-slate-200">
            Descubre la belleza oculta del Mediterráneo con el equipo más profesional de la Costa Blanca.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-sky-500 hover:bg-sky-400 text-white px-10 py-4 rounded-full text-lg font-black transition-all shadow-2xl hover:scale-105">
              CURSOS DE BUCEO
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full text-lg font-black transition-all">
              INMERSIONES
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 float-anim">
          <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-bold tracking-widest uppercase text-sm">Nuestras Experiencias</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">¿Cómo quieres empezar?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-slate-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full font-black text-sky-900 shadow-lg">
                    {service.price}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="mt-auto w-full bg-slate-900 text-white py-4 rounded-2xl font-bold group-hover:bg-sky-600 transition-colors">
                    SABER MÁS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="py-20 bg-sky-900 text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-5xl font-black mb-2 text-sky-400">15+</div>
            <div className="text-slate-400 uppercase tracking-widest text-sm">Años de experiencia</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2 text-sky-400">30+</div>
            <div className="text-slate-400 uppercase tracking-widest text-sm">Puntos de inmersión</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2 text-sky-400">2</div>
            <div className="text-slate-400 uppercase tracking-widest text-sm">Embarcaciones propias</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2 text-sky-400">100%</div>
            <div className="text-slate-400 uppercase tracking-widest text-sm">Seguridad garantizada</div>
          </div>
        </div>
      </section>

      {/* Dive Spots Section */}
      <section id="spots" className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-sky-600 font-bold tracking-widest uppercase text-sm">Buceo en Jávea</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">Los mejores rincones del Cabo</h2>
            </div>
            <button className="text-sky-600 font-bold flex items-center gap-2 hover:gap-4 transition-all group">
              VER MAPA DE INMERSIONES 
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DIVE_SPOTS.map((spot, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-sky-200 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-sky-100 text-sky-600 p-3 rounded-2xl group-hover:bg-sky-600 group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-black uppercase text-slate-400 border border-slate-100 px-3 py-1 rounded-full">
                    {spot.level}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{spot.name}</h4>
                <div className="text-sky-600 font-bold text-sm mb-4">Profundidad: {spot.depth}</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {spot.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-sky-600">
           <img 
            src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80&w=2000" 
            alt="Diving Boat" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 max-w-4xl mx-auto leading-tight">
            ¿LISTO PARA TU PRÓXIMA AVENTURA?
          </h2>
          <p className="text-xl text-sky-100 mb-12 max-w-2xl mx-auto">
            Reservar es muy fácil. Llámanos o escríbenos por WhatsApp y nosotros nos encargamos del resto.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
             <a href="tel:+34965794510" className="bg-white text-sky-600 px-10 py-5 rounded-full text-xl font-black shadow-2xl hover:scale-105 transition-all">
              LLAMAR AHORA
            </a>
            <a href="https://wa.me/34000000000" className="bg-green-500 text-white px-10 py-5 rounded-full text-xl font-black shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.994 9.994 0 004.773 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0012.012 2z"/></svg>
              WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-2xl font-black uppercase">Cabo La Nao</span>
              </div>
              <p className="text-slate-400 max-w-md leading-relaxed mb-8">
                Centro de buceo PADI 5 Estrellas en Jávea. Ofrecemos la mejor experiencia de buceo en la Costa Blanca con instalaciones modernas y un equipo apasionado.
              </p>
              <div className="flex gap-4">
                {['facebook', 'instagram', 'youtube'].map(social => (
                  <a key={social} href="#" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 transition-colors">
                    <div className="w-6 h-6 bg-slate-400 rounded-sm"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">ENLACES RÁPIDOS</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-sky-400">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-sky-400">Cursos PADI</a></li>
                <li><a href="#" className="hover:text-sky-400">Tarifas</a></li>
                <li><a href="#" className="hover:text-sky-400">Seguridad y Salud</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">DÓNDE ESTAMOS</h4>
              <p className="text-slate-400 mb-4">
                Canal de la Fontana, S/N<br/>
                03730 Jávea, Alicante
              </p>
              <p className="text-slate-400">
                +34 965 79 45 10<br/>
                info@cabolanao.com
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-10 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Cabo La Nao S.L. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <DiveAssistant />
    </div>
  );
};

export default App;
