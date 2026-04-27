import React from 'react';
import { useCart } from '../context/CartContext';

const bestsellers = [
  {
    id: 1,
    name: "The Mayura Pendant",
    price: 42500,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwckZEJslgqjubQDl4d6wMOJNQaIWkoQKI1O9YRq2PCfXX5e9wWer7qalti_ijii9Umzn0IOeTKBdgjXPXV0udF91wjSPt_rvwJSiy2tkBpA-g0uvMK6uUqh77hkGQhGU_C4sCDdeILG458-1itm6YVbPPip6a5nbjTXqQCXRzacXExQizuEgTigh5itndwbCNdY_-axF5egfbDeSRoaLlUGh5DJQ0TOHUplCreExLse7FOsgcuCqeRTZWzpMmBFdTRtSm4viN_Q"
  },
  {
    id: 2,
    name: "Modern Aura Bangles",
    price: 128000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtvAS7cfjQ2aDi_f0x1A7ZTgywRBLnKNBHCK3FPte9iSiiuyIqfwUfyyxXYtRLfjsQjtrWGxSMcwj-nJF10cJx7AGBNrO9BN9aT_-D3051yTRSxYQeeJQultlKhaQbHUtcP46DSXxy2ohIXOvbm6LSfC_OM35q7AHL2ghYW9XUs0eZVTyw1lBm0GHew-KshfoknOlEGAVeq1Lv12PT4gfKLKIowOOJg3Gnuc8b2qL0w3p6g0R91pcxpHxyyc2LXTSpDqTlZgHfww"
  },
  {
    id: 3,
    name: "Goddess Temple Haar",
    price: 345000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJp6hNs2hEVzFiOD0dsnQwQjDswdlpTE3xQRJ4Fh6ki9kyeckfKPs2LBlxEIY9EIY9j9Kk1Obaivz0_LZyeTGRomERjggdtA6yPoXW3L8HelIJoxsa57KEidy6URm6XBSrW6_Rwvm7FNSvLSfAfWcIuC0BhzS2DXNPEiQVdrnc36hemVMwgzbKmNOENj52SvclKjQWfrfC4hoSsKwP5_A6bsixfzRozk8E14D5cLoqZZKwr1-bpPUFa2ZuXLH25M_KHk7vcD4Rqw"
  },
  {
    id: 4,
    name: "Celeste Diamond Studs",
    price: 85900,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGmmhjuZn--ELUv9tvHKTAze8HOt_lij4RmkM7y-LkfikWq3_0UFvwNkRkS2mYcjZiujWODFKShBG77Ooj0xSF99NbDzPSDuL6ihmBE6WczyxGgghU5vJkuPOCgevLPX04-pDTeDBrzBFtPP1zyv1Lajj_RaOEZofZlJunFfV5-rCHo3I1Ad77br-pRzBXw-uD8m0P3UuK8U3mfVyYUibsxeTYSAOzxchJUDLrbkbEFhZAGNcwythFOAtrHqGcncftf58RTqoxYw"
  }
];

const Bestsellers = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-24 px-6 md:px-12 bg-surface">
      <div className="max-w-screen-2xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline text-gray-900 mb-6">
            Our Bestsellers
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {bestsellers.map((item) => (
            <div
              key={item.id}
              onClick={() => addToCart(item)} // ✅ CLICK ANYWHERE
              className="group bg-white p-4 shadow-sm hover:shadow-xl transition cursor-pointer"
            >

              <div className="overflow-hidden relative mb-6">
                <img
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  src={item.image}
                  alt={item.name}
                />

                {/* OPTIONAL BUTTON */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // ❗ prevent double click
                      addToCart(item);
                    }}
                    className="w-full bg-white text-black py-3 text-xs uppercase tracking-widest hover:bg-primary hover:text-white"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-gray-900 font-headline text-lg">
                  {item.name}
                </h3>

                <p className="text-primary font-semibold text-sm">
                  ₹ {item.price.toLocaleString()}
                </p>

                <div className="pt-2">
                  <span className="text-xs uppercase text-gray-500">
                    Click to add
                  </span>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Bestsellers;