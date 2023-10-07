import React from 'react';
import './skill.css';
import UIdesign from '../../assets/ui-design.png';
import Webdesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skill = () => {
  return (
    <section id="skills">
      <span className="skillsTitle">WHAT I DO?</span>
      <div className="skillBar">
        <div className="skillBars">
          <img src={UIdesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Graphic Design</h2>
            <p>
              A graphic designer turns imagination into visual communication
            </p>
          </div>
        </div>
        <div className="skillBars">
          <img src={AppDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>UI is how it looks, and UX is how it feels</p>
          </div>
        </div>
        <div className="skillBars">
          <img src={Webdesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Developer</h2>
            <p>A web developer brings ideas to life in the digital world.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
