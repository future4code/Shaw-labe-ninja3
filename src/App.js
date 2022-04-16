import React from 'react';
//import Axios from 'axios';
import styled from 'styled-components';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';
import Contratacao from './pages/Contratacao';
import AddJob from './pages/AddJob';
import QuemSomos from './pages/QuemSomos';
import Footer from './components/Footer';

const ButtonHeader = styled.button`
background-color:#9584D0;
margin-top: 4%;
margin-left: 400px;
margin-top: 40px;
`


export default class App extends React.Component {
	
	/*state = {
		telaAtual: "home"

	}
	selecionarPagina = () => {
		switch (this.state.telaAtual) {
			case "sejaUmNinja":
				return <AddJob irParaPagina={this.irParaPagina}/>
			case "contrateUmNinja":
				return <Contratacao  irParaPagina={this.irParaPagina}/>
			case "quemSomos":
				return <QuemSomos irParaPagina={this.irParaPagina}/>
			default:
				return <Home irParaPagina={this.irParaPagina}/>

		}
	}
	irParaPagina = (sejaUmNinja) =>{
	this.setState({telaAtual: sejaUmNinja})*/

	state={
		telaAtual:"Home"
	}

	escolherTelaAtual=()=>{
		switch(this.state.telaAtual){
			case "Home":
				return <Home/>
			case "AddJob":
				return <AddJob/>
			case "Contratacao":
				return <Contratacao/>
			case "Quem Somos":
				return <QuemSomos/>
			case "Carrinho":
				return <Carrinho/>
			default:
				return <Home/>
		}
	}

	
	
	render(){

		return (
			<div>
		       
				{/*{this.selecionarPagina()}*/}
				<Home/>
				<ButtonHeader onClick={()=>this.escolherTelaAtual()}>Voltar</ButtonHeader>
				
				<Footer/>
           

			</div>
		);
	}
}