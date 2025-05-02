import React from "react";
import "./about.css";
import image from "../../static/joanna.jpeg";
import Image from "next/image";

export default function About() {
  return (
    <div id="about">
      <div className="about-container">
        <Image src={image} alt="Joanna Kil" />
        <div className="name-container">
            <div className="name">Joanna Kil</div>
            <div className="title">Nursing Student</div>
        </div>
      </div>
    </div>
  )
}
