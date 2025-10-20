import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
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
    if (onSubmit) onSubmit();
  };

  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 md:px-0 py-20">
        <div className="bg-gray-800 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-3xl font-bold text-teal-400 mb-6 text-center">
            Request a Quote
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Owner Name */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                Owner Name
              </label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder="Enter owner name"
                className="w-full bg-gray-900 border border-gray-700 rounded-2xl p-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 shadow-sm transition"
                required
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
                className="w-full bg-gray-900 border border-gray-700 rounded-2xl p-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 shadow-sm transition"
                required
              />
            </div>

            {/* Pages Needed */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                Pages Needed
              </label>
              <input
                type="text"
                name="pages"
                value={formData.pages}
                onChange={handleChange}
                placeholder="Enter pages needed"
                className="w-full bg-gray-900 border border-gray-700 rounded-2xl p-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 shadow-sm transition"
                required
              />
            </div>

            {/* Company Category */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                Company Category
              </label>
              <select
                name="companyCategory"
                value={formData.companyCategory}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-2xl p-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 shadow-sm transition"
                required
              >
                <option value="">Select company category</option>
                {["IT", "E-commerce", "Healthcare", "Education", "Other"].map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Website Type */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                Type of Website
              </label>
              <select
                name="websiteType"
                value={formData.websiteType}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-2xl p-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 shadow-sm transition"
                required
              >
                <option value="">Select website type</option>
                {["Portfolio", "Business", "E-commerce", "Blog", "Other"].map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Additional Info  */}
            <div className="md:col-span-2">
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

            {/* Submit Button  */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-400 to-teal-500 text-gray-900 font-semibold py-4 rounded-2xl hover:from-teal-500 hover:to-teal-600 transition-all shadow-lg"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </section>
    </div>
  );
};

export default Form;
