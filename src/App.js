import {useEffect, useState} from 'react';
import './App.css';
import {Center, useColorMode, Box, Button, Grid, Flex, Spacer, Heading} from '@chakra-ui/react';
import best_move from './engine/best_move';
import check_win from './engine/check_win';
import game_over from './engine/game_over';

function App() {
  //const [state0, setState0] = useState(0);
  //const [state0, setState0] = useState(0);
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    if(colorMode === 'light')
      toggleColorMode();
  }, []);
  const[board, setBoard] = useState(new Array(9).fill(0));
//new Array(9).fill(0)
  function handleClick(id){
    if(board[id] === 0 && check_win(board) === 0){
        let newBoard = [...board];
        newBoard[id] = 1;
        if(check_win(newBoard) === 0 && game_over(newBoard) === 0){
          let move = best_move(newBoard);
          newBoard[move] = -1;
        }
        setBoard(newBoard);
    }
  }

  function displayStatus(){
    if(check_win(board) === 1)
      return "Player wins";
    else if(check_win(board) === -1)
      return "Machine wins";
    else if(game_over(board) === 1)
      return "It's a draw";
    return "Game in progress";
  }
  function fetchChar(code){
    if(code === 1)
      return 'X';
    else if(code === -1)
      return 'O';
    else
      return '';
  }
  function reset(){
    setBoard(new Array(9).fill(0));
  }
  return (
    <div className="App">
      <Flex>
        <Box w="15%" h="10"/>
        <Spacer />
        <Box w="70%" h="10"><Heading><Center>Lazy Tic-Tac-Toe</Center></Heading></Box>
        <Spacer />
        <Box w="15%" h="10"><Button colorScheme="teal" variant="outline" onClick={reset}>Reset</Button></Box>
      </Flex>
      <Center>
        <Grid templateColumns="repeat(3, 1fr)" gap={1} mt="250px">
          <Box w="80px" h="80px" color='#00000' bg='#00897B'><Button w="80px" h="80px" onClick={() => handleClick(0)}>{fetchChar(board[0])}</Button></Box>
          <Box w="80px" h="80px" color='#00000' bg='#00897B'><Button w="80px" h="80px" onClick={() =>handleClick(1)}>{fetchChar(board[1])}</Button></Box>
          <Box w="80px" h="80px" color='#00000' bg='#00897B'><Button w="80px" h="80px" onClick={() => handleClick(2)}>{fetchChar(board[2])}</Button></Box>
          <Box w="80px" h="80px" color='#00000' bg='#00897B'><Button w="80px" h="80px" onClick={() =>handleClick(3)}>{fetchChar(board[3])}</Button></Box>
          <Box w="80px" h="80px" color='#00000' bg='#00897B'><Button w="80px" h="80px" onClick={() => handleClick(4)}>{fetchChar(board[4])}</Button></Box>
          <Box w="80px" h="80px" color='#00000' bg='#00897B'><Button w="80px" h="80px" onClick={() =>handleClick(5)}>{fetchChar(board[5])}</Button></Box>
          <Box w="80px" h="80px" color='#00000' bg='#00897B'><Button w="80px" h="80px" onClick={() => handleClick(6)}>{fetchChar(board[6])}</Button></Box>
          <Box w="80px" h="80px" color='#00000' bg='#00897B'><Button w="80px" h="80px" onClick={() =>handleClick(7)}>{fetchChar(board[7])}</Button></Box>
          <Box w="80px" h="80px" color='#00000' bg='#00897B'><Button w="80px" h="80px" onClick={() => handleClick(8)}>{fetchChar(board[8])}</Button></Box>
        </Grid>
      </Center>
        <h1 color='#000000'>{displayStatus()}</h1>
        
    </div>
  );
}
export default App;
