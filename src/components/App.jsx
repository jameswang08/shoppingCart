import ItemCard from './Card'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useState, useEffect } from 'react'
import '../styles/App.css'

function App() {
  const [spriteList, setSpriteList] = useState([]);

  async function getSprites(){
    //Get pokedex and extract list of pokemon
    try{
      const rawData = await fetch("https://pokeapi.co/api/v2/pokedex/kanto/");
      const pokedex = await rawData.json();
      const pokeList = pokedex.pokemon_entries;
      //Get corresponding sprite for each pokemon
      const sprites = await Promise.all(
        pokeList.map(async (item) => {
          try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${item.pokemon_species.name}/`);
            const pokemon = await response.json();
            return pokemon.sprites.front_default;
          } catch (error) {
            console.error("Error:", error);
            return null; 
          }
        })
      );
      setSpriteList(sprites);
    }
    catch(error){
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    getSprites();
  },[]);

  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {spriteList.map((item, index) => <Grid key={index} xs={3}><ItemCard img={item}></ItemCard></Grid>)}
        </Grid>
      </Container>
    </>
  )
}

export default App
