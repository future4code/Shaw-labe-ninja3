import React from "react";

export  default class PesquisaJob extends React.Component {

    state={
		servico:""
	}

	onChangeServico=(event)=>{
		this.setState({servico:event.target.value})
	}

    getAllJobs=()=>{

		const url = "{{baseURL}}/jobs"
		const headers={
			Authorization: "{{demo-key}}"
		}

		axios.get(url, headers)
		.then(()=>{		
			this.setState({
			servico:""
			})

		}).catch((erro)=>{alert(erro.message)})
	}

    render() {

        return(

            <div>

                <input type="date" value={this.state.servico} onChange={this.onChangeServico}/>

                <button onClick={this.getAllJobs}>Pesquisar</button>

            </div>
        )
    }  
        
        



}