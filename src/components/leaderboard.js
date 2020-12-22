import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {VStack, Box, StackDivider, Center, HStack, Text} from '@chakra-ui/react';

function Leaderboard(){
    const [posts, setPosts] = useState([]);
    axios.get('http://54.85.42.182:3000/posts').then(
        response => {
            console.log(response);
            setPosts(response.data);
        })
        .catch(error => {
            console.log(error);
        })
      return (
          <div>
              <Center mt="200px">
              <Text fontSize="lg">Scoreboard</Text>
              </Center>
              <Center>
              <VStack
              mt="40px"
              w="30%"
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
              >
                  {
                    posts.map(post => <HStack><Box w="90%">{post.name}</Box><Box w="10%">{post.time}</Box></HStack>)
                  }
              </VStack>
            </Center>
            </div>
      )
}
export default Leaderboard;