import { useState } from 'react';
import DateInput from './components/Calendario';
import HoroscopeDisplay from './components/Horoscopo';
import './App.css';

const horoscopos = [
  {
    signo: "Aries",
    url: "https://resizer.glanacion.com/resizer/v2/horoscopo-de-aries-de-hoy-sabado-21-de-septiembre-IYNLCDBRTJEBLBHTLPGMQMQNC4.png?auth=60f46b3f24326a6d6282105ddd84e29442b24afe5704ed6811d0bbefce164cd2&width=768&quality=70&smart=false",
    fechainicio: "21 de Marzo",
    fechafin: "19 de Abril",
    descripcion: "Emprendedor, audaz y confiado."
  },
  {
    signo: "Tauro",
    url: "https://resizer.glanacion.com/resizer/v2/horoscopo-de-tauro-de-hoy-domingo-15-de-MWQ4R75PAVHIRCR37JEKHQ2PAU.png?auth=2c049e4b965f386faa5e2cfdb072e11520cf666eaf2d4339792134208d687aeb&width=300&height=200&quality=70&smart=true",
    fechainicio: "20 de Abril",
    fechafin: "20 de Mayo",
    descripcion: "Fuerte y confiado, lleno de determinación."
  },
  {
    signo: "Géminis",
    url: "https://www.lanacion.com.ar/resizer/v2/horoscopo-de-geminis-de-hoy-sabado-21-de-7INK7P2TFVEFXJJOZANC4HJHJU.png?auth=c7df86f3d7e741def68575107fb9babeb526d7cc5a13c400124b7db1ba74e773&width=300&height=200&quality=70&smart=true",
    fechainicio: "21 de Mayo",
    fechafin: "20 de Junio",
    descripcion: "Versátil, curioso y comunicativo."
  },
  {
    signo: "Cáncer",
    url: "https://www.lanacion.com.ar/resizer/v2/horoscopo-de-cancer-de-hoy-sabado-21-de-YZ7HCMJTLJF3BDVEPQQXBFK24E.png?auth=85749b151fb461e353613fe8cc922ea3fe8c4e8c0d1a36df4687ef661849b4f5&width=300&height=200&quality=70&smart=true",
    fechainicio: "21 de Junio",
    fechafin: "22 de Julio",
    descripcion: "Emocional, intuitivo y protector."
  },
  {
    signo: "Leo",
    url: "https://elcomercio.pe/resizer/id1yawKmV9Hp4KlRAEl1Kot6_Kk=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/UZK3SYHTFZF33IVPOE74Y4KANI.png",
    fechainicio: "23 de Julio",
    fechafin: "22 de Agosto",
    descripcion: "Creativo, apasionado y generoso."
  },
  {
    signo: "Virgo",
    url: "https://resizer.glanacion.com/resizer/v2/horoscopo-de-virgo-de-hoy-domingo-15-de-CUOMSGHOE5GEBJ4RFLHRBNXZAY.png?auth=dcbde422104d43687b00d0c0e7d8574c83c0ad2e50b688ac10a559873bbf5468&width=300&height=200&quality=70&smart=true",
    fechainicio: "23 de Agosto",
    fechafin: "22 de Septiembre",
    descripcion: "Analítico, detallista y práctico."
  },
  {
    signo: "Libra",
    url: "https://resizer.glanacion.com/resizer/v2/horoscopo-de-libra-de-hoy-domingo-15-de-ZQUM6PDKW5E5NFJ3EOOCDYDUTA.png?auth=6c14a39ef2812e9b0664677d205769ce6187c6a5cd63048b72616e2db794f297&width=300&height=200&quality=70&smart=true",
    fechainicio: "23 de Septiembre",
    fechafin: "22 de Octubre",
    descripcion: "Diplomático, sociable y equilibrado."
  },
  {
    signo: "Escorpio",
    url: "https://resizer.glanacion.com/resizer/v2/horoscopo-de-escorpio-de-hoy-lunes-2-de-MP7OWDW2J5EORM3SMVFJV3BHFI.png?auth=3436d776d339fa92e5496b4a7b2e1d6cd6fdb53ff3044e1380466d616f73005d&width=300&height=200&quality=70&smart=true",
    fechainicio: "23 de Octubre",
    fechafin: "21 de Noviembre",
    descripcion: "Intenso, apasionado y profundo."
  },
  {
    signo: "Sagitario",
    url: "https://resizer.glanacion.com/resizer/v2/horoscopo-de-sagitario-de-hoy-lunes-2-de-6B2JEVQSGRHILAJES2ILUULVX4.png?auth=a5c1c40b7e242f16af3ad4fc714e13bf89e34b37fd946af8ce9e3d7c7c33578f&width=300&height=200&quality=70&smart=true",
    fechainicio: "22 de Noviembre",
    fechafin: "21 de Diciembre",
    descripcion: "Optimista, aventurero y filosófico."
  },
  {
    signo: "Capricornio",
    url: "https://resizer.glanacion.com/resizer/v2/horoscopo-de-capricornio-de-hoy-lunes-2-de-4JFTMER3Q5FANKMD7LEQ5UCZP4.png?auth=87087884ce61e3e94e4e9cb80fd4c9285398429427a81b124e509e2e9c96c568&width=300&height=200&quality=70&smart=true",
    fechainicio: "22 de Diciembre",
    fechafin: "19 de Enero",
    descripcion: "Ambicioso, disciplinado y responsable."
  },
  {
    signo: "Acuario",
    url: "https://www.lanacion.com.ar/resizer/v2/horoscopo-de-acuario-de-hoy-sabado-21-de-IFTEWWBZQVHUNOH7XQQYGB4MXY.png?auth=41e37bbd5a96f52152eed8df817dfa039a9a609fb274d5c94b99129fd130e606&width=300&height=200&quality=70&smart=true",
    fechainicio: "20 de Enero",
    fechafin: "18 de Febrero",
    descripcion: "Innovador, humanitario y original."
  },
  {
    signo: "Piscis",
    url: "https://www.lanacion.com.ar/resizer/v2/horoscopo-de-piscis-de-hoy-sabado-21-de-O6JX6NBIM5BMFHJQCU4U36COMQ.png?auth=363ad051e62e841c0b1307f29d6cf78d738bac6f5b5c4b712e22a3d7bb83ba51&width=300&height=200&quality=70&smart=true",
    fechainicio: "19 de Febrero",
    fechafin: "20 de Marzo",
    descripcion: "Soñador, compasivo y artístico."
  }
];


