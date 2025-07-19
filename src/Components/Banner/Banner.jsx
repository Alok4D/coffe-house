import bannerImg from "../../assets/banner-image/Rectangle 2.png";

const Banner = () => {
  return (
    <div className="w-full bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative h-[72vh] w-full bg-cover bg-center flex flex-col items-center justify-center px-6 md:px-12 animate-fade-up"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/5 z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-3xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Awaken Your Senses <br /> With Every Sip
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl mx-auto">
            Discover the art of perfectly brewed coffee — bold flavors, rich aroma, and handcrafted with passion. Start your day with us!
          </p>
          <button
            type="button"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
          >
            Explore Our Blends
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#eceae3] text-black py-12 px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-center animate-fade-up">
        <div className="hover:scale-105 transition-transform duration-300">
          <div className="text-4xl mb-2">☕</div>
          <h3 className="text-xl font-semibold mb-1">Rich Flavor</h3>
          <p className="text-sm">
            Hand-selected beans roasted to bring out full-bodied richness.
          </p>
        </div>
        <div className="hover:scale-105 transition-transform duration-300">
          <div className="text-4xl mb-2">🌿</div>
          <h3 className="text-xl font-semibold mb-1">Organic Beans</h3>
          <p className="text-sm">
            Sourced from sustainable farms for a pure, natural taste.
          </p>
        </div>
        <div className="hover:scale-105 transition-transform duration-300">
          <div className="text-4xl mb-2">⚡</div>
          <h3 className="text-xl font-semibold mb-1">Freshly Brewed</h3>
          <p className="text-sm">
            Brewed daily to ensure every cup is bursting with freshness.
          </p>
        </div>
        <div className="hover:scale-105 transition-transform duration-300">
          <div className="text-4xl mb-2">❤️</div>
          <h3 className="text-xl font-semibold mb-1">Made with Love</h3>
          <p className="text-sm">
            Crafted by passionate baristas who care about every detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
