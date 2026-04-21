// src/components/About.jsx
import React from 'react';

function About() {
  const team = [
    { name: 'Alex Smith', role: 'Lead Developer' },
    { name: 'Sam Jones', role: 'UI/UX Designer' }
  ];

  return (
    <div className="about-container">
      <h1>About Our Company</h1>
      <p>We are dedicated to building high-quality web experiences using React.</p>
      
      <section className="mission">
        <h2>Our Mission</h2>
        <p>To innovate and simplify complex problems through technology.</p>
      </section>

      <section className="team">
        <h2>Meet the Team</h2>
        <ul>
          {team.map((member, index) => (
            <li key={index}>
              <strong>{member.name}</strong> - {member.role}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default About;
