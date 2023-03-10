import './More.css';
const More =({languages, habilities}) => {
    return (
      <div className="More Card">
      <p>🇬🇧{languages.language}. {languages.wrlevel} </p>
      {/* <p>{languages.wrlevel} </p> 
      <p>{languages.splevel}</p> */}
      {habilities.map ((item) => {
        return (
          <div key={JSON.stringify(item)}>
          <p className="name">{item}</p>
          </div>
        )
      })}
      </div>
    );
  }


  
  
  export default More;
  //idiomas, skills y, por ejemplo, voluntariados.

  
  /*
  Al componente <More/> le estamos pasando por prop languages, habilities y volunteer porque 
  todo estará incluido en el mismo componente. Todo es cuestión de organizar nuestra información 
  y repartirla de la manera más conveniente y clara.
  */