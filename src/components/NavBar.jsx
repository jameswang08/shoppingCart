import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link to='/' style={{textDecoration: 'none', color:'white'}}>
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
        <ShoppingCartIcon/>
      </Toolbar>
    </AppBar>
  );
} 