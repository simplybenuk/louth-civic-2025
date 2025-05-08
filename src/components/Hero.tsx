
import React from 'react';
import louthImage from '../assets/Louth_01.jpg';

interface HeroProps {
  title: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className="bg-lct-gray py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-lct-blue text-center mb-6">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl md:text-2xl text-lct-darkgray text-center mb-8 max-w-3xl">
              {subtitle}
            </p>
          )}
          
          <div className="overflow-hidden rounded-lg shadow-lg max-w-3xl w-full">
            <img 
              src={louthImage} 
              alt="Historic view of Louth" 
              className="w-full h-auto"
            />
            <div className="p-4 bg-white text-center text-sm italic">
              Historic view of Louth
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
