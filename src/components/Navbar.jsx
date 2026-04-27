import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useCart } from "../context/CartContext";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isColOpen, setIsColOpen] = useState(false);

  const { cartItems } = useCart(); // ✅ CART

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-[#D4AF37]/20">

      {/* HEADER */}
      <div className="flex justify-between items-center h-20 w-full pr-4 md:pr-8">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">

          <div className="h-14 w-16 md:h-20 md:w-20 overflow-hidden flex items-center justify-center">
            <img
              src={logo}
              alt="Bharthi Jewellers"
              className="h-full w-full object-cover scale-125 drop-shadow-[0_0_12px_rgba(212,175,55,0.9)]"
            />
          </div>

          <span className="text-[#D4AF37] text-sm md:text-lg tracking-wide">
            <b>Bharthi Jewellers</b>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-10">

          {/* COLLECTIONS */}
          <div className="relative group">
            <button className="text-gray-300 uppercase tracking-wider hover:text-[#D4AF37] py-8">
              Collections
            </button>

            <div className="absolute left-0 top-full w-64 bg-black border border-[#D4AF37]/20 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

              <Link to="/collections/rings" className="block px-6 py-4 text-sm text-gray-300 hover:text-[#D4AF37]">
                Rings
              </Link>

              <Link to="/collections/chains" className="block px-6 py-4 text-sm text-gray-300 hover:text-[#D4AF37]">
                Chains
              </Link>

              <Link to="/collections/earrings" className="block px-6 py-4 text-sm text-gray-300 hover:text-[#D4AF37]">
                Earrings
              </Link>

            </div>
          </div>

          <Link to="/collections/all" className="text-gray-300 hover:text-[#D4AF37]">
            Shop
          </Link>

          <Link to="/collections/offers" className="text-gray-300 hover:text-[#D4AF37]">
            Offers
          </Link>

          <a href="#contact" className="text-gray-300 hover:text-[#D4AF37]">
            Contact
          </a>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-4 md:space-x-6">

          {/* SEARCH */}
          <span className="material-symbols-outlined text-gray-300 hover:text-[#D4AF37] cursor-pointer">
            search
          </span>

          {/* CART ICON */}
          <Link to="/cart" className="relative">
            <span className="material-symbols-outlined text-gray-300 hover:text-[#D4AF37] cursor-pointer">
              shopping_bag
            </span>

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* AUTH */}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#D4AF37] hidden md:block">
                {user.displayName?.split(" ")[0]}
              </span>

              <button
                onClick={handleLogout}
                className="bg-gray-800 text-white px-3 py-2 text-xs uppercase"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-[#D4AF37] text-black px-3 md:px-4 py-2 text-xs uppercase"
            >
              Login
            </button>
          )}

          {/* MOBILE MENU */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white px-4 py-4 flex flex-col gap-4">

          <button
            onClick={() => setIsColOpen(!isColOpen)}
            className="flex justify-between items-center"
          >
            Collections
            <span className="material-symbols-outlined">
              {isColOpen ? "expand_less" : "expand_more"}
            </span>
          </button>

          {isColOpen && (
            <div className="flex flex-col pl-4 gap-2 text-gray-300">
              <Link to="/collections/rings">Rings</Link>
              <Link to="/collections/chains">Chains</Link>
              <Link to="/collections/earrings">Earrings</Link>
            </div>
          )}

          <Link to="/collections/all">Shop</Link>
          <Link to="/collections/offers">Offers</Link>
          <a href="#contact">Contact</a>

        </div>
      )}

    </nav>
  );
};

export default Navbar;