import React from 'react';
import Axios from 'axios';
import style from 'styled-components';
import  Carrinho  from './pages/Carrinho';
import  Header  from './components/Header';
import  Home  from './pages/Home';
import  Footer  from './components/Footer';
import  Contratacao  from './pages/Contratacao';
import  AddJob  from './pages/AddJob';
import  QuemSomos  from './pages/QuemSomos';


export default class App extends  React.Component {


	render() {
	  
	  return (
		<div>
		  
		 
		 <AddJob/>
		 
		  
		</div>
	  )
	}
  }
/* 
foto main junto com  o input de pesquisa

 <div>
		  < img src="https://labenu.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2a51ad96-d8b7-4df3-bf68-828d473c84ef%2Flabeninjas2.png?table=block&id=c22b9c9a-54d8-4d6e-935e-3931470828dc&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=740&userId=&cache=v2" />
		 <h3>pesquisar serviço</h3>
		  <input placeholder='pesquisar' />
		  <button>pesquisar</button>
		  </div>
		  */