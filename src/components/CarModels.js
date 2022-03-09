import { useState, useEffect } from "react";


 export function TheNissan() {           // This function contains all car pictures pulled from the API seperately
  const [cars, setCars] = useState(null);
    
  useEffect(() => {
    
    fetch("https://hud-car-api.herokuapp.com/cars")
        .then(response => response.json())
        .then(data => setCars(data))
        .then(cars => JSON.stringify(cars))
        
}, []);
if (!cars) {
  return <strong>Loading...</strong>;
}
const carImgys = cars?.map(car => car);
const getNissan = carImgys?.map(car => car.image)
const Nissan = getNissan[2]
const arraynsn = Array(Nissan);


  
    return (
      <>
      <div key={Nissan}><img src={arraynsn} alt="Nissan" className="imageNissan"/></div>
      <div className="carInfoText">Nissan Motor Co., Ltd. is a Japanese multinational automobile manufacturer headquartered in Nishi-ku, Yokohama, Japan.
       The company sells its vehicles under the Nissan, Infiniti, and Datsun brands, with in-house performance tuning products (including cars) labelled Nismo.
        The company traces back to the beginnings of the 20th century, with the Nissan zaibatsu, now called Nissan Group.</div>
      </>
    )
   }
  
   export function TheAudi() {
    const [cars, setCars] = useState(null);
      
    useEffect(() => {
      
      fetch("https://hud-car-api.herokuapp.com/cars")
          .then(response => response.json())
          .then(data => setCars(data))
          .then(cars => JSON.stringify(cars))
          
  }, []);
  
  
  if (!cars) {
    return <strong>Loading...</strong>;
  }
    const carImgys = cars?.map(car => car);
    const getAudi = carImgys?.map(car => car.image)
    const Audi = getAudi[0]
    const arrayify = Array(Audi);
    
    
      return (
        <>
        <div key={Audi}><img src={arrayify} alt="Audi" className="imageParser"/></div>
        <div className="carInfoText">Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany.
         As a subsidiary of its parent company, the Volkswagen Group, Audi produces vehicles in nine production facilities worldwide. </div>
        </>
      )
     }
 

     export function TheBMW() {
      const [cars, setCars] = useState(null);
        
      useEffect(() => {
        
        fetch("https://hud-car-api.herokuapp.com/cars")
            .then(response => response.json())
            .then(data => setCars(data))
            .then(cars => JSON.stringify(cars))
            
    }, []);
    
    
    if (!cars) {
      return <strong>Loading...</strong>;
    }
      const carImgys = cars?.map(car => car);
      const getBMW = carImgys?.map(car => car.image)
      const BMW = getBMW[1]
      const arraybmw = Array(BMW);
      
      
        return (
          <>
          <div key={BMW}><img src={arraybmw} alt="BMW" className="imageBMW"/></div>
          <div className="carInfoText">Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany. 
          The corporation was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.</div>
          </>
        )
       }
  
       export function TheOpel() {
        const [cars, setCars] = useState(null);
          
        useEffect(() => {
          
          fetch("https://hud-car-api.herokuapp.com/cars")
              .then(response => response.json())
              .then(data => setCars(data))
              .then(cars => JSON.stringify(cars))
              
      }, []);
      
      
      if (!cars) {
        return <strong>Loading...</strong>;
      }
        const carImgys = cars?.map(car => car);
        const getOpel = carImgys?.map(car => car.image)
        const Opel = getOpel[3]
        const arrayopl = Array(Opel);
        
        
          return (
            <>
            <div key={Opel}><img src={arrayopl} alt="Opel" className="imageParser"/></div>
            <div className="carInfoText">Opel Automobile GmbH, usually shortened to Opel, is a German automobile manufacturer which has been a subsidiary of Stellantis since 16 January 2021.
             It was owned by the American automaker General Motors from 1929 until 2017 and the PSA Group, a predecessor of Stellantis, from 2017 until 2021.
              Opel vehicles are sold in Britain under the Vauxhall brand.
               Some Opel vehicles were badge-engineered in Australia under the Holden brand until 2020 and in North America and China under the Buick, Saturn, and Cadillac brands.</div>
            </>
          )
         }

         export function TheChrysler() {
          const [cars, setCars] = useState(null);
            
          useEffect(() => {
            
            fetch("https://hud-car-api.herokuapp.com/cars")
                .then(response => response.json())
                .then(data => setCars(data))
                .then(cars => JSON.stringify(cars))
                
        }, []);
        
        
        if (!cars) {
          return <strong>Loading...</strong>;
        }
          const carImgys = cars?.map(car => car);
          const getChrysler = carImgys?.map(car => car.image)
          const Chrysler = getChrysler[4]
          const arraychrs = Array(Chrysler);
          
          
            return (
              <>
              <div key={Chrysler}><img src={arraychrs} alt="Chrysler" className="imageChrysler"/></div>
              <div className="carInfoText">Chrysler is one of the "Big Three" automobile manufacturers in the United States, headquartered in Auburn Hills, Michigan. 
              It is the American subsidiary of Dutch-domiciled automotive company Stellantis.
              In addition to the Chrysler brand, Stellantis North America sells vehicles worldwide under the Dodge, Jeep, and Ram nameplates.
               It also includes Mopar, its automotive parts and accessories division, and SRT, its performance automobile division.</div>
              </>
            )
           }
    
           export function TheFiat() {
            const [cars, setCars] = useState(null);
              
            useEffect(() => {
              
              fetch("https://hud-car-api.herokuapp.com/cars")
                  .then(response => response.json())
                  .then(data => setCars(data))
                  .then(cars => JSON.stringify(cars))
                  
          }, []);
          
          
          if (!cars) {
            return <strong>Loading...</strong>;
          }
            const carImgys = cars?.map(car => car);
            const getFiat = carImgys?.map(car => car.image)
            const Fiat = getFiat[5]
            const arrayfiat = Array(Fiat);
            
            
              return (
                <>
                <div key={Fiat}><img src={arrayfiat} alt="Fiat" className="imageFiat"/></div>
                <div className="carInfoText">Fiat Automobiles S.p.A. is an Italian automobile manufacturer, formerly part of Fiat Chrysler Automobiles, and since 2021 a subsidiary of Stellantis through Italian factory FCA Italy. 
                Fiat Automobiles was formed in January 2007 when Fiat S.p.A. reorganized its automobile business, and traces its history back to 1899 when the first Fiat automobile, the Fiat 4 HP, was produced.</div>
                </>
              )
             }
      
             export function TheToyota() {
              const [cars, setCars] = useState(null);
                
              useEffect(() => {
                
                fetch("https://hud-car-api.herokuapp.com/cars")
                    .then(response => response.json())
                    .then(data => setCars(data))
                    .then(cars => JSON.stringify(cars))
                    
            }, []);
            
            
            if (!cars) {
              return <strong>Loading...</strong>;
            }
              const carImgys = cars?.map(car => car);
              const getToyota = carImgys?.map(car => car.image)
              const Toyota = getToyota[6]
              const arrayyota = Array(Toyota);
              
              
                return (
                  <>
                  <div key={Toyota}><img src={arrayyota} alt="Toyota" className="imageParser"/></div>
                  <div className="carInfoText">Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan. 
                  It was founded by Kiichiro Toyoda and incorporated on August 28, 1937. Toyota is one of the largest automobile manufacturers in the world, producing about 10 million vehicles per year.</div>
                  </>
                )
               }

               export function TheRenault() {
                const [cars, setCars] = useState(null);
                  
                useEffect(() => {
                  
                  fetch("https://hud-car-api.herokuapp.com/cars")
                      .then(response => response.json())
                      .then(data => setCars(data))
                      .then(cars => JSON.stringify(cars))
                      
              }, []);
              
              
              if (!cars) {
                return <strong>Loading...</strong>;
              }
                const carImgys = cars?.map(car => car);
                const getRenault = carImgys?.map(car => car.image)
                const Renault = getRenault[7]
                const arrayrena = Array(Renault);
                
                
                  return (
                    <>
                    <div key={Renault}><img src={arrayrena} alt="Renault" className="imageParser"/></div>
                    <div className="carInfoText">Groupe Renault is a French multinational automobile manufacturer established in 1899.
                     The company produces a range of cars and vans, and in the past has manufactured trucks, tractors, tanks, buses/coaches, aircraft and aircraft engines and autorail vehicles.</div>
                    </>
                  )
                 }

                 export function TheSkoda() {
                  const [cars, setCars] = useState(null);
                    
                  useEffect(() => {
                    
                    fetch("https://hud-car-api.herokuapp.com/cars")
                        .then(response => response.json())
                        .then(data => setCars(data))
                        .then(cars => JSON.stringify(cars))
                        
                }, []);
                
                
                if (!cars) {
                  return <strong>Loading...</strong>;
                }
                  const carImgys = cars?.map(car => car);
                  const getSkoda = carImgys?.map(car => car.image)
                  const Skoda = getSkoda[8]
                  const arrayskoda = Array(Skoda);
                  
                  
                    return (
                      <>
                      <div key={Skoda}><img src={arrayskoda} alt="Skoda" className="imageParser"/></div>
                      <div className="carInfoText">Škoda Auto a.s., often shortened to Škoda, is a Czech automobile manufacturer established in 1925 as the successor to Laurin & Klement and headquartered in Mladá Boleslav, Czech Republic.
                       Škoda Works became state owned in 1948. After 1991, it had been gradually privatized to the German Volkswagen Group, becoming a subsidiary in 1994 and since 2000 a wholly owned subsidiary.</div>
                      </>
                    )
                   }

                   export function TheMercedes() {
                    const [cars, setCars] = useState(null);
                      
                    useEffect(() => {
                      
                      fetch("https://hud-car-api.herokuapp.com/cars")
                          .then(response => response.json())
                          .then(data => setCars(data))
                          .then(cars => JSON.stringify(cars))
                          
                  }, []);
                  
                  
                  if (!cars) {
                    return <strong>Loading...</strong>;
                  }
                    const carImgys = cars?.map(car => car);
                    const getMercedes = carImgys?.map(car => car.image)
                    const Mercedes = getMercedes[9]
                    const arraymerc = Array(Mercedes);
                    
                    
                      return (
                        <>
                        <div key={Mercedes}><img src={arraymerc} alt="Mercedes" className="imageParser"/></div>
                        <div className="carInfoText">Mercedes-Benz commonly referred to as just Mercedes, is a German luxury automotive marque.
                         Both Mercedes-Benz and Mercedes-Benz AG (a Mercedes-Benz Group subsidiary established in 2019) are headquartered in Stuttgart, Baden-Württemberg, Germany.
                          Mercedes-Benz produces consumer luxury vehicles and commercial vehicles.
                           Its first Mercedes-Benz-badged vehicles were produced in 1926.
                            In 2018, Mercedes-Benz was the largest seller of premium vehicles in the world, having sold 2.31 million passenger cars.</div>
                        </>
                      )
                     }
   
                     export function ThePeugeot() {
                      const [cars, setCars] = useState(null);
                        
                      useEffect(() => {
                        
                        fetch("https://hud-car-api.herokuapp.com/cars")
                            .then(response => response.json())
                            .then(data => setCars(data))
                            .then(cars => JSON.stringify(cars))
                            
                    }, []);
                    
                    
                    if (!cars) {
                      return <strong>Loading...</strong>;
                    }
                      const carImgys = cars?.map(car => car);
                      const getPeugeot = carImgys?.map(car => car.image)
                      const Peugeot = getPeugeot[10]
                      const arraypeug = Array(Peugeot);
                      
                      
                        return (
                          <>
                          <div key={Peugeot}><img src={arraypeug} alt="Peugeot" className="imagePeugeot"/></div>
                          <div className="carInfoText">Peugeot is a French brand of automobiles owned by Stellantis.
                          The family business that preceded the current Peugeot companies was founded in 1810, with a steel foundry that soon started making hand tools and kitchen equipment, and then bicycles. 
                          On 20 November 1858, Émile Peugeot applied for the lion trademark.
                           Armand Peugeot built the company's first car steam tricycle, in collaboration with Léon Serpollet in 1889; this was followed in 1890 by an internal combustion car with a Panhard-Daimler engine.</div>
                          </>
                        )
                       }

                       export function TheSubaru() {
                        const [cars, setCars] = useState(null);
                          
                        useEffect(() => {
                          
                          fetch("https://hud-car-api.herokuapp.com/cars")
                              .then(response => response.json())
                              .then(data => setCars(data))
                              .then(cars => JSON.stringify(cars))
                              
                      }, []);
                      
                      
                      if (!cars) {
                        return <strong>Loading...</strong>;
                      }
                        const carImgys = cars?.map(car => car);
                        const getSubaru = carImgys?.map(car => car.image)
                        const Subaru = getSubaru[11]
                        const arraysub = Array(Subaru);
                        
                        
                          return (
                            <>
                            <div key={Subaru}><img src={arraysub} alt="Subaru" className="imageParser"/></div>
                            <div className="carInfoText">Subaru is the automobile manufacturing division of Japanese transportation conglomerate Subaru Corporation (formerly known as Fuji Heavy Industries), the twenty-first largest automaker by production worldwide in 2017.</div>
                            </>
                          )
                         }

                         export function TheVolvo() {
                          const [cars, setCars] = useState(null);
                            
                          useEffect(() => {
                            
                            fetch("https://hud-car-api.herokuapp.com/cars")
                                .then(response => response.json())
                                .then(data => setCars(data))
                                .then(cars => JSON.stringify(cars))
                                
                        }, []);
                        
                        
                        if (!cars) {
                          return <strong>Loading...</strong>;
                        }
                          const carImgys = cars?.map(car => car);
                          const getVolvo = carImgys?.map(car => car.image)
                          const Volvo = getVolvo[12]
                          const arrayvol = Array(Volvo);
                          
                          
                            return (
                              <>
                              <div key={Volvo}><img src={arrayvol} alt="Volvo" className="imageParser"/></div>
                              <div className="carInfoText">Volvo Cars is a Swedish multinational manufacturer of luxury vehicles headquartered in Torslanda, Gothenburg. 
                              The company manufactures SUVs, station wagons, and sedans. 
                              The company's main marketing arguments are safety and its Swedish heritage and design.</div>
                              </>
                            )
                           }

                           export function TheVolkswagen() {
                            const [cars, setCars] = useState(null);
                              
                            useEffect(() => {
                              
                              fetch("https://hud-car-api.herokuapp.com/cars")
                                  .then(response => response.json())
                                  .then(data => setCars(data))
                                  .then(cars => JSON.stringify(cars))
                                  
                          }, []);
                          
                          
                          if (!cars) {
                            return <strong>Loading...</strong>;
                          }
                            const carImgys = cars?.map(car => car);
                            const getVW = carImgys?.map(car => car.image)
                            const Volkswagen = getVW[13]
                            const arrayvw = Array(Volkswagen);
                            
                            
                              return (
                                <>
                                <div key={Volkswagen}><img src={arrayvw} alt="Volkswagen" className="imageParser"/></div>
                                <div className="carInfoText">Volkswagen is a German motor vehicle manufacturer headquartered in Wolfsburg, Lower Saxony, Germany.
                                 Founded in 1937 by the German Labour Front, known for their iconic Beetle, it is the flagship brand of the Volkswagen Group, the largest car maker by worldwide sales in 2016 and 2017.
                                  The group's biggest market is in China, which delivers 40% of its sales and profits.
                                   The German term Volk translates to "people", thus Volkswagen translates to "people's car".</div>
                                </>
                              )
                             }

                             export function TheFord() {
                              const [cars, setCars] = useState(null);
                                
                              useEffect(() => {
                                
                                fetch("https://hud-car-api.herokuapp.com/cars")
                                    .then(response => response.json())
                                    .then(data => setCars(data))
                                    .then(cars => JSON.stringify(cars))
                                    
                            }, []);
                            
                            
                            if (!cars) {
                              return <strong>Loading...</strong>;
                            }
                              const carImgys = cars?.map(car => car);
                              const getFord = carImgys?.map(car => car.image)
                              const Ford = getFord[14]
                              const arrayford = Array(Ford);
                              
                              
                                return (
                                  <>
                                  <div key={Ford}><img src={arrayford} alt="Ford" className="imageFord"/></div>
                                  <div className="carInfoText">Ford Motor Company is an American multinational automobile manufacturer headquartered in Dearborn, Michigan, United States. 
                                  It was founded by Henry Ford and incorporated on June 16, 1903.
                                   The company sells automobiles and commercial vehicles under the Ford brand, and luxury cars under its Lincoln luxury brand. 
                                   Ford also owns Brazilian SUV manufacturer Troller, an 8% stake in Aston Martin of the United Kingdom and a 32% stake in China’s Jiangling Motors.</div>
                                  </>
                                )
                               }

                               export function TheHonda() {
                                const [cars, setCars] = useState(null);
                                  
                                useEffect(() => {
                                  
                                  fetch("https://hud-car-api.herokuapp.com/cars")
                                      .then(response => response.json())
                                      .then(data => setCars(data))
                                      .then(cars => JSON.stringify(cars))
                                      
                              }, []);
                              
                              
                              if (!cars) {
                                return <strong>Loading...</strong>;
                              }
                                const carImgys = cars?.map(car => car);
                                const getHonda = carImgys?.map(car => car.image)
                                const Honda = getHonda[15]
                                const arrayhonda = Array(Honda);
                                
                                
                                  return (
                                    <>
                                    <div key={Honda}><img src={arrayhonda} alt="Honda" className="imageHonda"/></div>
                                    <div className="carInfoText">Honda Motor Company, Ltd. is a Japanese public multinational conglomerate manufacturer of automobiles, motorcycles, and power equipment, headquartered in Minato, Tokyo, Japan.</div>
                                    </>
                                  )
                                 }