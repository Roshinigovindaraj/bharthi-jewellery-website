import React, { useRef, useState } from 'react';

const Viewer360 = () => {
  const videoRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);

  const handleStart = (e) => {
    setIsDragging(true);
    startX.current = e.clientX || e.touches?.[0]?.clientX;
  };

  const handleMove = (e) => {
    if (!isDragging || !videoRef.current) return;

    const currentX = e.clientX || e.touches?.[0]?.clientX;
    const deltaX = currentX - startX.current;

    const video = videoRef.current;
    video.currentTime += deltaX * 0.003;

    if (video.currentTime < 0) video.currentTime = 0;
    if (video.currentTime > video.duration) video.currentTime = video.duration;

    startX.current = currentX;
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <span className="uppercase tracking-[0.6em] text-primary text-xs font-semibold">
            <b>Experience Perfection</b>
          </span>

          <h2 className="text-4xl md:text-6xl font-headline text-gray-900 leading-tight">
            360° Interactive <br />
            <span className="text-primary italic font-light">
              Showcase
            </span>
          </h2>

          <div className="w-16 h-[2px] bg-primary mx-auto md:mx-0"></div>

          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Drag to rotate and explore every intricate detail of our jewellery.
            Crafted with precision and designed for elegance.
          </p>

          <button className="mt-4 px-6 py-3 bg-primary text-white text-xs uppercase tracking-widest rounded-full hover:bg-primary-dark transition-all">
            Explore Collection
          </button>
        </div>

        {/* RIGHT VIDEO VIEW */}
        <div
          className="w-full md:w-1/2 h-[500px] relative rounded-xl overflow-hidden shadow-lg cursor-grab active:cursor-grabbing"
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        >
          <video
            ref={videoRef}
            src="/videos/360ring.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 border-2 border-white/40 m-4 pointer-events-none"></div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 px-6 py-2 rounded-full text-xs uppercase tracking-widest shadow">
            Drag to Rotate
          </div>
        </div>

      </div>
    </section>
  );
};

export default Viewer360;