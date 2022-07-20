import {Box, ChakraProvider, Flex} from '@chakra-ui/react';
import ToggleColorMode from './components/molecules/ToggleColorMode';
import Footer from './components/organisms/Footer';
import Header from './components/molecules/Header';
import UnitsConverterForm from './components/organisms/UnitsConverterForm';

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
            <UnitsConverterForm/>
          </Flex>
        </Box>
        <Footer/>
      </ChakraProvider>
  );
}

export default App;
