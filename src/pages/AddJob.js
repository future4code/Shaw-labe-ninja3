import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
//import Header from '../components/Header';
//import Footer from '../components/Header';
import TextField from "@material-ui/core/TextField";



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


export  default class AddJob extends React.Component {

	state={
		
		nomeServico:"",
		descricao:"",
		preco:"",
		tipoPagamento:[],
		dueDate: new Date().toISOString().split("T")[0]
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
			paymentMethods:[],
			dueDate:this.state.dueDate,
					
		}

		axios.post(url, headers, body)
		.then((resposta)=>{
			alert("Serviço incluido com sucesso!")
			this.setState({nomeServico:"",
			descricao:"",
			preco:"",
			tipoPagamento:[],
			dueDate:new Date().toISOString().split("T")[0]})		
		
		
		}).catch((erro)=>{
			alert(erro.message)
		})
	}
	
	
	render() {
	  
	  return (
		<div>
			{/* Header/>*/}

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

				<div>
					<p>Meio de pagamento de preferência:</p>
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
					 
				</div>
				 <TextField
          placeholder="Prazo"
          label="Prazo"
          name="dueDate"
          type="date"
          value={this.state.dueDate}
          onChange={this.changeInputValues}
	  /> 
		
				<br/>
				<button onClick={this.adicionaServico}>Cadastrar serviço</button>

			</AdicionaServico>

			{/*<Footer/>	*/ }	

		</div>
	  )
	}
  }
