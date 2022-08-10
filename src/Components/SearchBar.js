import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./SearchBar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  
  const [shouldAddEventHandler, setWord] = useState("true");

  const handleClick = event => {
    setWord(!shouldAddEventHandler);
    console.log('Button clicked');
  };

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">

      <div className="searchInputs" onClick={true ? handleClick : undefined} >
        
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          />
        <div className="searchIcon">
          {wordEntered.length === 0 ? (
          <div className="searchI"> <ExpandMoreIcon style={{cursor : "pointer"}}></ExpandMoreIcon> </div>
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
    
      {wordEntered == shouldAddEventHandler ? ( 
        <div className="dataResult2">
          {data.slice(0, 20).map((value, key) => {
            return (
              <a className="dataItem2" href={value.link} target="_blank">
                <p style={{cursor : "pointer"}}>{value.title} </p>
              </a>
            );
          })}
        </div>
      ) : (
        <div className="dataResult">
          {filteredData.slice(0, 20).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p style={{cursor : "pointer"}}>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}

    </div>
  );
}

export default SearchBar;
