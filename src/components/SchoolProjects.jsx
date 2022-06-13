import React from 'react';

// Media
import earthenwaresSquare from "../assets/earthenwares-square.png";
import peruseSquare from "../assets/peruse-square.png";
import stayNzSquare from "../assets/stay-nz-square.png";
import theTaxLadySquare from "../assets/theTaxLady-square.png";

function SchoolProjects() {

  const projectInfoHover = (id) => {
    console.log('hover in');
    // document.getElementById(id).classList.remove("hide");
  } 

  const hideProjectInfoHover = (id) => {
    console.log('hover out');
    // document.getElementById(id).classList.add("hide");
  } 

  return (
    <div className="school-projects">
      <div className="school-projects__text-div">
        <h2 className="school-projects__heading">School projects</h2>
        <p className="school-projects__p">These projects are a benchmark for how far I’ve come in my personal learning. The syllabus didn't include React or Redux, so these projects work with vanilla JavaScript & jQuery.</p>
      </div>

      <div className="school-projects__projects-container">

        <div className="school-projects__project-div school-projects__project-div-p-b" onMouseOver={() => projectInfoHover("earthenwaresInfo")} onMouseOut={() => hideProjectInfoHover("earthenwaresInfo")}>
          <div className="school-projects__hover-info hide" id="earthenwaresInfo">
              <p className="school-projects__p">Student project - UX and coding (HTML, CSS, JavaScript).</p>
              <button className="school-projects__btn">Check it out</button>
          </div>

          <img className="school-projects__img" src={earthenwaresSquare} alt="iPhone mockup of Stay NZ project" />
        </div>

        <div className="school-projects__project-div school-projects__project-div-o-p" onMouseOver={() => projectInfoHover("stayNzInfo")} onMouseOut={() => hideProjectInfoHover("stayNzInfo")}>
          <div className="school-projects__hover-info hide" id="stayNzInfo">
              <p className="school-projects__p">Stay nz info</p>
              <button className="school-projects__btn">Check it out</button>
          </div>

          <img className="school-projects__img" src={stayNzSquare} alt="iPhone mockup of Stay NZ website" />
        </div>

        <div className="school-projects__project-div school-projects__project-div-b-g">
          <img className="school-projects__img" src={peruseSquare} alt="iPhone mockup of Stay NZ project" />

          <div className="school-projects__hover-info hide">
              <p className="school-projects__p"></p>
              <button className="school-projects__btn">Check it out</button>
          </div>
        </div>

        <a href="https://ruby.doyle.yoobeestudent.net/thetaxlady/" target="_blank" className="school-projects__project-div school-projects__project-div-b-g">
          <img className="school-projects__img" src={theTaxLadySquare} alt="website mockup of The Tax Lady website" />

          <div className="school-projects__hover-info hide">
              <p className="school-projects__p"></p>
              <button className="school-projects__btn">Check it out</button>
          </div>
        </a>

      </div>
    </div>
  )
}

export default SchoolProjects;
