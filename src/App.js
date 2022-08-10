import { Button } from "@material-ui/core";
import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";

function App() {
  return (
    <div className="App" onClick={true ? undefined : undefined}>

      <SearchBar placeholder="I feel lucky..." data={BookData} />
      <div className="Button">
      <Button href={"https://www.saatlerinanlami.com.tr/wp-content/uploads/2022/03/falda-ordek-gormek.jpg"} target="_blank">
        Beni Tıkla
      </Button>
      </div>
    </div>
  );
}

export default App;
