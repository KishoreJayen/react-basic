import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Props from './Props';
import Bootstrap from './Bootstrap';
import Events from './Events';
// import Count from './Count';
import Summa from './Summa';
// import UseState from './UseState';
import ListKeys from './ListKeys';
import { ListKeysChild } from './ListKeysChild';

import Props3 from './Props3';
import Mapping from './Mapping';
import Mapping2 from './Mapping2';
import Mapping3 from './Mapping3';
import ExerciseMap from './ExerciseMap';
import MiniCalc from './MiniCalc';
import UseEffect from './UseEffect';
import Component1 from './UseContext';
import UseRef from './UseRef';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Props name="Kishore Jayen" age={21} city="Canada" />
    <Bootstrap/>
    <Events/>
    <Summa/>
    {/* <Count/> */}

 {/* <UseState/> */}
 <Mapping/>
 <Mapping2/>
 <Mapping3/>
 <ExerciseMap/>
 <MiniCalc/>
 <UseEffect/>
 <Component1/>
 <UseRef/>
 <Props3  institution="Imarticus"/>
 <ListKeys name="Kishore Jayen" age={22} sector="IT"  />
 <ListKeys name="Harish Jayen" age={25} sector="Relational Manager"  />
 <ListKeys name="Bindhu Jayen" age={46} sector="Sales Marketing"  />
 <ListKeysChild>
  <i style={{backgroundColor:"red"}}>Heyy Iam the Child Props one</i><br></br>
  <i style={{backgroundColor:"red"}}>Hyy I am the Child Props two</i>
 </ListKeysChild>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
