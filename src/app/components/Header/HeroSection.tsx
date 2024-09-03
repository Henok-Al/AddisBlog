// components/HeroSection.js
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/spice-hero.jpg" // Replace with your image path
        alt="Spice Hero"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="absolute inset-0 z-20 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Welcome to Spice World</h1>
          <p className="text-2xl mb-8">Discover the flavors of our spices</p>
          <button className="px-8 py-4 bg-red-600 text-white rounded-full text-lg hover:bg-red-700 transition-colors">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;