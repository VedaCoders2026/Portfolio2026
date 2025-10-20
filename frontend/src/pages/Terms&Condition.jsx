import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-6 text-center">
          Terms and Conditions – Veda Coders
        </h1>

        {/* Section Component */}
        {[
          {
            title: "1. Introduction",
            content:
              "Welcome to Veda Coders, a Digital development company. These Terms and Conditions govern your use of our services and website. By engaging with us, you agree to be bound by these terms.",
          },
          {
            title: "2. Services Offered",
            content:
              "We provide Digital development services including, but not limited to:",
            list: [
              "Website design and development",
              "Mobile application development",
              "E-commerce development",
              "Software development",
              "Maintenance and support",
            ],
            note:
              "Specific deliverables and timelines will be outlined in a formal project agreement or contract.",
          },
          {
            title: "3. Client Responsibilities",
            list: [
              "Provide all content, images, and branding materials in a timely manner.",
              "Ensure that all materials provided do not infringe third-party copyrights or trademarks.",
              "Respond to feedback and approvals promptly.",
              "Hosting or domain preferences.",
            ],
          },
          {
            title: "4. Payment Terms",
            list: [
              "Payment terms will be dictated in a Quotation Draft that will be shown to the client during initial contract signing.",
              "Late payments may result in project delays.",
            ],
          },
          {
            title: "5. Intellectual Property",
            list: [
              "Upon full payment, clients receive full ownership of the final website or application, unless otherwise agreed.",
              "We reserve the right to showcase completed projects in our portfolio, unless a written NDA prohibits this.",
            ],
          },
          {
            title: "6. Revisions & Changes",
            list: [
              "Clients are entitled to revisions during the development phase, however, add-on pages will incur further charges.",
              "Revisions after the project completion will be billed at our standard rate as discussed in the Quotation Draft.",
            ],
          },
          {
            title: "7. Limitation of Liability",
            list: [
              "Any indirect, incidental, or consequential damages.",
              "Loss of data, income, or business due to website, mobile app, or software downtime or performance issues.",
              "Security breaches caused by third-party plugins, hosting, APIs, app stores, integrations, or user negligence.",
              "Issues arising from client-provided content, materials, instructions, or delays that impact project timelines or outcomes.",
              "Any modifications, misuse, unauthorised access, or third-party alterations made to the delivered website, mobile app, or software after final delivery or handover.",
            ],
          },
          {
            title: "8. Termination",
            content:
              "Either party may terminate the agreement within the first 14 days of the development phase. In such cases, the client will be invoiced for all work completed to date.",
          },
          {
            title: "9. Contact",
            content:
              "If you have questions about these Terms, contact us at:",
            contact: {
              email: "veda.codes2025@gmail.com",
              phone: "+91 9082381496 / +91 9920551199",
            },
          },
        ].map((section, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-400 mb-3">
              {section.title}
            </h2>
            {section.content && <p className="text-gray-300 mb-2">{section.content}</p>}
            {section.list && (
              <ul className="list-disc list-inside space-y-1 text-gray-300 mb-2">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.note && <p className="text-gray-400">{section.note}</p>}
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

export default TermsAndConditions;
