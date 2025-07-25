const Hero = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 relative overflow-hidden min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 flex items-center justify-center gap-4">
          <span className="text-6xl animate-bounce">🚀</span>
          <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent animate-pulse">Космические числа!</span>
        </h1>
        
        <div className="grid grid-cols-5 gap-6 max-w-2xl mx-auto">
          {numbers.map((number) => (
            <div
              key={number}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              <span className="text-3xl font-bold">{number}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;