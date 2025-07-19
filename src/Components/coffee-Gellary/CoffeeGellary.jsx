import insta1 from "../../assets/coffee-gallery/53d6fac5-34ae-48dc-9783-79852170b41d.jpg";
import insta2 from "../../assets/coffee-gallery/canva-MAEbrfrBeqw.jpg";
import insta3 from "../../assets/coffee-gallery/coffee-beans-and-grounds-png.webp";
import insta4 from "../../assets/coffee-gallery/Corkframes_Coffee_Guide_520x500_422ebe38-4cfa-42b5-a266-b9bfecabaf30.webp";
import insta5 from "../../assets/coffee-gallery/cup-coffee-with-wisp-wheat-drawn-froth-seen-from_1232-1212.avif";
import insta6 from "../../assets/coffee-gallery/images (1).jpeg";
import insta7 from "../../assets/coffee-gallery/images (2).jpeg";
import insta8 from "../../assets/coffee-gallery/images.jpeg";

const CoffeeGellary = () => {
  return (
    <div>
      <div className="bg-white py-20">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 uppercase tracking-widest">Follow Us Now</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#42210B] mb-4">
            Follow on Instagram
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Get inspired by our latest brews, behind-the-scenes shots, and irresistible coffee moments shared by our community.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-20">
          {[insta1, insta2, insta3, insta4, insta5, insta6, insta7, insta8].map((img, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={img}
                alt={`coffee-${idx + 1}`}
                className="object-cover w-full h-60"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="text-white bg-yellow-500 px-4 py-2 rounded shadow hover:bg-yellow-600 transition">
                  View Post
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeGellary;
