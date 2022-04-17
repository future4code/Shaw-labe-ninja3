import React from 'react';
//import Axios from 'axios';
import styled from 'styled-components';
import Home from './pages/Home';
//import Carrinho from './pages/Carrinho';
import Contratacao from './pages/Contratacao';
import AddJob from './pages/AddJob';
import QuemSomos from './pages/QuemSomos';
import Footer from './components/Footer';




export default class App extends React.Component {	
	
	render(){

		return (
			<div>
		       
				
				<Home/>
				
				
				<Footer/>
           

			</div>
		);
	}
}