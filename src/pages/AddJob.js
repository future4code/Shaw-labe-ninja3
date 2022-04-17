import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../components/Header';
//import Footer from '../components/Header';
//import TextField from "@material-ui/core/TextField";



//só testei o styled
const AdicionaServico=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  row-gap: 10px;
  padding: 30px;
  height: 70vh;
  width: 50vw;
  justify-content: space-around;
  text-align: center;
`

const Calendario=styled.div`
`
const MeioPagamento=styled.div`
`

export  default class AddJob extends React.Component {

	state={
		
		nomeServico:"",
		descricao:"",
		preco:"",
		tipoPagamento:[],
		calendario:""
	}

	onChangeServico=(event)=>{
		this.setState({nomeServico:event.target.value})
	}
	onChangeDescricao=(event)=>{
		this.setState({descricao:event.target.value})
	}
	onChangePreco=(event)=>{
		this.setState({preco:event.target.value})
	}

	//Cadastro não tá funcionando e acho que é por causa do pagamento. ele é um array e a gente não tá usando função de array 
	// ou é a questão dos checkboxes mesmo O.O >>>> http://react.tips/checkboxes-in-react-16/
	//outro exemplo/tutorial >>>>> https://www.robinwieruch.de/react-checkbox/

	onChangePagamento=(event)=>{
		this.setState({tipoPagamento: event.target.value})
	}
	onChangeCalendario=(event)=>{
		this.setState({calendario: event.target.value})
	}

	adicionaServico=()=>{

		const url = "{{baseURL}}/jobs"
		const headers={
			Authorization: "{{demo-key}}"
		}

		const body={
			title:"",
			description:"",
			price: Number(),
			paymentMethods:[],
			dueDate:""					
		}

		axios.post(url, headers, body)
		.then(()=>{
			alert("Serviço cadastrado com sucesso!")
			this.setState({
			nomeServico:"",
			descricao:"",
			preco:"",
			tipoPagamento:[],
			calendario:""
			})

		}).catch((erro)=>{alert(erro.message)})
	}
	
	
	render() {
	  
	 	return (

			<div>

				<Header/>			

				<AdicionaServico>	
				
				
					<h1>Cadastre seu serviço</h1>

					<input placeholder="Digite sua profissão" 
					type="text" 
					onChange={this.onChangeServico} 
					value={this.state.nomeServico}/><br/>
					
					<br/>
					<input placeholder="Descreva seu serviço" 
					type="text" 
					onChange={this.onChangeDescricao} 
					value={this.state.descricao}/><br/>

					
					<br/>
					<input placeholder="Preço" 
					type="number" 
					onChange={this.onChangePreco} 
					value={this.state.preco}/><br/>

					<MeioPagamento>
						<p>Meio de recebimento de preferência:</p>

						{/*
						<input
						type="checkbox" 
						onChange={this.onChangePagamento} 
						value= "Cartão de Crédito"/>
						<label>Cartão de Crédito</label>	

						<input
						type="checkbox" 
						onChange={this.onChangePagamento} 
						value= "Cartão de débito"/>
						<label>Cartão de débito</label>	

						<input
						type="checkbox" 
						onChange={this.onChangePagamento} 
						value= "Pix"/>
						<label>Pix</label>

						<input
						type="checkbox" 
						onChange={this.onChangePagamento} 
						value= "PayPal"/>
						<label>PayPal</label>

						<input
						type="checkbox" 
						onChange={this.onChangePagamento} 
						value= "Boleto"/>
						<label>Boleto</label>
						*/}

						<form onSubmit={this.onChangePagamento}>

							<label>
								Como prefere receber seu pagamento?
								<br/>				
								<select value={this.state.tipoPagamento}><br/>
									<option value="cartaoCredito">Catão de crédito</option>
									<option value="cartaoDebito">Cartão de débito</option>
									<option value="pix">Pix</option>
									<option value="paypal">PayPal</option>
									<option value="boleto">Boleto</option>
								</select>
							</label><br/>

							<br/><input type="submit" value="Enviar"/>

						</form>
						
					</MeioPagamento>

					<Calendario>
						<p>Prazo de execução do serviço</p>
						<br/><input type="date" value={this.state.calendario} onChange={this.onChangeCalendario}/>
					</Calendario>
		
					<br/>
					<button onClick={this.adicionaServico}>Cadastrar serviço</button>

				</AdicionaServico>				

			</div>
		) 
	}
}
