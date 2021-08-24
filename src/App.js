import React from 'react'
import Categories from './components/Categories';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      // light: '#757ce8',
      main: '#2C394B',
      // dark: '#002884',
      // contrastText: '#fff',
    },
    secondary: {
      // light: '#ff7961',
      main: '#FF4C29',
      // dark: '#ba000d',
      // contrastText: '#000',
    },
  },
});

function App() {
  const [showCartList, setshowCartList] = useState(false);

  function handleShow() {
    setshowCartList(!showCartList);
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Header show={handleShow} />
      {showCartList && <Cart />}
      <Categories />
      <Products />
      <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App
