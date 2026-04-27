import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#C5A059] w-full py-20 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        
        {/* Brand */}
        <div className="space-y-6">
          <div className="font-headline text-2xl text-[#D4AF37] tracking-tighter">Bharthi Jewellers</div>
          <p className="text-gray-400 font-light leading-relaxed text-sm">
            Crafting legacies in gold and stone since 1985. Every piece is a testament to the artisan's soul and the wearer's grace.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300" href="#instagram">
              <span className="material-symbols-outlined text-sm">photo_camera</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300" href="#facebook">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
          </div>
        </div>

        {/* Links 1 */}
        <div className="space-y-6">
          <h6 className="text-white text-xs uppercase tracking-[0.2em] font-semibold">The Atelier</h6>
          <ul className="space-y-4 text-sm font-light">
            <li><a className="text-gray-400 hover:text-[#D4AF37] transition-colors" href="#story">Our Story</a></li>
            <li><a className="text-gray-400 hover:text-[#D4AF37] transition-colors" href="#craft">Craftsmanship</a></li>
            <li><a className="text-gray-400 hover:text-[#D4AF37] transition-colors" href="#sustainability">Sustainability</a></li>
            <li><a className="text-gray-400 hover:text-[#D4AF37] transition-colors" href="#journal">Journal</a></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div className="space-y-6">
          <h6 className="text-white text-xs uppercase tracking-[0.2em] font-semibold">Services</h6>
          <ul className="space-y-4 text-sm font-light">
            <li><a className="text-gray-400 hover:text-[#D4AF37] transition-colors" href="#care">Care Guide</a></li>
            <li><a className="text-gray-400 hover:text-[#D4AF37] transition-colors" href="#bespoke">Bespoke Service</a></li>
            <li><a className="text-gray-400 hover:text-[#D4AF37] transition-colors" href="#valuation">Valuation</a></li>
            <li><a className="text-gray-400 hover:text-[#D4AF37] transition-colors" href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h6 className="text-white text-xs uppercase tracking-[0.2em] font-semibold">Newsletter</h6>
          <p className="text-gray-400 font-light text-sm italic">
            Receive exclusive access to new collections and heritage stories.
          </p>
          <div className="flex border-b border-gray-700 pb-2">
            <input 
              className="bg-transparent border-none focus:ring-0 text-white placeholder-gray-600 w-full text-sm outline-none" 
              placeholder="Email Address" 
              type="email" 
            />
            <button className="material-symbols-outlined text-[#D4AF37] hover:text-white transition-colors">arrow_forward</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-screen-2xl mx-auto mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500 font-medium">
        <div>© {new Date().getFullYear()} Bharthi Jewellers. Crafted with Heritage.</div>
        <div className="flex gap-8">
          <a className="hover:text-white transition-colors" href="#privacy">Privacy</a>
          <a className="hover:text-white transition-colors" href="#terms">Terms</a>
          <a className="hover:text-white transition-colors" href="#cookies">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
