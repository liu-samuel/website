import React from "react";
import "./experience.css";
import Image from "next/image";

import sunnybrook from "../../static/sunnybrook.png";
import sickKids from "../../static/sick_kids.svg";
import uhn from "../../static/uhn.png";
import camh from "../../static/camh.png";
import hennick from "../../static/hennick.png";

export default function Experience() {
  return (
    <h1 id="experience-container">
      <div className="experiences">
        <h1>Experience</h1>
        <div className="sunnybrook">
          <Image src={sunnybrook} alt="Sunnybrook" />
          <div className="sunnybrook-name">Sunnybrook Hospital</div>
          <div className="sunnybook-description"></div>
        </div>
        <div className="sick-kids">
          <Image src={sickKids} alt="Sick Kids" />
          <div className="sick-kids-name">Sick Kids Hospital</div>
          <div className="sick-kids-description"></div>
        </div>
        <div className="uhn">
          <Image src={uhn} alt="United Health Network" />
          <div className="sunnybrook-name">University Health Network Hospital</div>
          <div className="sunnybook-description"></div>
        </div>
        <div className="camh">
          <Image src={camh} alt="Center for Addiction and Mental Health" />
          <div className="camh-name">CAMH</div>
          <div className="camh-description"></div>
        </div>
        <div className="hennick">
          <Image src={hennick} alt="hennick" />
          <div className="hennick-name">Hennick Bridgepoint Hospital</div>
          <div className="hennick-description"></div>
        </div>
      </div>
    </h1>
  )
}
