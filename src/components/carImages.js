import AudiLogo2016 from "./carlogos/AudiLogo2016.svg";
import Volvologo from "./carlogos/Volvo_logo.svg";
import VWlogo from "./carlogos/Volkswagen_logo_2019.svg";
import Toyotalogo from "./carlogos/ToyotaLogoRedVer.svg";
import Subarulogo from "./carlogos/Subaru_Logo_Abstraktion.svg";
import Skodalogo from "./carlogos/skoda-6.svg";
import Renaultlogo from "./carlogos/Renault_1990.svg";
import Peugeotlogo from "./carlogos/Peugeot_Logo_2.svg";
import Opellogo from "./carlogos/Opel-Logo_2017.svg";
import Nissanlogo from "./carlogos/Nissan-logo.svg";
import Mercedeslogo from "./carlogos/Mercedes-Benz_free_logo.svg";
import Fordlogo from "./carlogos/Ford_logo_flat.svg";
import Fiatlogo from "./carlogos/Fiat_Automobiles_logo.svg";
import Chryslerlogo from "./carlogos/Chrysler_Group_logo.svg";
import BMWlogo from "./carlogos/BMW.svg";
import Hondalogo from "./carlogos/Hondalogo.svg";


const carImages = {
  
  Audi: <img className="AudiImg"  src={AudiLogo2016} alt="Audi logo"/>,
  
  Honda: <img className="HondaImg" src={Hondalogo}
          alt="Honda logo" />,

  Volvo: <img className="VolvoImg"  src={Volvologo} alt="Volvo logo"/>,
          
  Volkswagen: <img className="VWImg"  src={VWlogo} alt="VW logo"/>,

  Toyota: <img className="ToyotaImg"  src={Toyotalogo} alt="Toyota logo"/>,

  Subaru: <img className="SubaruImg"  src={Subarulogo} alt="Subaru logo"/>,

  Skoda: <img className="SkodaImg"  src={Skodalogo} alt="Skoda logo"/>,

  Renault: <img className="RenaultImg"  src={Renaultlogo} alt="Renault logo"/>,

  Peugeot: <img className="PeugeotImg"  src={Peugeotlogo} alt="Peugeot logo"/>,

  Opel: <img className="OpelImg"  src={Opellogo} alt="Opel logo"/>,

  Nissan: <img className="NissanImg"  src={Nissanlogo} alt="Nissan logo"/>,

  Mercedes: <img className="MercedesImg"  src={Mercedeslogo} alt="Mercedes logo"/>,

  Fiat: <img className="FiatImg"  src={Fiatlogo} alt="Fiat logo"/>,

  Chrysler: <img className="ChryslerImg"  src={Chryslerlogo} alt="Chrysler logo"/>,

  BMW: <img className="BMWImg"  src={BMWlogo} alt="BMW logo"/>,

  Ford: <img className="FordImg"  src={Fordlogo} alt="Ford logo"/>,

 
};



export default carImages;