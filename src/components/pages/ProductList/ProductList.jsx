import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useCart } from 'react-use-cart';
import img from './img/test.png';

const products = [
  { id: 1, name: 'Товар 1', price: 100, image: img, description: 'это первый товар' },
  { id: 2, name: 'Товар 2', price: 200, image: img, description: 'это второй товар' },
  { id: 3, name: 'Товар 3', price: 300, image: img, description: 'это третий товар' },
  { id: 4, name: 'Товар 1', price: 100, image: img, description: 'это первый товар' },
  { id: 5, name: 'Товар 2', price: 200, image: img, description: 'это второй товар' },
  { id: 6, name: 'Товар 1', price: 100, image: img, description: 'это первый товар' },
  { id: 7, name: 'Товар 2', price: 200, image: img, description: 'это второй товар' },
  { id: 8, name: 'Товар 3', price: 300, image: img, description: 'это третий товар' },
  { id: 9, name: 'Товар 1', price: 100, image: img, description: 'это первый товар' },
  { id: 10, name: 'Товар 2', price: 200, image: img, description: 'это второй товар' },
];

function ProductList() {
  const { addItem } = useCart();

  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
          <Card
            sx={{
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Додає тінь
              transition: 'transform 0.2s, box-shadow 0.2s', // Додає ефект при наведенні
              '&:hover': {
                transform: 'scale(1.05)', // Збільшує картку при наведенні
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Посилює тінь при наведенні
              },
            }}
          >
            <CardMedia component="img" height="140" image={product.image} alt={product.name} />
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
              <Typography variant="body1" color="text">
                Опис: {product.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ціна: {product.price} грн
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => addItem(product)}
                style={{ marginTop: '10px' }}
                sx={{
                  backgroundColor: '#ff5100', // Колір фону
                  '&:hover': { backgroundColor: '#e64a00' }, // Колір при наведенні
                  color: '#fff', // Колір тексту
                }}
              >
                Додати в кошик
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
