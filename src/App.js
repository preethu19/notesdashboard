import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Header from './Component/Header'
import AddCard from './Component/AddCard'
import Home from './Component/Home'
import DetailCard from './Component/DetailCard'
import Card from './Component/Card'
import EditCard from './Component/EditCard'

const App =()=> {
	
	
  return (
    <div className="App">
	<Header />
	  <Switch>
	  	<Route exact path='/' component={Home} /> 
		<Route exact path='/form' component={AddCard} /> 
		  <Route exact path='/form/:noteid' component={EditCard} /> 
		  <Route exact path='/detail/:noteid' component={DetailCard} /> 
		<Redirect to='/' />
	  </Switch>
	 </div>
  );
}

export default App;
