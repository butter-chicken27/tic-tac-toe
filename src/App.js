import {useEffect, useState} from 'react';
import './App.css';
import {Center, useColorMode, Box, Button, Flex, Spacer, Heading} from '@chakra-ui/react';
import Game from './components/game.js';
import Leaderboard from './components/leaderboard.js';

function App() {
  const [buttonText, setText] = useState("Leaderboard");
  const [mode,setMode] = useState(0);
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    if(colorMode === 'light')
      toggleColorMode();
  }, []);
  function handleClick(){
    if(mode === 0){
      setMode(1);
      setText("Game");
    }
    else{
      setMode(0);
      setText("Leaderboard");
    }
  }
    if(mode === 0){
    return (
    <div className="App">
        <Flex>
          <Spacer />
          <Box w="15%" h="10"/>
          <Box w="70%" h="10"><Heading><Center>Lazy Tic-Tac-Toe</Center></Heading></Box>
          <Box w="15%" h="10"><Button colorScheme="teal" variant="outline" onClick={handleClick}>{buttonText}</Button></Box>
          <Spacer/>
        </Flex>
        <Game />
      </div>
    );
  }
  else{
    return(
      <div>
        <Flex>
          <Spacer />
          <Box w="15%" h="10"/>
          <Box w="70%" h="10"><Heading><Center>Lazy Tic-Tac-Toe</Center></Heading></Box>
          <Box w="15%" h="10"><Button colorScheme="teal" variant="outline" onClick={handleClick}>{buttonText}</Button></Box>
          <Spacer/>
        </Flex>
        <Leaderboard />        
      </div>
    )
  }
}
export default App;
