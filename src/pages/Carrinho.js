import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';


export default class Carrinho extends React.Component {
	
	state = {
		carrinho:      [],
		tipoPagamento: []
	  };
	
	  /*componentDidMount() {
		const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
		const tipoPagamento = carrinho.map(() => "");
		this.setState({
		  carrinho,
		  tipoPagamento
		});
	  }
	
	  componentDidUpdate() {
		localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho));
	  }*/



	render() {
	  
	  return (
		<div>
		  	{/*	  	
			<form onSubmit={this.handleSubmit}>

				<label>
					Como quer receber seu pagamento?
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

			<div>
				<p>Pra quando precisa do serviço?</p>
				<br/><input type="date" value={this.state.calendario} onChange={this.onChangeCalendario}/>
			</div>	*/}
			
		</div>
	  )
	}
  }