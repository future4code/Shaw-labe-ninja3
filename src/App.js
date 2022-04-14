import React from 'react';
import Axios from 'axios';
import style from 'styled-components';
import Carrinho from './pages/Carrinho';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contratacao from './pages/Contratacao';
import AddJob from './pages/AddJob';
import QuemSomos from './pages/QuemSomos';


export default class App extends React.Component {
	state = {
		telaAtual: ""

	}
	selecionarPagina = () => {
		switch (this.state.telaAtual) {
			case "sejaUmNinja":
				return <AddJob />
			case "contrateUmNinja":
				return <Contratacao />
			case "quemSomos":
				return <QuemSomos />
			default:
				return <Home />

		}
	}
	irParaPagina = (telaAtual) =>{
this.setState({telaAtual: "sejaUmNinja"})
	}
	irParaPagina2 = (telaAtual) =>{
		this.setState({telaAtual: "contrateUmNinja"})
			}
			irParaPagina3 = (telaAtual) =>{
				this.setState({telaAtual: "quemSomos"})
					}
	render() {

		return (
			<div>
				<button></button>
				{this.selecionarPagina()}


			</div>
		)
	}
}