import React, { useState, useEffect } from 'react'
import { useWindowScroll } from "react-use";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faChevronDown} />

const ScrollToBot = () => {                                    // This component handles the scroll button, both for mobile and web version
    const [visible, setVisibility] = useState(false);
    const { y: pageYOffset } = useWindowScroll();

    useEffect(() => {
        if (pageYOffset < 400) {
            setVisibility(true);
        } else {
            setVisibility(true);
        }
    }, [pageYOffset]);

    function handleSubmit(e) {                                   // Switches where the screen will scroll to depending on the height of the page
        e.preventDefault();
        if (matcher650.matches) {
        window.scrollTo({ top: 1690 , behavior: 'smooth' });
        } else if (matcher700.matches) {
            window.scrollTo({ top: 1725, behavior: 'smooth' })
          } else if (matcher750.matches) {
            window.scrollTo({ top: 1775, behavior: 'smooth' })
          }
          else if (matcher800.matches) {
            window.scrollTo({ top: 1700, behavior: 'smooth' })
          }
          else if (matcher850.matches) {
            window.scrollTo({ top: 1875, behavior: 'smooth' })
          }
          else if (matcher900.matches) {
            window.scrollTo({ top: 1800, behavior: 'smooth' })
          }
          else if (matcher950.matches) {
            window.scrollTo({ top: 1975, behavior: 'smooth' })
          }
      
          else if (matcher600.matches) {
            window.scrollTo({ top: 1625, behavior: 'smooth' })
          } else {
            window.scrollTo({ top: 1925, behavior: 'smooth' })
          }

        }
        let matcher600 = window.matchMedia("(max-height: 600px)");
        let matcher650 = window.matchMedia("(max-height: 650px)");
        let matcher700 = window.matchMedia("(max-height: 700px)");
        let matcher750 = window.matchMedia("(max-height: 750px)");
        let matcher800 = window.matchMedia("(max-height: 800px)");
        let matcher850 = window.matchMedia("(max-height: 850px)");
        let matcher900 = window.matchMedia("(max-height: 900px)");
        let matcher950 = window.matchMedia("(max-height: 950px)");
        
        

    if (!visible) {
        return false;
    }


    


    
    return (
        <div className="scroll-to-bot"
        onClick={handleSubmit}
         >
            <i className="iconDown" >{element} </i>
            
        </div>
    );
};

export default ScrollToBot;