
const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1616422285623-25796e5f8cff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
        alt="Porsche"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
};

export default HeroBackground;
