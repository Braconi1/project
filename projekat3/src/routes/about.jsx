import React from 'react';
import '../styles/about.css';
import revlonLogo from './revlon-logo.png'; // Importing the image

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Company</h1>
      <p>Our company was founded in 2024 with the mission to provide the best products and services to our customers.</p>
      <p>Since then, we have grown to become a leader in the industry, known for our commitment to quality and customer satisfaction.</p>
      <p>Revlon is a newly founded company that specializes in perfumes.</p>
      <p>Our mission is to create captivating fragrances that resonate with individuals' unique personalities and preferences.</p>
      <p>At Revlon, we believe that scent plays a powerful role in expressing one's identity and enhancing everyday experiences.</p>
      <img src={revlonLogo} alt="Our Company" className="company-photo" /> {/* Using the imported image */}
    </div>
  );
}

export default About;
