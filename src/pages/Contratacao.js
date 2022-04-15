import React from "react"
import axios from "axios"



export default class TelaServicos extends React.Component {
    state = {
        servicos: [],
        valorMaximo: "",
        valorMinimo: "",
        busca: "",
        ordenacao: "",
    }
	onChangeValorMaximo = (event) => {
        this.setState({ valorMaximo: event.target.value })
        console.log(this.state.valorMaximo)
    }

    onChangeValorMinimo = (event) => {
        this.setState({ valorMinimo: event.target.value })
        console.log(this.state.valorMaximo)
    }

    onChangeBusca = (event) => {
        this.setState({ busca: event.target.value });
    }

    onChangeOrdenacao = (event) => {
        this.setState({ ordenacao: event.target.value })
    }


        render() {
	  
            return (
             
             <div>

                  
                <p>Tela de Serviços</p>
              </div>
            )
          }
        }