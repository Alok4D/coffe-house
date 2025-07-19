import bannerImg from "../../assets/banner-image/Rectangle 2.png";

const Banner = () => {
  return (
    <div className="w-full bg-black text-white">
      {/* Banner Section */}
      <div
        className="w-full h-screen bg-cover bg-center flex items-center justify-center"
       style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-md text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-sm md:text-base mb-6">
            It’s coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#eceae3] text-black py-12 px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center border-t-4 border-blue-500">
        <div>
          <div className="text-4xl mb-2">☕</div>
          <h3 className="text-xl font-semibold mb-1">Awesome Aroma</h3>
          <p className="text-sm">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <div className="text-4xl mb-2">🎖️</div>
          <h3 className="text-xl font-semibold mb-1">High Quality</h3>
          <p className="text-sm">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div>
          <div className="text-4xl mb-2">🌿</div>
          <h3 className="text-xl font-semibold mb-1">Pure Grades</h3>
          <p className="text-sm">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div>
          <div className="text-4xl mb-2">🧯</div>
          <h3 className="text-xl font-semibold mb-1">Proper Roasting</h3>
          <p className="text-sm">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
