import React, { useState } from "react";

const DescriptionPage = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    companyName: "",
    companyCategory: "",
    websiteType: "",
    pages: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-gray-900/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-20 py-20 flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-extrabold text-teal-400 mb-6">
              Professional Web Development
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              Build a modern, responsive, and high-performing website for your business. 
              From portfolios to e-commerce, we deliver solutions that help your brand shine online.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Custom-designed websites tailored to your brand</li>
              <li>Responsive design for all devices</li>
              <li>Fast-loading, SEO-friendly architecture</li>
              <li>E-commerce and content management solutions</li>
            </ul>
            <button className="bg-gradient-to-r from-teal-400 to-teal-500 text-gray-900 font-semibold py-3 px-6 rounded-2xl hover:from-teal-500 hover:to-teal-600 transition-all shadow-lg">
              Get Started
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
              alt="Website Preview"
              className="rounded-2xl shadow-2xl border border-gray-700"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Responsive Design",
            description: "Looks stunning on all devices — mobile, tablet, and desktop.",
            img: "https://images.unsplash.com/photo-1581091215363-0e5d2e99f97e?auto=format&fit=crop&w=100&q=80",
          },
          {
            title: "SEO Optimized",
            description: "Helps your website rank higher and attract more visitors.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=100&q=80",
          },
          {
            title: "Fast Loading",
            description: "Optimized code ensures your website loads quickly.",
            img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=100&q=80",
          },
          {
            title: "Custom Design",
            description: "Tailored designs to match your brand identity.",
            img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=100&q=80",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="mb-4 rounded"
            />
            <h3 className="text-2xl font-semibold text-teal-400 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Form Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-0 py-20">
        <div className="bg-gray-800 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-3xl font-bold text-teal-400 mb-6 text-center">
            Request a Quote
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {["ownerName", "companyName", "pages"].map((field) => (
              <div key={field}>
                <label className="block text-gray-300 font-medium mb-2">
                  {field === "ownerName"
                    ? "Owner Name"
                    : field === "companyName"
                    ? "Company Name"
                    : "Pages Needed"}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Enter ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`}
                  className="w-full bg-gray-900 border border-gray-700 rounded-2xl p-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 shadow-sm transition"
                  required
                />
              </div>
            ))}

            {[
              {
                name: "companyCategory",
                label: "Company Category",
                options: ["IT", "E-commerce", "Healthcare", "Education", "Other"],
              },
              {
                name: "websiteType",
                label: "Type of Website",
                options: ["Portfolio", "Business", "E-commerce", "Blog", "Other"],
              },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-gray-300 font-medium mb-2">
                  {field.label}
                </label>
                <select
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-2xl p-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 shadow-sm transition"
                  required
                >
                  <option value="">Select {field.label.toLowerCase()}</option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <div>
              <label className="block text-gray-300 font-medium mb-2">
                Additional Information
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Any extra details"
                className="w-full bg-gray-900 border border-gray-700 rounded-2xl p-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 shadow-sm transition"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-400 to-teal-500 text-gray-900 font-semibold py-4 rounded-2xl hover:from-teal-500 hover:to-teal-600 transition-all shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default DescriptionPage;
