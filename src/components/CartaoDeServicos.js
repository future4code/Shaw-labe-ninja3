import React from "react";
import styled from "styled-components";

export const Cartao = styled.div`
  border: 1px solid black;
  margin: 70%;
  display: flex;
  flex-direction: column;
`;

export const TextoDoCartao = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin:  16px;
    padding: 10px;
  }
  button {
    margin: 10px;
    align-self: center;
    width: 70%;
  }
`;


export default class CartaoDeServicos extends React.Component {
  render() {
    return (
      <Cartao>
        <img src={this.props.imagem} />
        <TextoDoCartao>
          <p>{this.props.nomeServico}</p>
          <p>R$ {this.props.preco},00</p>
          <p>Prazo {this.props.prazo}</p>
          <button onClick={this.props.onClick}>Adicionar carrinho</button>
          <button onClick={this.props.onClick}>Ver detalhes</button>
        </TextoDoCartao>
      </Cartao>
    );
  }
}


