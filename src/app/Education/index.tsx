import React from "react";
import Image from "next/image";
import bloomberg from "../../static/bloomberg.jpeg";

export default function Education() {
  return (
  <div id="education">
    <h1>Education</h1>
    <div className="education-container">
      <div className="education-item">
        <h2>University of Toronto</h2>
        <p>Bachelor of Science in Nursing</p>
        <Image src={bloomberg} alt="Bloomberg School of Public Health" />
      </div>
    </div>
  </div>
  )
}
