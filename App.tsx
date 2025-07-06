
import React from 'react';
import { InstagramIcon, YoutubeIcon } from './constants';
import SocialLink from './components/SocialLink';

const App: React.FC = () => {
  return (
    <main 
      className="relative h-screen w-screen bg-cover bg-center bg-fixed font-sans"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590602843437-33e615b18369?q=80&w=1974&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-6">
        <div className="bg-black/40 p-8 md:p-12 rounded-xl shadow-2xl border border-gray-700 max-w-4xl w-full">
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg animate-fade-in-down">
            Radio Mímica
          </h1>
          
          <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Un espacio dedicado a los Esports y a la cultura gamer
          </p>
          
          <div className="mt-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg text-md md:text-lg">
              Transmitimos en vivo: Próximamente
            </span>
          </div>
          
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <p className="text-xl text-gray-300 mb-4">Encontranos en:</p>
            <div className="flex justify-center items-center gap-8 md:gap-12">
              <SocialLink 
                href="https://www.instagram.com" 
                name="Instagram" 
                icon={<InstagramIcon />} 
              />
              <SocialLink 
                href="https://www.youtube.com" 
                name="Youtube" 
                icon={<YoutubeIcon />} 
              />
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-down { animation: fade-in-down 0.5s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
      `}</style>
    </main>
  );
};

export default App;
