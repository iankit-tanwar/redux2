import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createStore} from 'redux'
import { Provider } from 'react-redux';
 let rootReducer = (initalState='Ankit',action)=>{
  let newState = initalState; 

  if(action.type==='abc'){
   
    return action.payload
  }else if(action.type==='xyz'){
    return action.payload
  }else{
    return newState;
  }
  
  return newState;
}

let store = createStore(rootReducer);

/* console.log(store)
store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch({type:'abcd', fname:'Tanwar'})  */



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
    <App />

    </Provider>
  </React.StrictMode>
);


