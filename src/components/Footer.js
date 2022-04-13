import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';




export default function TextButtons() {
	

	
  return (
    <Stack direction="row" spacing={8} margin={4}>
     
	 <img src="https://cdn-icons-png.flaticon.com/64/409/409334.png" />
	 <img src ="https://cdn-icons-png.flaticon.com/64/743/743424.png" />
	 <img src ="https://cdn-icons-png.flaticon.com/64/4500/4500180.png" />
	 <img src ="https://cdn-icons-png.flaticon.com/64/1149/1149378.png" />
	 <img src ="https://cdn-icons-png.flaticon.com/64/656/656626.png" />
	 
	  
	  <Button variant="contained">Chat</Button>
	  <Button variant="contained">Email</Button>
	  <Button variant="contained">Quem Somos</Button>
	  <Button variant="contained" >Faq</Button>
    </Stack>
  );
}