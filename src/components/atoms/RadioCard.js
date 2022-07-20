import {Box, useRadio, useColorModeValue} from '@chakra-ui/react';

export default function RadioCard(props) {
  const {getInputProps, getCheckboxProps} = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
      <Box as="label">
        <input {...input} />
        <Box
            {...checkbox}
            cursor="pointer"
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            _checked={{
              bg: useColorModeValue('gray.800', 'gray.500'),
              color: 'white',
              borderColor: useColorModeValue('gray.800', 'gray.500'),
            }}
            _focus={{
              boxShadow: 'outline',
            }}
            px={5}
            py={3}
        >
          {props.children}
        </Box>
      </Box>
  );
}
