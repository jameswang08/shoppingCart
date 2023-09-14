import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Nav() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shop
        </Typography>
        <ShoppingCartIcon/>
      </Toolbar>
    </AppBar>
  );
} 