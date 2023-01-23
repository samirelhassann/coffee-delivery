import React from "react";
import { BrowserRouter } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";

import Router from "./components/Router";

import CheckoutContextProvider from "./contexts/CheckoutContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <CheckoutContextProvider>
          <ToastContainer />
          <Router />
        </CheckoutContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
