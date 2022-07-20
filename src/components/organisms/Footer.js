import React from 'react';
import {Flex} from '@chakra-ui/react';
import ToggleColorMode from '../molecules/ToggleColorMode';
import SocialLinks from '../molecules/SocialLinks';

export default function Footer() {
  return <footer>
    <Flex
        direction={'column'}
        justifyContent={'space-between'}
        alignItems={'center'}
        mt={10}
    >
      <ToggleColorMode/>
      <p>
        Units conversion rules provided by&nbsp;<a
          href={'https://www.isa.org/getmedia/192f7bda-c77c-480a-8925-1a39787ed098/CCST-Conversions-document.pdf'}>ISA</a>
      </p>
      <SocialLinks/>
    </Flex>
  </footer>;
}


