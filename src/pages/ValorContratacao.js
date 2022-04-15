import React from "react";
import styled from "styled-components";


export const MainContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    border-radius: 4px;
    padding: 10px;
    margin: 10px;
    width: 70vw;
    height: fit-content;
    input {
        border: none;
        outline: none;
        font-size: 1rem;
        color: black;
        ::placeholder{
            color: balck;
        }
    }
    select {
        border: 1px black;
        text-align: center;
        color: black;
        font-size: 1rem;
    }
    label {
        color: black;
    }
    @media (max-width: 1025px){
        width: 100%;
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
`
export const FiltroContainer = styled.div `
    display: flex;
    grid-column: 1/5;
    
    @media (max-width: 1025px){
        display: flex;
        flex-direction: column;
    }
`

export const LabelContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
`
export const InputContainer = styled.div `
    display: flex;
    align-items: center;
    height: 2rem;
    border: 3px solid black;
`
export const SelectContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    padding: 0.5rem;
 
`
export const TextoInput = styled.p`
    color: black;
`

export default class ValorContratacao extends React.Component {
    render() {
        return (
            <MainContainer>
                <FiltroContainer>
                    <LabelContainer>
                        <label>Valor mínimo</label>
                        <InputContainer>
                            <TextoInput>R$</TextoInput>
                            <input onChange={this.props.onChangeValorMinimo} />
                        </InputContainer>
                    </LabelContainer>
                    <LabelContainer>
                        <label>Valor máximo</label>
                        <InputContainer>
                            <TextoInput>R$</TextoInput>
                            <input onChange={this.props.onChangeValorMaximo} />
                        </InputContainer>
                    </LabelContainer>
                    <LabelContainer>
                        <label>Buscar</label>
                        <InputContainer>
                            <input onChange={this.props.onChangeBusca} placeholder="Título ou descrição" />
                        </InputContainer>
                    </LabelContainer>
                    <SelectContainer>
                        <label>Ordenar por</label>
                        <select
                            onChange={this.props.onChangeOrdenacao}>
                            <option value="maior-preco">Maior preço</option>
                            <option value="menor-preco">Menor preço</option>
                            <option value="titulo">Titulo</option>
                            <option value="prazo">Prazo</option>
                        </select>
                    </SelectContainer>

                </FiltroContainer>
  
            </MainContainer>
        );
    }
}