import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


export  default class AddJob extends React.Component {

	state={
		
		nomeServico:"",
		descricao:"",
		preco:"",
		tipoPagamento:"",
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
	onChangePagamento=(event)=>{
		this.setState({tipoPagamento:event.target.value})
	}
	onChangeCalendario=(event)=>{
		this.setState({calendario:event.target.value})
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
			paymentMethods:["Cartão de Crédito", "Cartão de Débito", "Pix", "PayPal", "Boleto"],
			dueDate:"2021-12-30"			
		}

		/*axios.post(url, headers, body)
		.then((resposta)=>{
			alert("Serviço incluido com sucesso!")
			this.setState({nomeServico:""})
		}).catch((error)=>{
			alert(err.resposta.data.message)
		})*/
	}
	
	//onChangeDescricao

	//onChangePreco

	//onChangePagamento

	//onChangeCalendario




	render() {
	  
	  return (
		<div>
		<h1>Cadastre o Seu serviço</h1>
			<input placeholder="Digite nome do serviço" 
			type="text" 
			onChange={this.onChangeServico} 
			value={this.state.nomeServico}/>
			
			<input placeholder="Digite a descrição do serviço" 
			type="text" 
			onChange={this.onChangeDescricao} 
			value={this.state.descricao}/>
			
			<input placeholder="Valor" 
			type="number" 
			onChange={this.onChangePreco} 
			value={this.state.preco}/>
		
			<input
			type="checkbox" 
			onChange={this.onChangePagamento} 
			value= "Cartão de Crédito"/>
			<label>Cartão de Crédito</label>	

			<input
			type="checkbox" 
			onChange={this.onChangePagamento} 
			value= "Cartão de Crédito"/>
			<label>Cartão de débito</label>	

			<input
			type="checkbox" 
			onChange={this.onChangePagamento} 
			value= "Cartão de Crédito"/>
			<label>pix</label>	
		</div>
	  )
	}
  }


//Inputs
  /*<p>1. Nome do serviço oferecido
			  2. Descrição do serviço
			  3. preço cobrado
			  4. tipo de pagamento (opções)
			  5. input calendario
			  
		  </p>*/