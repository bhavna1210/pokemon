import React, { useState, useEffect } from "react";
import { getAllPokemon, getPokemon } from "./services/pokemon";
import Navbar from "./components/Navbar";
import Card from "./components/Card";


function App() {
  const [finalPokemonData, setFinalPokemonData] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [prevUrl, setPrevUrl] = useState('');
  const [nextUrl, setNextUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setPrevUrl(response.previous);
      setNextUrl(response.next);
      await loadingPokemon(response.results);
    }
    fetchData();
  }, []);

  //- next button pagination function starts here
  const next = async () => {
    if (nextUrl != null) {
      setLoading(true);
      let response = await getAllPokemon(nextUrl);
      await loadingPokemon(response.results);
      setPrevUrl(response.previous);
      setNextUrl(response.next);
    } else {
      alert("Next data ends here.To get more data click on previous button")
    }
  }
  //- next button pagination function ends here

  //- previous button pagination function starts here
  const prev = async () => {
    if (prevUrl != null) {
      setLoading(true);
      let response = await getAllPokemon(prevUrl);
      await loadingPokemon(response.results);
      setPrevUrl(response.previous);
      setNextUrl(response.next);
    } else {
      alert("Preivous data ends here.To get more data click on next button")
    }
  }
  //- previous button pagination function ends here

  const loadingPokemon = async (data) => {
    let pokemonData = await Promise.all(data.map(async (pokemon) => {
      let pokemonInfo = await getPokemon(pokemon.url);
      return pokemonInfo;
    }));
    setFinalPokemonData(pokemonData);
    setPokemonData(pokemonData);
    setLoading(false);
  }

  //- search functionality starts here
  const getFilterData = (searchVal) => {
    if (searchVal && searchVal.length > 0) {
      const result = pokemonData.filter(p => p.name.includes(searchVal));
      setPokemonData(result);
    } else {
      setPokemonData(finalPokemonData);
    }
  }
  //- search functionality ends here

  return (
    <div>
      <Navbar getFilterData={getFilterData} />
      {loading ? (
        <div className="flex items-center justify-center h-screen w-screen">
          <p className="text-4xl font-bold">Loading...</p>
        </div>
      ) : (
        <>
          <div className="bg-slate-300">
            <div className="flex pt-5 justify-center">
              <button className="bg-gray-400 hover:bg-gray-500 hover:text-white text-gray-800 font-bold py-2 px-4 rounded-l" onClick={() => { prev() }}>
                Previous
              </button>
              <button className="bg-gray-400 hover:bg-gray-500  hover:text-white text-gray-800 font-bold py-2 px-4 rounded-r" onClick={() => {
                next()
              }}>
                Next
              </button>
            </div>
            <div className="grid-container ">
              <div className="flex flex-wrap">
                {pokemonData.map((p, i) => {
                  return <Card key={i} pokemon={p} />
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
