import React from 'react';
import Toggle from './Toggle';

// Media
import bigStar from '../assets/big-star.svg';
import smallStar from '../assets/small-star.svg';
import bigStarYellow from '../assets/big-star-yellow.svg';
import smallStarYellow from '../assets/small-star-yellow.svg';

function Landing() {
  return (
    <div className="landing-section">
      <Toggle />
      <div className="landing-section__text-div">
          <p className="landing-section__intro-p"><span className="landing-section__wave">👋🏼</span> Hey, I’m Ruby!</p>
          <p className="landing-section__middle-p">I’m a Web Developer with a <span className="landing-section__feature-word">passion</span> for creative problem-solving.</p>
          <p className="landing-section__p">I'm currently studying <a href="https://www.yoobee.ac.nz/courses/design/diploma-in-web-and-ux-design/" target="_blank" className="landing-section__red-p">@Yoobee</a>, and building my programmer tool-belt & computer science fundamentals along the way with Udemy courses, Codecademy, and good old fashioned textbooks!</p>
      </div>

      <div className="landing-section__top-right-star-div">
        <img className="landing-section__big-star-tr landing-section__twinkle" src={bigStar} alt="star icon" />
        <img className="landing-section__small-star-one-tr landing-section__twinkle" src={smallStar} alt="star icon" />
        <img className="landing-section__small-star-two-tr landing-section__twinkle" src={smallStar} alt="star icon" />
      </div>

      <div className="landing-section__bottom-left-star-div">
        <img className="landing-section__big-star-bl landing-section__twinkle" src={bigStar} alt="star icon" />
        <img className="landing-section__small-star-one-bl landing-section__twinkle" src={smallStar} alt="star icon" />
        <img className="landing-section__small-star-two-bl landing-section__twinkle" src={smallStar} alt="star icon" />
      </div>

      <div className="landing-section__bottom-left-star-div-yellow">
        <img className="landing-section__big-star-bl landing-section__twinkle" src={bigStarYellow} alt="star icon" />
        <img className="landing-section__small-star-one-bl landing-section__twinkle" src={smallStarYellow} alt="star icon" />
        <img className="landing-section__small-star-two-bl landing-section__twinkle" src={smallStarYellow} alt="star icon" />
      </div>

      <div className="landing-section__top-right-star-div-yellow">
        <img className="landing-section__big-star-tr landing-section__twinkle" src={bigStarYellow} alt="star icon" />
        <img className="landing-section__small-star-one-tr landing-section__twinkle" src={smallStarYellow} alt="star icon" />
        <img className="landing-section__small-star-two-tr landing-section__twinkle" src={smallStarYellow} alt="star icon" />
      </div>
    </div>
  )
}

export default Landing;
