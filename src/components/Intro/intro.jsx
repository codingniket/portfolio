import React from 'react';
import './intro.css';
import Hero from '../../assets/image.jpg';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello 👋</span>
        <span className="introText">
          I'm <span className="introName">Niket Bachhawat</span>
          <br />
          Website Developer
        </span>
        <p className="introPara">
          Passionate web developer crafting digital experiences <br />
          through elegant code and user-centric design.
        </p>

        <a className="taga" href="../../assets/CV.pdf" download>
          <button className="btn">Resume</button>
        </a>
      </div>
      <div>
        <img src={Hero} alt="me" className="hero-bg" />
      </div>
    </section>
  );
};

export default Intro;
