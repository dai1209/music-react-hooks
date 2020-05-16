import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from "react-redux";
import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";
import store from "./store/index";
import AppRouter from "./routes/index.js";
import { HashRouter } from "react-router-dom";

import "./fix.css";


function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        <AppRouter />
      </HashRouter>
    </Provider>
  );
}



ReactDom.render(<App />,document.getElementById('root'))