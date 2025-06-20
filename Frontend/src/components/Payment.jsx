import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import emailjs from "emailjs-com";
import Lottie from "lottie-react";

function Payment() {
  const { state } = useLocation();
  const item = state?.item;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [paid, setPaid] = useState(false);
  const [animationData, setAnimationData] = useState(null);

  // Fetch Lottie animation from CDN
  useEffect(() => {
    fetch("https://assets10.lottiefiles.com/packages/lf20_8jZ9zz.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.cardNumber || !formData.expiry || !formData.cvv) {
      alert("Please fill in all payment details.");
      return;
    }

    setTimeout(() => {
      setPaid(true);
      sendEmail();
    }, 1000);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Payment Receipt", 20, 20);
    doc.text(`Name: ${formData.name}`, 20, 30);
    doc.text(`Email: ${formData.email}`, 20, 40);
    doc.text(`Product: ${item.name}`, 20, 50);
    doc.text(`Title: ${item.title}`, 20, 60);
    doc.text(`Amount Paid: ₹${item.price}`, 20, 70);
    doc.text(`Card: **** **** **** ${formData.cardNumber.slice(-4)}`, 20, 80);
    doc.save("Payment.pdf");
  };

  const sendEmail = () => {
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      product_name: item.name,
      product_title: item.title,
      price: item.price,
      last4: formData.cardNumber.slice(-4),
    };

    emailjs
      .send("service_bookStore", "template_et8d6xs", templateParams, "ckFOVlzu67rrKAhix")
      .then(() => {
        console.log("Email sent successfully");
      })
      .catch((error) => {
        console.error("Email error:", error);
      });
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-tr from-gray-100 via-blue-100 to-purple-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 text-black dark:text-white transition-all duration-300 ease-in-out">
      <h1 className="text-3xl font-extrabold mb-6 text-center">🔐 Secure Payment Gateway</h1>

      {!item ? (
        <p className="text-center text-lg text-red-500">No product selected.</p>
      ) : !paid ? (
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-10">
          <div className="p-6 border rounded-xl shadow-xl bg-white dark:bg-slate-800 transition-all">
            <img src={item.image} alt={item.name} className="w-full h-52 object-cover mb-4 rounded-xl" />
            <h2 className="text-2xl font-bold mb-1">{item.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-3">{item.title}</p>
            <p className="font-bold text-xl text-green-700">₹{item.price}</p>
          </div>

          <form
            onSubmit={handlePayment}
            className="p-6 border rounded-xl shadow-xl bg-white dark:bg-slate-800 space-y-4 transition-all"
          >
            <h2 className="text-xl font-semibold mb-4">🧾 Enter Payment Details</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg dark:bg-slate-700"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg dark:bg-slate-700"
              required
            />
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleChange}
              maxLength={16}
              className="w-full p-3 border rounded-lg dark:bg-slate-700"
              required
            />
            <div className="flex gap-4">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg dark:bg-slate-700"
                required
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleChange}
                maxLength={4}
                className="w-full p-3 border rounded-lg dark:bg-slate-700"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-green-500 to-lime-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform"
            >
              💳 Pay Now
            </button>
          </form>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto text-center p-8 bg-white dark:bg-slate-800 border rounded-xl shadow-2xl mt-10">
          {animationData && (
            <div className="w-40 mx-auto">
              <Lottie animationData={animationData} loop={false} />
            </div>
          )}
          <h2 className="text-3xl font-bold text-green-600 mt-4">Payment Successful 🎉</h2>
          <p className="text-md text-gray-500 mt-2 mb-4">Thank you for your purchase.</p>
          <div className="text-left mt-6 space-y-1 text-sm">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Product:</strong> {item.name}</p>
            <p><strong>Title:</strong> {item.title}</p>
            <p><strong>Amount Paid:</strong> ₹{item.price}</p>
            <p><strong>Card:</strong> **** **** **** {formData.cardNumber.slice(-4)}</p>
          </div>
          <button
            onClick={downloadPDF}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition-transform"
          >
            📥 Download Receipt (PDF)
          </button>
        </div>
      )}
    </div>
  );
}

export default Payment;
