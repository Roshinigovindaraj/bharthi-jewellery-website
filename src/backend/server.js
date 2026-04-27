const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔑 PUT YOUR TEST KEYS HERE
const razorpay = new Razorpay({
  key_id: "rzp_test_SiW4aVkKK823OT",
  key_secret: "Qn6ZTcOrfVgoIvLSXqrW2Nkh",
});

// CREATE ORDER API
app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100, // ₹ → paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating order");
  }
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});