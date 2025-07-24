import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add email integration here or use Netlify/Formspree/etc.
    alert("Thanks for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 transition-colors duration-300 bg-[rgba(var(--projects-bg),1)]"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-bold text-[color:rgba(var(--text))] leading-tight drop-shadow-sm mb-6">
          Let’s Connect
        </h2>
        <p className="text-xl sm:text-2xl text-[color:rgba(var(--muted-text))] mb-10">
          Got a question, idea, or just want to say hi?
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[rgba(var(--card),0.8)] text-[rgba(var(--text))] placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgba(var(--accent))] transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[rgba(var(--card),0.8)] text-[rgba(var(--text))] placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgba(var(--accent))] transition-all"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[rgba(var(--card),0.8)] text-[rgba(var(--text))] placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgba(var(--accent))] transition-all"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-[rgba(var(--cta),1)] text-[rgba(var(--cta-text))] font-semibold hover:bg-[rgba(var(--cta-active),1)] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
