import React from 'react';
import {useState} from 'react';
import best_move from '../engine/best_move';
import {Center, Box, Button, Grid, Input} from '@chakra-ui/react';
import check_win from '../engine/check_win';
import game_over from '../engine/game_over';
import axios from 'axios';

function Game(){
    const [intervalID, setID] = useState(0);
    const [time, updateTime] = useState(0);
    const[board, setBoard] = useState(new Array(9).fill(0));
    const [value, setValue] = React.useState("");
    const handleChange = (event) => setValue(event.target.value);
    function update(){
        if(game_over(board) === 0)
          updateTime(prev => prev + 1);
      }
      function handleClick(id){
        if(board[id] === 0 && check_win(board) === 0){
            if(intervalID === 0)
              setID(setInterval(update, 10));
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
        if(check_win(board) === 1){
          clearInterval(intervalID);
          return "Player wins";
        }
        else if(check_win(board) === -1){
          clearInterval(intervalID);
          return "Machine wins";
        }
        else if(game_over(board) === 1){
          clearInterval(intervalID);
          return "It's a draw";
        }
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
        clearInterval(intervalID);
        setID(0);
        updateTime(0);
        setBoard(new Array(9).fill(0));
      }
      function showTime(){
        let mili = time % 100;
        let seconds = time - mili;
        seconds = seconds / 100;
        return seconds + "." + mili;
      }
      function handleSubmit(){
        const resp = {
          "name": value,
          "time": (time * 1.0)/100.0
        };
        axios.post('http://54.85.42.182:3000/posts', resp).then(
          res => {
            console.log(res);
          }
        ).catch(err => {
          console.log(err);
        })
      }
      return(
        <div>
          <Center mt="200px">
            <Box w="15%" h="10"><Button colorScheme="teal" variant="outline" onClick={reset}>Reset</Button></Box>
          </Center>
          <Center>
            <Grid templateColumns="repeat(3, 1fr)" gap={1} mt="20px">
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
          <h2 color='#000000'>{showTime()}</h2>
          <div>
            {game_over(board) !== 0 ? <Center>
                <Input w="20%" h="10"
                  value={value}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  size="sm"
                />
                <Box w="10%" h="10"><Button colorScheme="teal" variant="outline" onClick={handleSubmit}>Submit Score</Button></Box>
            </Center> : null}
          </div>
        </div>
      );
}
export default Game;