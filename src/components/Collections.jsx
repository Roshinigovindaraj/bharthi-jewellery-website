import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const collections = [
  {
    title: "Signature Rings",
    subtitle: "Bridal & Everyday",
    path: "rings",
    images: [
      "https://i.pinimg.com/736x/bf/c4/57/bfc457d179eb1b01f4dbfd80680c3f8e.jpg",
      "https://i.pinimg.com/736x/5f/e5/87/5fe5870c35caeb53f83b9dc47070ec3e.jpg",
      "https://i.pinimg.com/736x/9e/e4/82/9ee4829ef31a542fb7a75e676e67e408.jpg",
      "https://i.pinimg.com/736x/ec/6e/a0/ec6ea08c7bdc16a2d08c8432f12be73b.jpg"
    ]
  },
  {
    title: "Heritage Necklaces",
    subtitle: "Antique & Modern",
    path: "necklaces",
    images: [
      "https://i.pinimg.com/736x/90/d1/0c/90d10ca90759f64dc5df3e90f13ce1cf.jpg",
      "https://i.pinimg.com/1200x/d8/71/cd/d871cd29b59fa2c7d50cfc0b7442364a.jpg",
      "https://i.pinimg.com/1200x/77/d7/47/77d7477d809488c1e28a72478f3bc513.jpg",
      "https://i.pinimg.com/736x/99/eb/01/99eb015caf6c96ec64f7d0a8189284ce.jpg"
    ]
  },
  {
    title: "Eternal Bangles",
    subtitle: "Kangan & Bracelets",
    path: "bangles",
    images: [
      "https://i.pinimg.com/736x/36/f3/84/36f38491a0041d6043b8836b553dd14b.jpg",
      "https://i.pinimg.com/736x/b1/67/79/b1677929395373b8729f0909d39e6357.jpg",
      "https://i.pinimg.com/1200x/fe/c9/55/fec9551e034877f5c53b6cebd961109a.jpg",
      "https://i.pinimg.com/1200x/46/ec/23/46ec23669c491dc0f0f71f954a193e01.jpg"
    ]
  },
  {
    title: "Diamond Earrings",
    subtitle: "Studs & Drops",
    path: "earrings",
    images: [
      "https://i.pinimg.com/1200x/ca/00/7e/ca007eadf6151abeb9e5ede80e770f9f.jpg",
      "https://i.pinimg.com/1200x/49/5a/06/495a06b28e0da8d49406fbec49c53bcc.jpg",
      "https://i.pinimg.com/736x/03/a1/0b/03a10bbe638dacdab0a48a8ef4125046.jpg",
      "https://i.pinimg.com/1200x/6c/53/ea/6c53ea3ee26797384e882eb967e4a715.jpg"
    ]
  },
  {
    title: "Gold Chains",
    subtitle: "Minimal & Premium",
    path: "chains",
    images: [
      "https://i.pinimg.com/736x/2f/6b/e7/2f6be7ecfc4b2d1dfe39c0b52169a625.jpg",
      "https://i.pinimg.com/1200x/24/92/5c/24925cc8a08e99244696f296f5c1a70a.jpg",
      "https://i.pinimg.com/736x/33/e8/08/33e80876b371fad84f1b12668ce91496.jpg"
    ]
  }
];

const Collections = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-screen-2xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.4em] text-primary text-xs font-medium">
            Explore Our Range
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-headline text-gray-900">
            Signature <span className="text-primary">Collections</span>
          </h2>

          <div className="w-16 h-[2px] bg-primary mx-auto mt-6"></div>

          <p className="mt-6 text-gray-500 max-w-xl mx-auto">
            Discover handcrafted jewellery designed to reflect elegance and luxury.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* BIG CARD */}
          <div className="md:row-span-2">
            <Card item={collections[0]} large />
          </div>

          {/* SMALL CARDS */}
          {collections.slice(1).map((item, idx) => (
            <Card key={idx} item={item} />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Collections;



// ✅ CARD COMPONENT
const Card = ({ item, large }) => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % item.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [item.images.length]);

  const next = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % item.images.length);
  };

  const prev = (e) => {
    e.stopPropagation();
    setCurrent((prev) =>
      prev === 0 ? item.images.length - 1 : prev - 1
    );
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl group ${
        large ? "h-[530px]" : "h-[250px]"
      }`}
    >

      {/* CLICK AREA */}
      <div
        onClick={() => navigate(`/collections/${item.path}`)}
        className="absolute inset-0 z-10 cursor-pointer"
      ></div>

      {/* IMAGE */}
      <img
        src={item.images[current]}
        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        alt={item.title}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

      {/* ARROWS */}
      <button
        onClick={prev}
        className="absolute z-20 left-3 top-1/2 -translate-y-1/2 bg-white/80 w-9 h-9 rounded-full flex items-center justify-center"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute z-20 right-3 top-1/2 -translate-y-1/2 bg-white/80 w-9 h-9 rounded-full flex items-center justify-center"
      >
        ›
      </button>

      {/* TEXT */}
      <div className="absolute bottom-4 left-4 text-white z-20">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-xs opacity-80">{item.subtitle}</p>
      </div>

    </div>
  );
};