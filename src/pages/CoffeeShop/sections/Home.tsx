
import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-[#F5E6D3] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-[#4A3933] mb-6">Утренний Аромат</h1>
        <p className="text-xl text-[#8B4513] mb-8">Место, где каждый глоток – это история</p>
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" 
            alt="Интерьер кофейни" 
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
