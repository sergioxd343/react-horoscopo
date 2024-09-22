const HoroscopeDisplay = ({ horoscope }) => {
    if (!horoscope) {
      return <p className="has-text-grey has-text-centered">No hay datos de horóscopo disponibles</p>;
    }
  
    return (
      <div className="box has-text-centered">
        <h2 className="title is-3">{horoscope.signo}</h2>
        <figure className="image is-128x128 is-inline-block">
          <img src={horoscope.url} alt={`${horoscope.signo} logo`} />
        </figure>
        <p className="is-size-5">Fecha: Del {horoscope.fechainicio} al {horoscope.fechafin}</p>
        <p className="is-size-6 has-text-grey">{horoscope.descripcion}</p>
      </div>
    );
  };
  
  export default HoroscopeDisplay;
  