import './About.css';

const About =({ hero }) => {
    return (
      <div className="About card">
      {hero.aboutMe.map((item) =>{
        return (
          <div key={JSON.stringify(item)}>
          <p className='name'> {item.info}</p>
          </div>
        );
      })}
    </div>
    );
  }
  
  export default About;
  //más datos sobre nosotros.

  /*
  *Tal y como aparece en el código, le estamos pasando por props la información que 
  necesitamos a cada componente, por ejemplo: a nuestros componentes <Hero/> y <About/> 
  le estamos pasando la información de hero a ambos ya que contiene el nombre, 
  los datos personales y las frases almacenadas en aboutMe.
  */
  