const App = () => {
  const [horoscope, setHoroscope] = useState(null);

  const handleDateSubmit = (dateOfBirth) => {
    const birthDate = new Date(dateOfBirth);
    const month = birthDate.getUTCMonth() + 1; 
    const day = birthDate.getUTCDate(); 
  
    const zodiacDates = [
      { signo: "Aries", start: new Date(birthDate.getFullYear(), 2, 21), end: new Date(birthDate.getFullYear(), 3, 19) },
      { signo: "Tauro", start: new Date(birthDate.getFullYear(), 3, 20), end: new Date(birthDate.getFullYear(), 4, 20) },
      { signo: "Géminis", start: new Date(birthDate.getFullYear(), 4, 21), end: new Date(birthDate.getFullYear(), 5, 20) },
      { signo: "Cáncer", start: new Date(birthDate.getFullYear(), 5, 21), end: new Date(birthDate.getFullYear(), 6, 22) },
      { signo: "Leo", start: new Date(birthDate.getFullYear(), 6, 23), end: new Date(birthDate.getFullYear(), 7, 22) },
      { signo: "Virgo", start: new Date(birthDate.getFullYear(), 7, 23), end: new Date(birthDate.getFullYear(), 8, 22) },
      { signo: "Libra", start: new Date(birthDate.getFullYear(), 8, 23), end: new Date(birthDate.getFullYear(), 9, 22) },
      { signo: "Escorpio", start: new Date(birthDate.getFullYear(), 9, 23), end: new Date(birthDate.getFullYear(), 10, 21) },
      { signo: "Sagitario", start: new Date(birthDate.getFullYear(), 10, 22), end: new Date(birthDate.getFullYear(), 11, 21) },
      { signo: "Capricornio", start: new Date(birthDate.getFullYear(), 11, 22), end: new Date(birthDate.getFullYear(), 0, 19) },
      { signo: "Acuario", start: new Date(birthDate.getFullYear(), 0, 20), end: new Date(birthDate.getFullYear(), 1, 18) },
      { signo: "Piscis", start: new Date(birthDate.getFullYear(), 1, 19), end: new Date(birthDate.getFullYear(), 2, 20) },
    ];
  
    const foundZodiac = zodiacDates.find(zodiac => 
      (birthDate >= zodiac.start && birthDate <= zodiac.end) ||
      (zodiac.signo === "Capricornio" && (birthDate >= zodiac.start || birthDate <= zodiac.end))
    );
  
    if (foundZodiac) {
      const signoElegido = horoscopos.find(h => h.signo === foundZodiac.signo);
      setHoroscope(signoElegido);
    } else {
      setHoroscope(null);
    }
  };
  

  return (
    <section className="section" style={{ width: '100%' }}>
      <div className="container">
        <h1 className="title is-2 has-text-centered">Bienvenido al Horóscopo React</h1>
        <div className="columns is-centered">
          <div className="column is-half">
            <DateInput onSubmit={handleDateSubmit} />
          </div>
          <div className="column is-half">
            <HoroscopeDisplay horoscope={horoscope} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;

