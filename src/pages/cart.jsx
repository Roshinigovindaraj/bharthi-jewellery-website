import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();

  // ✅ TOTAL CALCULATION
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // ✅ PAYMENT FUNCTION
  const handlePayment = async () => {
    try {
      // 🔥 CALL BACKEND
      const res = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: total }),
      });

      const order = await res.json();

      // 🔥 RAZORPAY POPUP
      const options = {
        key: "rzp_test_SiW4aVkKK823OT", // 👉 PUT YOUR TEST KEY HERE
        amount: order.amount,
        currency: "INR",
        name: "Bharthi Jewellers",
        description: "Order Payment",
        order_id: order.id,

        handler: function (response) {
          alert("Payment Successful 🎉");
          console.log(response);
        },

        theme: {
          color: "#785600",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.log(err);
      alert("Payment failed");
    }
  };

  return (
    <div className="pt-28 px-6 md:px-12 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <h1 className="text-4xl font-headline text-center mb-12 text-primary">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your cart is empty
        </p>
      ) : (
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {/* LEFT SIDE */}
          <div className="md:col-span-2 space-y-6">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 bg-white p-5 rounded-xl shadow-sm border"
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                {/* DETAILS */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-primary font-medium mt-1">
                    ₹ {item.price.toLocaleString()}
                  </p>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-3 mt-3">

                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-8 h-8 border rounded hover:bg-gray-100"
                    >
                      -
                    </button>

                    <span className="font-medium">{item.qty}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-8 h-8 border rounded hover:bg-gray-100"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-6 text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>

                  </div>
                </div>

                {/* ITEM TOTAL */}
                <div className="font-semibold text-lg">
                  ₹ {(item.price * item.qty).toLocaleString()}
                </div>

              </div>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white p-6 rounded-xl shadow-sm border h-fit">

            <h2 className="text-xl font-semibold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-3 text-gray-600">
              <span>Subtotal</span>
              <span>₹ {total.toLocaleString()}</span>
            </div>

            <div className="flex justify-between mb-3 text-gray-600">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>₹ {total.toLocaleString()}</span>
            </div>

            {/* ✅ PAYMENT BUTTON */}
            <button
              onClick={handlePayment}
              className="w-full mt-6 bg-primary text-white py-3 rounded-full hover:bg-primary-dark transition"
            >
              Proceed to Checkout
            </button>

          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;