import {Stack, StackDivider} from '@chakra-ui/react';
import UnitTypeSelector from './UnitTypeSelector';
import UnitsConverterForm from './UnitsConverterForm';

export default function UnitsConverter() {
  const unitTypes = ['Volume', 'Distance'];
  return <Stack spacing={8} direction={'row'} divider={<StackDivider/>}>
    <UnitTypeSelector options={unitTypes}/>
    <UnitsConverterForm/>
  </Stack>;
}
