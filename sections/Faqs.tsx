import React from "react";

const faqs = [
  {
    question: "How is Layers different from other design tools?",
    answer:
      "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: "How does Layers handle collaboration?",
    answer:
      "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
  },
];

const Faqs = () => {
  return (
    <section className="py-24 px-10 md:px-0 mx-auto w-full">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="inline-flex border border-indigo-500 gap-2 text-indigo-500 px-3 py-1 rounded-full uppercase items-center text-sm ">
            {" "}
            &#10038; Features
          </div>
        </div>
        <h2 className="text-4xl md:text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
          Frequently Asked <span className="text-indigo-500">Questions</span>
        </h2>
        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {faqs.map((faq , faqIndex) => (
            <div
              key={faq.question}
              className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
            >
              <div>
                <h3 className="font-medium">{faq.question}</h3>
              </div>
              <div className="mt-6">
                <p className="text-white/50">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
