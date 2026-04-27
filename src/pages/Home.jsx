import React from 'react';
import Hero from '../components/Hero';
import Collections from '../components/Collections.jsx'; // ✅ correct
import Bestsellers from '../components/Bestsellers';
import Viewer360 from '../components/Viewer360';


const Home = () => {
  return (
    <main className="w-full">
      <Hero />
      <Viewer360 />
      <Collections />
      <Bestsellers />
      
      {/* Testimonial / Brand Story Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <span className="uppercase tracking-[0.2em] text-primary text-sm mb-4 block font-semibold">Our Heritage</span>
          <h2 className="text-4xl md:text-5xl font-headline text-gray-900 mb-8">Crafting Legacies Since 1985</h2>
          <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            At Bharthi Jewellers, every piece is more than an ornament; it is a legacy passed down through generations. Our master artisans blend traditional Indian aesthetics with contemporary elegance to create timeless masterpieces.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
