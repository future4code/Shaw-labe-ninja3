import { List } from '@material-ui/core';
import React from 'react';
import styled from "styled-components"
  
const FooterPai =styled.div`
border: 3px solid black;
display:flex;
background-color:#F1F0FA;

`
const TextoFooter = styled.div`
display:flex;
margin-top: 2%;
margin-left: 32%;


`
const EquipeBOnecos = styled.div`

margin-top: -1%;
margin-left: 2%;
p {
	margin-left: 16%;
}
`





export default class footer extends React.Component{

	render(){
		return(
			<FooterPai>
				
				<EquipeBOnecos>
				<p>  <strong>conheça nossos devs</strong></p>
					<a href='https://www.instagram.com/mateus.fly/'>
					<img src="https://cdn-icons-png.flaticon.com/64/1149/1149378.png"/>
					</a>
					<a href='https://www.instagram.com/jcrestanij/'>
					<img src="https://cdn-icons-png.flaticon.com/64/743/743424.png"/>
					</a>
					<a href='https://www.instagram.com/coach_natal/'>
					<img src="https://cdn-icons-png.flaticon.com/64/4500/4500180.png"/>
					</a>
					<a href='https://www.instagram.com/luizmarcelofleite/'>
					<img src="https://cdn-icons-png.flaticon.com/64/1074/1074766.png"/>
					</a>
					<img src="https://cdn-icons-png.flaticon.com/64/6288/6288826.png"/>
				</EquipeBOnecos>
		      <TextoFooter>
				 <lu>
			 <li>
				 <u>Suporte:</u> 080090201343
			</li>		 
			<li>
				<u>Duvidas</u> labeninja@gmail.com
			</li>
			<li>
				<u>Faça parte da equipe</u> equipeninja@gmail.com
			</li>
			
				 </lu>
					  
				  
			  </TextoFooter>
				 
			</FooterPai>
		)
	}
}