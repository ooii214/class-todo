import React from 'react';
import logo from './logo.svg';
import './App.css';
import Min from './Min.js';
import { Provider } from 'react-redux';
import { store } from './store';
function App() {
  return (
    <Provider store={store}>
      <Min />
    </Provider>
  );
}

export default App;
