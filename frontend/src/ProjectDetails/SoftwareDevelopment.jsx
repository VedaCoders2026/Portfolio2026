import React, { useState } from "react";
import Form from "../ProjectForm/Form"; 
import MobileAppImage from "../TeamImg/services/Mobile.jpg";

const SoftwareDevPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-gray-900/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-20 py-20 flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-teal-400 mb-6">
              Custom Software Development
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              Build scalable, secure, and high-performing software solutions tailored to your business needs. 
              From desktop apps to enterprise solutions, we deliver software that drives results.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Custom software tailored to your requirements</li>
              <li>Scalable and maintainable architecture</li>
              <li>Secure and reliable solutions</li>
              <li>Integration with your existing systems</li>
            </ul>
            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-teal-400 to-teal-500 text-gray-900 font-semibold py-3 px-6 rounded-2xl hover:from-teal-500 hover:to-teal-600 transition-all shadow-lg"
            >
              Get Started
            </button>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={MobileAppImage}
              alt="Software Development Preview"
              className="rounded-2xl shadow-2xl border border-gray-700 max-w-xs md:max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Map features like in your original code */}
      </section>

      {/* Call to Action Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-0 py-20 text-center">
        <h2 className="text-3xl font-bold text-teal-400 mb-4">
          Ready to Build Your Website?
        </h2>
        <p className="text-gray-300 mb-6">
          Fill up the form for further Details to create high-quality software that transforms your business.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-teal-400 to-teal-500 text-gray-900 font-semibold py-4 px-8 rounded-2xl hover:from-teal-500 hover:to-teal-600 transition-all shadow-lg"
        >
          Get Started
        </button>
      </section>

   {/* Modal */}
{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
    {/* Backdrop */}
    <div
      onClick={() => setShowModal(false)}
      className="absolute inset-0 bg-black/70 backdrop-blur-sm"
    />

    {/* Modal Card */}
    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700 shadow-2xl">
      
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
        <div>
          <h3 className="text-xl font-bold text-teal-400">
            Start Your Software Development Project
          </h3>
          <p className="text-sm text-gray-400">
            Tell us about your idea and we’ll get back to you
          </p>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="text-gray-400 hover:text-white text-3xl leading-none"
        >
          &times;
        </button>
      </div>

      {/* Body */}
      <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
        <Form />
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default SoftwareDevPage;
