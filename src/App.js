import React from 'react';
import Axios from 'axios';
import style from 'styled-components';
import  Carrinho  from './pages/Carrinho';
import  Header  from './components/Header';
import  Home  from './pages/Home';
import  Footer  from './components/Footer';
import  Contratacao  from './pages/Contratacao';
import  AddJob  from './pages/AddJob';
import  QuemSomos  from './pages/QuemSomos';


export default class App extends  React.Component {


	render() {
	  
	  return (
		<div>
		  <p>Pronto para começar!</p>
		  <Header/>
		  <Home/>
		  <Footer/>
		  <Carrinho/>
		  <Contratacao/>
		  <AddJob/>
		  <QuemSomos/>
		</div>
	  )
	}
  }
