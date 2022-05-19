import { useState, useEffect } from "react";

import Repos from "./components/Repos";
import Search from "./components/Search";

import './styles/main.scss';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    setUserInfo(searchValue)
  }, [searchValue])
  
  return (
    <div className="App">
      <Search search={ (e) => setSearchValue(e)}/>
      <div className="main">
        <Repos 
          searchValue={userInfo}
          starred={false}
        />
        <Repos 
          searchValue={userInfo}
          starred={true}
        />
      </div>
    </div>
  );
}

export default App;
