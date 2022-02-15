import React, { useState, useEffect } from "react";
import { getAllPokemon, getPokemon } from "./services/pokemon";
import Navbar from "./components/Navbar";
import Card from "./components/Card";


function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [prevUrl, setPrevUrl] = useState('');
  const [nextUrl, setNextUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';
  useEffect(() => {
    async function fetchData() {
      console.log('In Fetch Data function .....');
      let response = await getAllPokemon(initialUrl);
      console.log('response', response);
      setPrevUrl(response.previous);
      setNextUrl(response.next);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    if (nextUrl != null) {
      setLoading(true);
      let response = await getAllPokemon(nextUrl);
      await loadingPokemon(response.results);
      setPrevUrl(response.previous);
      setNextUrl(response.next);
      setLoading(false);
    }
  }
  const prev = async () => {
    if (prevUrl != null) {
      setLoading(true);
      let response = await getAllPokemon(prevUrl);
      await loadingPokemon(response.results);
      setPrevUrl(response.previous);
      setNextUrl(response.next);
      setLoading(false);
    }
  }
  const loadingPokemon = async (data) => {
    let pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonInfo = await getPokemon(pokemon.url);
      return pokemonInfo;
    }));
    setPokemonData(pokemonData);
  }

  return (
    <div>
      {loading ? <h1>Loading...</h1> : (
        <>
          <Navbar />
          <div className="bg-slate-300">
            <div class="inline-flex mb-5">
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={prev}>
                Prev
              </button>
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={next}>
                Next
              </button>
            </div>
            <div className="grid-container ">
              {pokemonData.map((p, i) => {
                return <Card key={i} pokemon={p} />
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
