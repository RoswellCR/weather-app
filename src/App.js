import React from 'react';
import styled,{keyframes} from 'styled-components';
import './styles.css';
import {colorPrincipal} from './colors'




const Header = styled.header 
`background:${colorPrincipal};
text-align: center;
padding:0.3em;
margin:0.3em;
`
const pulse = keyframes`
0% {
  transform: scale(1);
  background: gray;
  color: #000;
}
50% {
  transform: scale(1.3);
  background: purple;
  color: #FFF;
}
100% {
  transform: scale(1);
  background: gray;
  color: #000;
}
`

const Button = styled.button`
margin: 1em 2em;
padding: 1em;
&:hover{
  animation: ${pulse} 2s ease-in-out;
}
`

function App() {
  return (
    
        <div>
          
          <Header>
          
           <h1>Styled component</h1>
            
          </Header>
          
          <Button>Button</Button>

        </div>
    
  );
}

export default App;
