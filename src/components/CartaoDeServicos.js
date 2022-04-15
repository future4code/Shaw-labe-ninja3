import React from "react";
import styled from "styled-components";

export const Cartao = styled.div`
 border: 1px solid black;
    background-color: purple;
    padding: 50px;
    text-align: center;
    width: 50%;
    display: flex;
    flex-direction: column;
    @media (max-width: 1025px){
        width: 90%;
        padding: 5px;
    }
`;

export const TextoDoCartao = styled.div`
  display: flex;
  align-items:center;

  p {
    margin:  30px 0px;
    font-size: 30px;
    
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
      <div>
      <Cartao>
        <img src={this.props.imagem} />
        <TextoDoCartao>
        <p>Jardineiro</p>
          <p>{this.props.nomeServico}</p>
          <p> {this.props.preco}R$,00</p>
          <p>Prazo {this.props.prazo}</p>
          <button onClick={this.props.onClick}>Adicionar carrinho</button>
          <button onClick={this.props.onClick}>Ver detalhes</button>
        </TextoDoCartao>
      </Cartao>
      <Cartao>
        <img src={this.props.imagem} />
        <TextoDoCartao>
        <p>Pintor</p>
          <p>{this.props.nomeServico}</p>
          <p> {this.props.preco}R$,00</p>
          <p>Prazo {this.props.prazo}</p>
          <button onClick={this.props.onClick}>Adicionar carrinho</button>
          <button onClick={this.props.onClick}>Ver detalhes</button>
        </TextoDoCartao>
      </Cartao>
      <Cartao>
        <img src={this.props.imagem} />
        <TextoDoCartao>
        <p>Eletrecista</p>
          <p>{this.props.nomeServico}</p>
          <p> {this.props.preco}R$,00</p>
          <p>Prazo {this.props.prazo}</p>
          <button onClick={this.props.onClick}>Adicionar carrinho</button>
          <button onClick={this.props.onClick}>Ver detalhes</button>
        </TextoDoCartao>
      </Cartao>
      <Cartao>
        <img src={this.props.imagem} />
        <TextoDoCartao>
        <p>Eletrecista</p>
          <p>{this.props.nomeServico}</p>
          <p> {this.props.preco}R$,00</p>
          <p>Prazo {this.props.prazo}</p>
          <button onClick={this.props.onClick}>Adicionar carrinho</button>
          <button onClick={this.props.onClick}>Ver detalhes</button>
        </TextoDoCartao>
      </Cartao>
      <Cartao>
        <img src={this.props.imagem} />
        <TextoDoCartao>
        <p>Eletrecista</p>
          <p>{this.props.nomeServico}</p>
          <p> {this.props.preco}R$,00</p>
          <p>Prazo {this.props.prazo}</p>
          <button onClick={this.props.onClick}>Adicionar carrinho</button>
          <button onClick={this.props.onClick}>Ver detalhes</button>
        </TextoDoCartao>
      </Cartao>
      <Cartao>
        <img src={this.props.imagem} />
        <TextoDoCartao>
        <p>Eletrecista</p>
          <p>{this.props.nomeServico}</p>
          <p> {this.props.preco}R$,00</p>
          <p>Prazo {this.props.prazo}</p>
          <button onClick={this.props.onClick}>Adicionar carrinho</button>
          <button onClick={this.props.onClick}>Ver detalhes</button>
        </TextoDoCartao>
      </Cartao>
      </div>
      
    );
  }
}


