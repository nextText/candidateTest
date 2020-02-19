import React, { useState } from "react";
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import App from './components';
import reducer from './store/reducers'


const store = createStore(reducer,{}, applyMiddleware(thunk));

export default () => {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </Provider>
  );
}