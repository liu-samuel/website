import React from "react";
import Image from "next/image";
import bloomberg from "../../static/bloomberg.jpeg";
import "./education.css";
export default function Education() {
  return (
    <div id="education">
      <h1>Education</h1>  
      <div className="education-item">
        <h2>University of Toronto</h2>
        <h4>Bachelor of Science in Nursing</h4>
        <Image src={bloomberg} alt="Bloomberg School of Public Health" />
      </div>
    </div>
  )
}
