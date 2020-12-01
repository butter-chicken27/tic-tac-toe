import {useEffect, useState} from 'react';
import './App.css';
import {Center, useColorMode, Box, Button, Grid} from '@chakra-ui/react';


function App() {
  const [text, setText] = useState(0);
  const { colorMode, toggleColorMode } = useColorMode()
  useEffect(() => {
    if(colorMode === 'light')
      toggleColorMode();
  }, []);
  function handleClick(){
    setText(prevText => {if(prevText === 1)
    return 0;
    return 1;
  });
  }
  return (
    <div className="App">
      <Center>
        <Grid templateColumns="repeat(3, 1fr)" gap={1}>
          <Box w="64px" h="64px" color='#00000' bg='#6200EA'><Button w="64px" h="64px" onClick={handleClick}>{text}</Button></Box>
          <Box w="64px" h="64px" color='#00000' bg='#6200EA'><Button w="64px" h="64px" onClick={handleClick}>{text}</Button></Box>
          <Box w="64px" h="64px" color='#00000' bg='#6200EA'><Button w="64px" h="64px" onClick={handleClick}>{text}</Button></Box>
          <Box w="64px" h="64px" color='#00000' bg='#6200EA'><Button w="64px" h="64px" onClick={handleClick}>{text}</Button></Box>
          <Box w="64px" h="64px" color='#00000' bg='#6200EA'><Button w="64px" h="64px" onClick={handleClick}>{text}</Button></Box>
          <Box w="64px" h="64px" color='#00000' bg='#6200EA'><Button w="64px" h="64px" onClick={handleClick}>{text}</Button></Box>
          <Box w="64px" h="64px" color='#00000' bg='#6200EA'><Button w="64px" h="64px" onClick={handleClick}>{text}</Button></Box>
          <Box w="64px" h="64px" color='#00000' bg='#6200EA'><Button w="64px" h="64px" onClick={handleClick}>{text}</Button></Box>
          <Box w="64px" h="64px" color='#00000' bg='#6200EA'><Button w="64px" h="64px" onClick={handleClick}>{text}</Button></Box>
        </Grid>
      </Center>
    </div>
  );
}

export default App;
