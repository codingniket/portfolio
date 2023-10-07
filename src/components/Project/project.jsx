import React from 'react';
import './project.css';
import p1 from '../../assets/portfolio-1.png';
import p2 from '../../assets/portfolio-2.png';
import p3 from '../../assets/portfolio-3.png';
import p4 from '../../assets/portfolio-4.png';
import p5 from '../../assets/portfolio-5.png';
import p6 from '../../assets/portfolio-6.png';

const Project = () => {
  return (
    <section id="project">
      <h1 className="workTitle">Projects</h1>
      <span className="workDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to help businesses achieve their goals and create a strong
        online presence."
      </span>
      <div className="workImgs">
        <a href="https://sih-project-three.vercel.app/">
          <img src={p1} alt="1" className="workImg" />
        </a>
        <a href="https://weather-app-mu-flame.vercel.app/">
          <img src={p2} alt="1" className="workImg" />
        </a>
        <a href="https://chakra-project-lime.vercel.app/">
          <img src={p3} alt="1" className="workImg" />
        </a>
        <a href="https://bang-bang-show.vercel.app/">
          <img src={p4} alt="1" className="workImg" />
        </a>
        <a href="https://pokadex.vercel.app/">
          <img src={p5} alt="1" className="workImg" />
        </a>
        <a href="https://open-ai-mu-rose.vercel.app/">
          <img src={p6} alt="1" className="workImg" />
        </a>
      </div>
    </section>
  );
};

export default Project;
