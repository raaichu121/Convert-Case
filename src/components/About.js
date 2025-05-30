import React from 'react';

export default function About() {
  return (
    <div className="about-page">
      <section className="about-intro">
        <h1>About Our Amazing Project</h1>
        <p>
          This project is a demonstration of modern web development using React.
          We aim to create user-friendly and efficient applications.
        </p>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          To empower developers with clear, concise, and practical examples
          of React best practices and patterns.
        </p>
      </section>

      <section className="what-we-do">
        <h2>What We Offer</h2>
        <ul>
          <li>Interactive UI components</li>
          <li>Robust state management solutions</li>
          <li>Seamless navigation experience</li>
        </ul>
      </section>
    </div>
  );
};
