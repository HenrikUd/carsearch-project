import React, { useState } from "react";
import Popup from "./Popup.js";
import { TheNissan, TheAudi, TheBMW, TheOpel, TheChrysler, TheFiat, TheToyota, TheRenault, TheSkoda, TheMercedes, ThePeugeot, TheSubaru, TheVolvo, TheVolkswagen, TheFord, TheHonda } from "./CarModels.js";



function SearchResult({ result,  facts, image }) {
const [isOpen, setIsOpen] = useState(false);


function openModal() {      // opens the popup window
    setIsOpen(true);
    
  };

  function closeModal(event) {  // closes it
    
    event.stopPropagation();
    setIsOpen(false);
   
    
  };
const clicky = [];
function clickLogger() {
  if (isOpen === true) {
    clicky.push(facts)
  }
}
clickLogger()

  
function GetImgy() {              // matches the click with the individual car function
  if (clicky == 'Audi') {
    return  <TheAudi />
  } else if (clicky == 'Nissan') {
    return <TheNissan />
  } else if (clicky == 'BMW') {
    return <TheBMW />
  } else if (clicky == 'Opel') {
    return <TheOpel />
  } else if (clicky == 'Chrysler') {
    return <TheChrysler />
  } else if (clicky == 'Fiat') {
    return <TheFiat />
  } else if (clicky == 'Toyota') {
    return <TheToyota />
  } else if (clicky == 'Renault') {
    return <TheRenault />
  } else if (clicky == 'Skoda') {
    return <TheSkoda />
  } else if (clicky == 'Mercedes-Benz') {
    return <TheMercedes />
  } else if (clicky == 'Peugeot') {
    return <ThePeugeot />
  } else if (clicky == 'Subaru') {
    return <TheSubaru />
  } else if (clicky == 'Volvo') {
    return <TheVolvo />
  } else if (clicky == 'Volkswagen') {
    return <TheVolkswagen />
  } else if (clicky == 'Ford') {
    return <TheFord />
  } else if (clicky == 'Honda') {
    return <TheHonda />
  } 
  
    else {
    return <p>image not found</p>
  }
};

  return (
   
    <>
     
      <div className="nameText">
      
        <div className="underList">
        <li onClick={openModal} >
        
          <Popup open={isOpen} onClose={closeModal}>
            <div className="textFacts">
          {facts}
            </div>
            <div className="models">
            <GetImgy />
           
            </div>
            
          </Popup>
          
          {result}
          <div className="image">
            
            {image}
            </div>
        </li>
      </div>
      </div>
      
      
    </>
    
  );
}

export default SearchResult;
