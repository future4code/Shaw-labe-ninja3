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
import CartaoDeServicos from './components/CartaoDeServicos';
import ValorContratacao from './pages/ValorContratacao';






export default class App extends React.Component {
	state = {
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
	render() {
	  
	  return (
		<div>
		 <AddJob/>
		 <ValorContratacao/>
		 <CartaoDeServicos/>
		 
		</div>
	  )
	}
  }







  /* 
foto main junto com  o input de pesquisa


		return (
			<div>
				
				{this.selecionarPagina()}


			</div>
		)
	}
}*/