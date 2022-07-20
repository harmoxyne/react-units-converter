import {
  Box,
  Center,
  IconButton,
  Input,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import {UpDownIcon} from '@chakra-ui/icons';

export default function UnitsConverterForm() {
  const {colorMode} = useColorMode();

  return <Stack
      backgroundColor={colorMode === 'dark' ? 'gray.800' : 'white'}
      borderRadius={10}
      px={15}
      pt={[8, 10]}
      pb={4}
      spacing={5}
      shadow={[null, 'lg']}
      width={['auto', '500px']}
  >
    <Box>
      <Input placeholder={'Amount'}/>
    </Box>
    <Box ml={1}>
      <Input placeholder={'From'}/>
    </Box>

    <Center>
      <IconButton
          aria-label={'Swap units'}
          variant={'ghost'}
          icon={<UpDownIcon/>}
          onClick={() => {}}
      />
    </Center>

    <Box ml={1}>
      <Input placeholder={'To'}/>

    </Box>

    <Box>
      <p>result</p>
    </Box>
  </Stack>;
}
