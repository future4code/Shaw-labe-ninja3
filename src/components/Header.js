import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={28}  direction="row" >
      <img  src='https://cdn-icons-png.flaticon.com/64/1074/1074766.png'/>
	  
      <Button variant="contained">Seja um ninja</Button>
	  
      <Button variant="contained">Quem Somos</Button>
	  <Button variant="contained">Contrata um ninja</Button>
    </Stack>
  );
}
