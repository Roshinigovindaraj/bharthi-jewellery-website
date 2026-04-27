import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Collection = () => {
  const { category } = useParams();
  const { addToCart } = useCart();

  const [wishlist, setWishlist] = useState([]);

  // ✅ DATA
  const productData = {
    rings: [
      {
        id: 1,
        name: "Royal Gold Ring",
        price: 145000,
        stock: 3,
        image: "https://i.pinimg.com/736x/bf/c4/57/bfc457d179eb1b01f4dbfd80680c3f8e.jpg",
      },
      {
        id: 2,
        name: "Diamond Ring",
        price: 175000,
        stock: 5,
        image: "https://i.pinimg.com/736x/5f/e5/87/5fe5870c35caeb53f83b9dc47070ec3e.jpg",
      },
    ],

    chains: [
      {
        id: 3,
        name: "Minimal Gold Chain",
        price: 98000,
        stock: 2,
        image: "https://i.pinimg.com/736x/2f/6b/e7/2f6be7ecfc4b2d1dfe39c0b52169a625.jpg",
      },
      {
        id: 4,
        name: "Premium Gold Chain",
        price: 120000,
        stock: 4,
        image: "https://i.pinimg.com/1200x/24/92/5c/24925cc8a08e99244696f296f5c1a70a.jpg",
      },
    ],

    earrings: [
      {
        id: 5,
        name: "Diamond Earrings",
        price: 125000,
        stock: 1,
        image: "https://i.pinimg.com/1200x/ca/00/7e/ca007eadf6151abeb9e5ede80e770f9f.jpg",
      },
      {
        id: 6,
        name: "Gold Stud Earrings",
        price: 90000,
        stock: 6,
        image: "https://i.pinimg.com/736x/03/a1/0b/03a10bbe638dacdab0a48a8ef4125046.jpg",
      },
    ],
  };

  const products = productData[category] || [];

  // ❤️ Wishlist toggle
  const toggleWishlist = (id, e) => {
    e.preventDefault();
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <main className="w-full pt-28 pb-24 px-6 md:px-12 bg-[#faf9f7] min-h-screen">
      <div className="max-w-screen-2xl mx-auto">

        {/* 🔥 HEADER */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-primary text-xs mb-3">
            Explore Our Collection
          </p>

          <h1 className="text-4xl md:text-6xl font-headline capitalize">
            {category} Collection
          </h1>

          <div className="w-20 h-[2px] bg-primary mx-auto mt-4"></div>
        </div>

        {/* 🔥 FILTER BAR */}
        <div className="flex justify-between items-center mb-12 border-y border-gray-200 py-4 text-sm text-gray-600">
          <span>{products.length} PRODUCTS</span>

          <select className="bg-transparent outline-none cursor-pointer">
            <option>Featured</option>
            <option>Price Low → High</option>
            <option>Price High → Low</option>
          </select>
        </div>

        {/* 🔥 PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group relative"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-xl">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />

                {/* ❤️ WISHLIST */}
                <button
                  onClick={(e) => toggleWishlist(product.id, e)}
                  className="absolute top-3 right-3 bg-white/80 w-8 h-8 rounded-full flex items-center justify-center shadow"
                >
                  {wishlist.includes(product.id) ? "❤️" : "🤍"}
                </button>

                {/* 🛒 ADD TO CART */}
                <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="w-full bg-white text-black py-3 text-xs tracking-widest hover:bg-primary hover:text-white transition"
                  >
                    ADD TO CART
                  </button>
                </div>

              </div>

              {/* TEXT */}
              <div className="mt-4 text-center">

                <h3 className="font-medium group-hover:text-primary transition">
                  {product.name}
                </h3>

                <p className="text-primary font-semibold text-sm">
                  ₹ {product.price.toLocaleString()}
                </p>

                {/* STOCK */}
                <p className="text-xs text-gray-500">
                  {product.stock > 0
                    ? `Only ${product.stock} left`
                    : "Out of Stock"}
                </p>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </main>
  );
};

export default Collection;