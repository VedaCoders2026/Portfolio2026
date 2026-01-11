import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-4 text-center">
          Privacy Policy – SixthSyntax
        </h1>
        <p className="text-gray-300 mb-8">
          Effective Date: [Insert Date]
        </p>
        <p className="text-gray-300 mb-6">
          SixthSyntax respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data.
        </p>

        {[
          {
            title: "1. Information We Collect",
            list: [
              "Name, email, phone number",
              "Company name",
              "Billing and payment details",
              "Project-related communications",
              "Website analytics data (via cookies)",
            ],
          },
          {
            title: "2. How We Use Your Information",
            list: [
              "Provide web development services",
              "Communicate project updates",
              "Process payments and invoices",
              "Improve our services and website",
              "Send occasional marketing updates (with your consent)",
            ],
          },
          {
            title: "3. Sharing Your Information",
            content:
              "We do not sell or rent your personal information. We may share your data with:",
            list: [
              "Service providers (e.g., hosting providers, payment processors)",
              "Legal authorities when required by law",
            ],
          },
          {
            title: "4. Data Security",
            content:
              "We implement appropriate security measures to protect your data, including encryption, secure servers, and access controls.",
          },
          {
            title: "5. Your Rights",
            content:
              "Depending on your jurisdiction (e.g., GDPR, CCPA), you may have the right to:",
            list: [
              "Access your data",
              "Correct or delete your data",
              "Withdraw consent for data processing",
              "File a complaint with a data protection authority",
            ],
          },
          {
            title: "6. Cookies",
            content:
              "We use cookies to enhance your experience and analyze website traffic. You can manage cookie preferences in your browser settings.",
          },
          {
            title: "7. Third-Party Links",
            content:
              "Our website may link to other sites. We are not responsible for their privacy practices or content.",
          },
          {
            title: "8. Changes to This Policy",
            content:
              "We may update this Privacy Policy periodically. Changes will be posted on this page with a new effective date.",
          },
          {
            title: "9. Contact Us",
            content:
              "If you have any questions about this Privacy Policy, please contact us at:",
            contact: {
              email: "sixthsyntax@gmail.com",
              phone: "+91 9082381496 / +91 9920551199",
            },
          },
        ].map((section, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-400 mb-3">{section.title}</h2>
            {section.content && <p className="text-gray-300 mb-2">{section.content}</p>}
            {section.list && (
              <ul className="list-disc list-inside space-y-1 text-gray-300 mb-2">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.contact && (
              <div className="text-gray-300 mt-2">
                <p>
                  📧 Email:{" "}
                  <a
                    href={`mailto:${section.contact.email}`}
                    className="text-teal-400 hover:underline"
                  >
                    {section.contact.email}
                  </a>
                </p>
                <p>📞 Phone: {section.contact.phone}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
