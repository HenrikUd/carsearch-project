import React from "react";
import "./App.css";
import "./components/LogoCSS.css";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import TextField from '@mui/material/TextField';
import arr from "./components/arr";
import carFacts from "./components/carFacts";
import SearchResult from "./components/SearchResult";
import carImages from "./components/carImages"
import ScrollToMid from "./components/ScrollToMid";
import ScrollToBot from "./components/ScrollToBot";
import ReliabilityRatings from "./components/ReliabilityRatings";

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
 
  
  const handleChange = (event) => {      
    // Handles the state on search input
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm      // filters search
    ? arr
    : arr.filter((arr) =>
        arr.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
     


  
  return (
    
    <div className="background-wrap">
     
      <div className="header"><h1>Stuck on choosing a make? We can help!</h1></div>
      <div className="belowHeader"><p>Reliability ratings, value for money,<br /> gas mileage, we will tell you everything<br /> you need to know</p></div>
      
     
   <TextField                      // search bar function
   className="inputField"
  label="Search for a car make"
  onChange={handleChange}
  InputProps={{
    endAdornment: (
      <InputAdornment position="start">
        <IconButton>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
  
/> 

    
<ScrollToMid />
<ScrollToBot />
<ReliabilityRatings />
          <ul className="carList">
         
         
            {results.map((result) => (
              
              <SearchResult
                key={`SearchResult-${result}`}
                result={result}
                facts={carFacts[result]}
                image={carImages[result]}
                
              />
              
            ))}
            
            
          </ul>
         
          </div>
          
  
    
  );
  
};



export default App;
