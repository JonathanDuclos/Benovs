import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';

import { UIContextProvider } from './contexts/UIContext';
import { UserContextProvider } from './contexts/UserContext';
import { Provider } from 'react-redux';
import store from './redux/Store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <UIContextProvider>
      <UserContextProvider>
        <Provider store={store}>
          <Router />
        </Provider>
      </UserContextProvider>
    </UIContextProvider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
