import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import Home from './Home';
import Header from '../components/Header';
const PaiQuemSomos = styled.div`
border: 4px solid black;
display:flex;

background-color:#F1F0FA;
width: 97vw;
height:460px;

`
const LetraTexto =styled.div`
margin-top: 5%;
margin-left: 5%;
background-color:#F1F0FA;

`



export  default class QuemSomos extends React.Component {


	render() {
	  
	  return (
		 
		<div>
			<Header/>
		<PaiQuemSomos>
		
		  
			<img src='https://labenu.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2a51ad96-d8b7-4df3-bf68-828d473c84ef%2Flabeninjas2.png?table=block&id=c22b9c9a-54d8-4d6e-935e-3931470828dc&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=740&userId=&cache=v2 "width="300" height="300'/>
		  
		  <LetraTexto>
			  
			  <h2>
			  Bem vindo a Labeninja!
				  <br/>
				
			  </h2>
			  <p>
				  somos uma empresa criada em 2022,focamos na area de prestaçoes de serviços 
				  somos a maior empresa desse ramo, focada para sempre atender você o melhor possivel!
				  
				  			  </p>
								<br></br>
								Tudo que voce precisa na ponta dos seus dedos!
		  </LetraTexto>
		 



		</PaiQuemSomos>
		</div>
	  )
	}
  }