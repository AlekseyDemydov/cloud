import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Button, Box, Modal, Typography as Text } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from 'react-use-cart';
import logo from './img/logo.png';
import s from './Header.module.scss';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};

function Header({ onCartClick }) {
  const { totalItems } = useCart();
  const [openModal, setOpenModal] = useState(null); // Відкрита модалка: "about", "contacts", або null

  const handleOpen = (type) => setOpenModal(type);
  const handleClose = () => setOpenModal(null);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black', paddingX: 5 }}>
      <Toolbar>
        {/* Логотип */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={logo} alt="logo" className={s.logo} />
        </Typography>

        {/* Навігаційні пункти */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button color="inherit" sx={{ textTransform: 'none' }} onClick={() => handleOpen('about')}>
            Про нас
          </Button>
          <Button color="inherit" sx={{ textTransform: 'none' }} onClick={() => handleOpen('contacts')}>
            Контакти
          </Button>
        </Box>

        {/* Іконка кошика */}
        <IconButton color="inherit" onClick={onCartClick}>
          <Badge badgeContent={totalItems} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>

      {/* Модальне вікно */}
      <Modal open={!!openModal} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box sx={modalStyle}>
          {openModal === 'about' && (
            <>
              <Text id="modal-title" variant="h6" component="h2">
                Про нас
              </Text>
              <Text id="modal-description" sx={{ mt: 2 }}>
                Ми — команда професіоналів, які працюють над створенням найкращих продуктів для вас. Дякуємо, що обираєте нас!
              </Text>
            </>
          )}
          {openModal === 'contacts' && (
            <>
              <Text id="modal-title" variant="h6" component="h2">
                Контакти
              </Text>
              <Text id="modal-description" sx={{ mt: 2 }}>
                Телефон: +380 123 456 789 <br />
                Email: info@example.com <br />
                Адреса: вул. Прикладна, 1, м. Київ
              </Text>
            </>
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            onClick={handleClose}
          >
            Закрити
          </Button>
        </Box>
      </Modal>
    </AppBar>
  );
}

export default Header;
