import {Box, ChakraProvider, Flex} from '@chakra-ui/react';
import Footer from './components/organisms/Footer';
import Header from './components/molecules/Header';
import UnitsConverter from './components/organisms/UnitsConverter';

function App() {
  return (
      <ChakraProvider>
        <Box as={'main'}>
          <Flex
              direction={'column'}
              align={'center'}
              justify={'center'}
          >
            <Header/>
            <UnitsConverter/>
          </Flex>
        </Box>
        <Footer/>
      </ChakraProvider>
  );
}

export default App;
