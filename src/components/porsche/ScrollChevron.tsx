
const ScrollChevron = () => {
  const scrollToModels = () => {
    const modelsSection = document.getElementById("models");
    if (modelsSection) {
      modelsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer animate-bounce"
      onClick={scrollToModels}
    >
      <div className="flex flex-col items-center text-white">
        <span className="text-sm mb-2 opacity-80">Давайте начнем</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default ScrollChevron;
