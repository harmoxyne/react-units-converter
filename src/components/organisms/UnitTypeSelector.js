import {
  useRadioGroup,
  VStack,
} from '@chakra-ui/react';
import RadioCard from '../atoms/RadioCard';

export default function UnitTypeSelector({options}) {
  const {getRootProps, getRadioProps} = useRadioGroup({
    name: 'units',
    defaultValue: options[0],
    onChange: console.log,
  });

  const group = getRootProps();

  return <VStack {...group}>
    {options.map((value) => {
      const radio = getRadioProps({value});
      return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
      );
    })}
  </VStack>;
}
