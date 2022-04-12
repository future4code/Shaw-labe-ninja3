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

		axios.post(url, headers, body)
		.then((resposta)=>{
			alert("Serviço incluido com sucesso!")
			this.setState({nomeServico:""})
		}).catch((error)=>{
			alert(err.resposta.data.message)
		})
	}
	
	//onChangeDescricao

	//onChangePreco

	//onChangePagamento

	//onChangeCalendario




	render() {
	  
	  return (
		<div>

			<input placeholder="Digite nome do serviço" type="text" onChange={this.onChangeServico} value={this.state.nomeServico}/>

			
		  <p>1. Nome do serviço oferecido
			  2. Descrição do serviço
			  3. preço cobrado
			  4. tipo de pagamento (opções)
			  5. input calendario
			  
		  </p>
		</div>
	  )
	}
  }