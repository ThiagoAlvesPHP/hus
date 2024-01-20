// LIBs
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// CONFIG
import { Router } from './core/config/router';
import { store } from './core/config/store';

// DATA
import { setScrollTop, setScreen } from './core/data/app-reducer';

// STYLESHEETs
import "./core/stylesheets/_extends.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);

window.onload = function () {
  store.dispatch(setScrollTop(window.scrollY));
  store.dispatch(setScreen({
    width: window.screen.width,
    height: window.screen.height,
  }));
}

window.onscroll = function () {
  store.dispatch(setScrollTop(window.scrollY));
}

window.onresize = function () {
  store.dispatch(setScreen({
    width: window.screen.width,
    height: window.screen.height,
  }));
}
