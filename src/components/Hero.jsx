import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const slides = [
    {
      id: 1,
      type: "image",
      src: "https://i.pinimg.com/1200x/93/3d/85/933d850b28559e85dd6c3dc91b1ff03b.jpg",
      title: "Timeless Bridal\nJewellery",
      subtitle: "Crafted for Your Forever Moment",
      desc: "Exquisite designs that celebrate tradition, elegance, and everlasting love."
    },
    {
      id: 2,
      type: "video",
      src: "src/assets/ring-video.mp4", // place in public/videos/ring.mp4
      title: "Where Luxury\nComes Alive",
      subtitle: "A New Dimension of Gold",
      desc: "Experience brilliance, precision, and movement in every detail."
    },
    {
      id: 3,
      type: "image",
      src: "https://i.pinimg.com/1200x/67/ea/f3/67eaf3036a46a19000bda9d9f3a8f316.jpg",
      title: "Heritage Temple\nCollection",
      subtitle: "Inspired by Divine Artistry",
      desc: "Intricately designed ornaments rooted in culture and craftsmanship."
    },
    {
      id: 4,
      type: "image",
      src: "https://i.pinimg.com/1200x/01/e5/85/01e585348adbe75230cde24f529d4968.jpg",
      title: "Modern Gold\nStatements",
      subtitle: "Elegance for Everyday Wear",
      desc: "Minimal yet striking designs that redefine contemporary luxury."
    },
    {
      id: 5,
      type: "image",
      src: "https://i.pinimg.com/1200x/d5/6d/de/d56dde228a2e13c6ba9b08184f03aed5.jpg",
      title: "Signature Diamond\nCollection",
      subtitle: "Brilliance That Defines You",
      desc: "Crafted to capture light, attention, and timeless sophistication."
    }
  ];

  return (
    <section className="pt-20 w-full h-[90vh] bg-black relative overflow-hidden">

      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}   // ✅ IMPORTANT FIX (no ghost text)
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-full relative flex items-center px-6 md:px-16 lg:px-24">

              {/* BACKGROUND */}
              <div className="absolute inset-0 z-0">
                {slide.type === "video" ? (
                  <video
                    src={slide.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                    onError={() => console.log("Video load failed:", slide.src)}
                  />
                ) : (
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/1600x900";
                    }}
                  />
                )}

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
              </div>

              {/* CONTENT */}
              <div className="relative z-10 text-white max-w-xl md:max-w-2xl">

                {/* SUBTITLE */}
                <span className="uppercase tracking-[0.4em] text-primary text-xs font-semibold block mb-4">
                  {slide.subtitle}
                </span>

                {/* TITLE (line-break safe) */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline leading-[1.2] mb-6 whitespace-pre-line">
                  {slide.title}
                </h1>

                {/* DIVIDER */}
                <div className="w-12 h-[2px] bg-primary mb-6"></div>

                {/* DESCRIPTION */}
                <p className="text-sm md:text-lg text-gray-300 font-light mb-8 leading-relaxed max-w-md">
                  {slide.desc}
                </p>

                {/* BUTTON */}
                <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full uppercase tracking-widest text-xs transition-all duration-300">
                  Explore Collection
                </button>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Hero;