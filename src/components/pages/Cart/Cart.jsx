import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from 'react-use-cart';

function Cart({ open, onClose, onOrderClick }) {
  const { items, removeItem, isEmpty, cartTotal } = useCart();

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div style={{ width: 300, padding: 20 }}>
        <Typography variant="h6" gutterBottom>
          Ваш кошик
        </Typography>
        {isEmpty ? (
          <Typography>Кошик порожній</Typography>
        ) : (
          <List>
            {items.map((item) => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={item.name}
                  secondary={`Ціна: ${item.price} грн, Кількість: ${item.quantity}`}
                />
                <IconButton edge="end" onClick={() => removeItem(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        )}
        {!isEmpty && (
          <>
            <Typography variant="h6" gutterBottom>
              Всього: {cartTotal} грн
            </Typography>
            <Button
              variant="contained"
              fullWidth
              onClick={onOrderClick}
              sx={{
                backgroundColor: '#ff5100', // Колір фону
                '&:hover': { backgroundColor: '#e64a00' }, // Колір при наведенні
                color: '#fff', // Колір тексту
              }}
            >
              Оформити замовлення
            </Button>
          </>
        )}
      </div>
    </Drawer>
  );
}

export default Cart;
