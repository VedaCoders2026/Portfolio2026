import React from 'react'
import React from 'react'
import { useState } from 'react';

const form = () => {
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
    <div>
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
  )
}

export default Form
