import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_unyj8gb",
      "template_2nu1zdo",
      form.current,
      "TNdVrbPCAMfY9Qnc2"
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      console.error("Email error:", error);
      alert("There was an issue sending your message.");
    });
  };

  return (
    <section className="bg-background text-text py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-surface rounded-lg shadow-lg p-10">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">Contact me</h2>
        <p className="text-center font-semibold mb-10 text-text-muted">I'll get back to you very soon!</p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full p-4 rounded-lg bg-surface-light text-text border border-surface-light focus:border-primary focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-4 rounded-lg bg-surface-light text-text border border-surface-light focus:border-primary focus:ring-2 focus:ring-primary"
            />
          </div>
          <input
            type="text"
            name="title"
            placeholder="Subject"
            required
            className="w-full p-4 rounded-lg bg-surface-light text-text border border-surface-light focus:border-primary focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            required
            className="w-full p-4 rounded-lg bg-surface-light text-text border border-surface-light focus:border-primary focus:ring-2 focus:ring-primary"
          ></textarea>
          <button
            type="submit"
            className="bg-primary hover:bg-accent text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;