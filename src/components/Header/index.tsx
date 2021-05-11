import { Flex, Text, Input, Icon } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      maxW={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      <Text fontSize='3xl' fontWeight='bold' letterSpacing='tight' w='64'>
        Dashgo
        <Text as='span' color='pink.500'>
          .
        </Text>
      </Text>

      <Flex
        as='label'
        flex='1'
        py='4'
        px='8'
        ml='6'
        maxW={400}
        alignSelf='center'
        color='gray.200'
        position='relative'
        bg='gray.800'
        borderRadius='full'
      >
        <Input
          color='gray.50'
          variant='unstyled'
          px='4'
          mx='4'
          placeholder='Busca na plataforma'
          _placeholder={{ color: 'gray.400' }}
        />
        <Icon fontSize={20} as={RiSearchLine} />
      </Flex>
    </Flex>
  );
}
