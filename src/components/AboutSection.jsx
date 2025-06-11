import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-background text-text py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
          👋🏽 A Little About Me
        </h2>

        <p className="text-lg leading-relaxed font-light">
          Hello! My name is <span className="font-bold text-primary">Edgar Patino</span>, a
          first-gen Latino from NYC, and I recently graduated with honors from{" "}
          <span className="font-bold text-accent">USC 🎓✌🏽</span>. I started off studying{" "}
          <span className="font-bold text-primary">Business Administration</span>, but my love
          for the <span className="font-bold text-primary">problem-solving</span>{" "}
          aspect of coding led me to add <span className="font-bold text-primary">Computer Science</span>{" "}
          to my degree. This blend of skills helped me land my first internship as a{" "}
          <span className="font-bold text-primary">full-stack engineer</span> last summer! 💻🔥
        </p>

        {/* Divider */}
        <hr className="border-surface-light my-6" />

        {/* Outside of Code */}
        <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center justify-center gap-2">
          ☀️ Outside of Code
        </h3>
        <p className="text-lg leading-relaxed font-light">
          When I'm not coding, you can catch me hooping with friends,
          binge-watching TV shows, or hunting down must-try restaurants from
          TikTok. I also enjoy watching professional wrestling, and I'm always up for a conversation about{" "}
          basketball 🏀, fitness 💪🏽, or the best hidden gems in NYC & LA ✈️.
          I value spending time outdoors, whether it's going for long drives, hiking, or walking around the city.
          Music is a big part of my life too, and I love listening to both English and Spanish music of all generes 🎶.
        </p>

        {/* Divider */}
        <hr className="border-surface-light my-6" />

        {/* Goals & Future */}
        <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center justify-center gap-2">
          🌍 Goals & Future
        </h3>
        <p className="text-lg leading-relaxed font-light">
          My goal is to continue growing as a{" "}
          <span className="font-semibold text-primary">
            full-stack engineer
          </span>, working on scalable web applications that bridge the gap between{" "}
          <span className="font-semibold text-primary">frontend and backend</span>. 
          I enjoy architecting solutions that bring ideas to life, and I'm currently expanding my skillset with technologies such as{" "}
          <span className="font-semibold text-primary"> Google Cloud</span> and 
          <span className="font-semibold text-primary"> AWS </span>to deepen my 
          understanding of <span className="font-semibold text-primary">cloud infrastructure</span> and deployment strategies.
          <br /><br />
          Eventually, I'd love to transition into{" "}
          <span className="font-bold text-primary">a managerial role</span>, possibly pursuing an{" "}
          <span className="font-bold text-primary">MBA</span> while working. Long-term, I want to{" "}
          <span className="font-bold text-primary">give back</span>—whether that's through mentoring,
          founding an organization, or even becoming a professor to help{" "}
          <span className="font-bold text-primary">low-income, first-gen </span> students like myself break into tech.
        </p>

        {/* Divider */}
        <hr className="border-surface-light my-6" />

        {/* Call to Action */}
        <p className="text-lg mt-6">
          Let's connect—whether it's about tech, basketball, or the best food spots!{" "}
          <span className="font-bold text-primary">I'd love to chat.</span> 🗣️
        </p>
        <a
          href="mailto:your-email@example.com"
          className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-accent transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default AboutSection;