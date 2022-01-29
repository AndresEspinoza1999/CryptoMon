import React from "react";
import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import {useState, useEffect} from 'react';
import axios from 'axios'
import PokeList from "./components/assests/PokeList";
import Main from "./components/Main";

function App() {
  const [pokeListData, setPokeListData] = useState([])
  const [selectedPoke, setSelectedPoke] = useState([1])

    useEffect(() => {
      const getNfts = async () => {
        const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x6d8554712c653195e2Cf68bF0C304A2116b0de02&order_direction=asc&offset=0&limit=20');
        setPokeListData(openseaData.data.assets)
      }
      return getNfts();
    },[])

  return (
    <div className="app">
      <Header />
      {
        pokeListData.length > 0 && (
          <>
          <Main pokeListData={pokeListData} selectedPoke={selectedPoke}/>
          <PokeList pokeListData = {pokeListData} setSelectedPoke={setSelectedPoke}/>
          </>
          
        )
      }
     
    
    </div>
  );
}

export default App;
