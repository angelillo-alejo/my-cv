import React from "react";
import "./Hero.css";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt="" />
      <div className="card">
      <h2>
        {hero.name} {hero.adress}
      </h2>
        <p>🗺️{hero.city} </p>
        <p>🗓️{hero.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + hero.email}>
          tony@starkindustries.com
          </a>
        </p>
        <p>📱 {hero.phone}</p>
        <p>💾<a href={hero.gitHub}>
            GitHub
          </a></p>
      </div>
    </div>
  );
};

export default Hero;
  
  /*
  *Tal y como aparece en el código, le estamos pasando por props la información que 
  necesitamos a cada componente, por ejemplo: a nuestros componentes <Hero/> y <About/> 
  le estamos pasando la información de hero a ambos ya que contiene el nombre, 
  los datos personales y las frases almacenadas en aboutMe.
  */