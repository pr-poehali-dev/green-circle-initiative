import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#162238] font-montserrat">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-10">О нас</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-[#A7C7E7] leading-relaxed font-light">
            Основанная в 2018 году, кофейня "Утренний Аромат" специализируется на спешиалти кофе. 
            Мы тщательно отбираем зерна со всего мира, чтобы подарить вам незабываемый вкус и аромат.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#DEB887]">Качество</h3>
              <p className="font-light text-[#A7C7E7]">Только отборные зерна от лучших фермеров</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#DEB887]">Атмосфера</h3>
              <p className="font-light text-[#A7C7E7]">Уютное пространство для встреч и работы</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#DEB887]">Мастерство</h3>
              <p className="font-light text-[#A7C7E7]">Профессиональные бариста с passion к кофе</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;