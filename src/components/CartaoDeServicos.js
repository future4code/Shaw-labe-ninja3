import React from "react";
import styled from "styled-components";

export const Cartao = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export const TextoDoCartao = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 0 16px;
    padding: 10px;
  }
  button {
    margin: 10px;
    align-self: center;
    width: 70%;
  }
`;


class CartaoDosProdutos extends React.Component {
  render() {
    return (
      <Cartao>
        <img src={this.props.imagem} />
        <TextoDoCartao>
          <p>{this.props.nome}</p>
          <p>R$ {this.props.valor},00</p>
          <p>Prazo {this.props.prazo}</p>
          <button onClick={this.props.onClick}>Adicionar carrinho</button>
          <button onClick={this.props.onClick}>Ver detalhes</button>
        </TextoDoCartao>
      </Cartao>
    );
  }
}

export default CartaoDosProdutos;
