import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
//import App from '../App';
//import Header from './components/Header';
import Contratacao from './pages/Contratacao';
import AddJob from './pages/AddJob';
import QuemSomos from './pages/QuemSomos';
import PesquisaJob from '../components/PesquisaJob';


const FotoPrincipal =styled.img`
width:100%;
`
const Headerdiv = styled.div`
border: 3px solid black;
display:flex;
background-color:#F1F0FA;
`
const HaderA =styled.div`
background-color: #F1F0FA;
`
const ButtonHeader = styled.button`
background-color:#9584D0;
margin-top: 48px;
margin-left:140px;
`

export default class Home extends React.Component {

	state = {
		telaAtual: "home"
	}

	irParaPagina = (home) =>{
		this.setState({telaAtual: home})
	}

	irParaPaginaUm = (sejaUmNinja) =>{
		this.setState({telaAtual: sejaUmNinja})
	}

	irParaPaginaDois = (contrateUmNinja) =>{
		this.setState({telaAtual: contrateUmNinja})
	}

	irParaPaginaTres = (sobreNos) =>{
		this.setState({telaAtual: sobreNos})
	}


	selecionarPagina = () => {

		switch (this.state.telaAtual) {
			case "Seja Um Ninja":
				return <AddJob irParaPaginaUm={this.irParaPaginaUm}/>
			case "Contrate Um Ninja":
				return <Contratacao  irParaPaginaDois={this.irParaPaginaDois}/>
			case "Sobre Nos":
				return <QuemSomos irParaPaginaTres={this.irParaPaginaTres}/>
			default:
				return <Home irParaPagina={this.irParaPagina}/>

		}
	}
	
	
	render() {
	  
	  	return(
		  
			<div>			

					
				<Headerdiv>

					<div>
						<img src="https://labenu.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2a51ad96-d8b7-4df3-bf68-828d473c84ef%2Flabeninjas2.png?table=block&id=c22b9c9a-54d8-4d6e-935e-3931470828dc&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=740&userId=&cache=v2 "width="140" height="140"/>
					</div>
						
					<HaderA>
							
							{/*<ButtonHeader onClick={() => this.props.irParaPagina("sejaUmNinja")}>Seja um ninja</ButtonHeader>

							<ButtonHeader onClick={() => this.props.irParaPagina("contrateUmNinja")}>Contrante um ninja</ButtonHeader>

							<ButtonHeader onClick={() => this.props.irParaPagina("quemSomos")}>Quem somos</ButtonHeader>*/}

							<ButtonHeader onClick={() => this.selecionarPagina("sejaUmNinja")}>Seja um ninja</ButtonHeader>

							<ButtonHeader onClick={() => this.selecionarPagina("contrateUmNinja")}>Contrante um ninja</ButtonHeader>

							<ButtonHeader onClick={() => this.selecionarPagina("quemSomos")}>Quem somos</ButtonHeader>												

					</HaderA>
					
				</Headerdiv>			
				
						
				<div>
					< FotoPrincipal  src="https://img.freepik.com/fotos-gratis/retrato-de-reparador-mulher-com-rolo-pintura-isolado_1303-14263.jpg?w=700" />			
				</div>

				<PesquisaJob/>		
			
			</div>

	  	);
	  
	}

}
 