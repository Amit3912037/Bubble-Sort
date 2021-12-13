import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {InputContextProvider} from './store/input-context';


ReactDOM.render(
  <InputContextProvider>
    <App />
  </InputContextProvider>
    
  ,
  document.getElementById('root')
);


