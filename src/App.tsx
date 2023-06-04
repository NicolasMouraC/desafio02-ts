import { 
  Center,
  ChakraProvider,
  Input,
  Box
} from '@chakra-ui/react'
import { login } from './services/login';
import { Layout } from './components/Layout';
import { Button } from './components/Button';
import { Card } from './components/Card';

function App() {
  return (
    <Layout>
      <ChakraProvider>
        <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
          <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
            <Card />
            <Button onClick={login}/>              
          </Box>
        </Box>
      </ChakraProvider>
    </Layout>
  );
}

export default App;
