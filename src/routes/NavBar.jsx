import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, Outlet} from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Nav() {

  const [spriteList, setSpriteList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const updateList = (val) => {
    setSpriteList(val);
  };

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
            return {sprite: pokemon.sprites.front_default, count: 0};
          } catch (error) {
            console.error("Error:", error);
            setError(error);
            return null; 
          }
        })
      );
      setLoading(false);
      setSpriteList(sprites);
    }
    catch(error){
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    getSprites();
  },[]);

  if(error) return(<h1>Error</h1>)

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Link to='/' style={{color:'white'}}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <HomeIcon />
              </IconButton>
          </Link>
          <div style={{flexGrow: 1}}>
          <Link to='/shop' style={{textDecoration: 'none', color: 'white'}}>
            <Typography variant="h6" component="div">
                Shop
            </Typography>
          </Link>
          </div>
          <Link to='/cart' style={{color:'white'}}>
            <ShoppingCartIcon/>
          </Link>
        </Toolbar>
      </AppBar>
      {console.log(spriteList)}
      {
        loading ? (
          <h1>Loading...</h1>
        ) : (
          <Outlet context={[spriteList, updateList]} />
        )
      }

    </>
  );
} 