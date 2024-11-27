import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from 'react-use-cart';
import logo from './img/logo.png'
import s from './Header.module.scss'

function Header({ onCartClick }) {
  const { totalItems } = useCart();

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black', paddingX: 5 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={logo} alt="logo" className={s.logo}/>
        </Typography>
        <IconButton color="inherit" onClick={onCartClick}>
          <Badge badgeContent={totalItems} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;