import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState('description');
  const { addToCart } = useCart();

  // ✅ FIXED ID (IMPORTANT)
  const product = {
    id: Number(id), // 🔥 FIX HERE
    name: "The Royal Heritage Ring",
    price: 145000,
    sku: "RG-00" + Math.floor(Math.random() * 999),
    weight: "12.5g",
    purity: "22k Gold",
    images: [
      "https://i.pinimg.com/1200x/7b/6e/e8/7b6ee8ac63548c1c8f4e80f33cb91b3c.jpg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDypvOa9TL7cEeeDtfLoAF-X13URpr09SMGptgnXIhhxKlmOH1KGCK5bkL_3DRiWgORaYI8MTQOw0V3VainJH7i00vY9C7NRm4kpY_YeIfcCRjkNfchhBAITSA5A4OwxBVwWBIy8l0EE_QT1LDDqqG4aHjHBlCMrcZP9tq3d_pfpUinWatVvKewD1PM5iVUidypoHSeLApZRntiMozViFJUpvrNT41lzuw8Rwi3w2hOgV3PJhO-oo7nvzQXvxunHl0c__V7RJi6ng",
    ]
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  // ✅ ADD TO CART
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });

    console.log("Cart Added:", product); // 🔍 debug
  };

  return (
    <main className="w-full pt-28 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-10">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/collections/rings" className="hover:text-primary">Rings</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 mb-24">

          {/* IMAGES */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-6">

            {/* THUMB */}
            <div className="flex md:flex-col gap-4 overflow-x-auto">
              {product.images.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setMainImage(img)}
                  className={`w-20 h-24 cursor-pointer border-2 ${
                    mainImage === img ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* MAIN */}
            <div className="flex-grow aspect-[4/5]">
              <img src={mainImage} className="w-full h-full object-cover" />
            </div>

          </div>

          {/* DETAILS */}
          <div className="w-full lg:w-1/2 space-y-8">

            <div>
              <p className="text-sm text-gray-500 mb-2">SKU: {product.sku}</p>

              <h1 className="text-4xl font-headline mb-4">
                {product.name}
              </h1>

              <p className="text-2xl text-primary font-semibold">
                ₹ {product.price.toLocaleString()}
              </p>
            </div>

            <p className="text-gray-600">
              Exquisitely crafted to reflect timeless traditions.
              A perfect addition to your jewellery collection.
            </p>

            {/* SPEC */}
            <div className="pt-6 border-t space-y-3">
              <div className="flex justify-between">
                <span>Gold Purity</span>
                <span>{product.purity}</span>
              </div>
              <div className="flex justify-between">
                <span>Weight</span>
                <span>{product.weight}</span>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 pt-6">

              <button
                onClick={handleAddToCart}
                className="flex-1 border border-primary text-primary hover:bg-primary hover:text-white py-4 uppercase text-xs tracking-widest transition"
              >
                Add to Cart
              </button>

              <button className="flex-1 border border-gray-300 hover:border-primary py-4 uppercase text-xs">
                WhatsApp
              </button>

            </div>

          </div>
        </div>

        {/* TABS */}
        <div className="border-t pt-10 text-center">

          <div className="flex justify-center gap-10 mb-6">
            <button onClick={() => setActiveTab('description')}>
              Description
            </button>
            <button onClick={() => setActiveTab('shipping')}>
              Shipping
            </button>
          </div>

          <p className="text-gray-600 max-w-xl mx-auto">
            {activeTab === 'description'
              ? "Premium handcrafted jewellery made with precision."
              : "Free shipping across India. Easy returns within 14 days."}
          </p>

        </div>

      </div>
    </main>
  );
};

export default ProductDetail;