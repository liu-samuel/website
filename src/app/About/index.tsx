import React from "react";
import "./about.css";
import image from "../../static/joanna.jpeg";
import Image from "next/image";

export default function About() {
  return (
    <div className="about-container">
        <Image src={image} alt="Joanna Kil" />
        <h2>Hi! My name is Joanna Kil and I'm a nursing student at the University of Toronto</h2>
    </div>
  )
}
