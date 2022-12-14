import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import reducer from './css/reducer';
import {  StateProvider } from './StateProvider';
import { initialState } from './css/reducer';
  ReactDOM.render(
    <React.StrictMode>
      <StateProvider initialState={initialState}reducer={reducer}>
      <App/>
      </StateProvider>
     
    </React.StrictMode>,
    document.getElementById('root')
  );