import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import App from '../App';


export default class Home extends React.Component {
	render() {
	  
	  return (
		<div>
		  <div>
		  < img src="https://labenu.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2a51ad96-d8b7-4df3-bf68-828d473c84ef%2Flabeninjas2.png?table=block&id=c22b9c9a-54d8-4d6e-935e-3931470828dc&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=740&userId=&cache=v2" />
		 <h3>pesquisar serviço</h3>
		  <input placeholder='pesquisar' />
		  <button>pesquisar</button>
		  </div>
		</div>
	  )
	}
  }