// 07 DEC 2021 Hai Tran 
// Setup nextjs, chakra-ui, typescript 
import {Button, Flex, Heading, Input, useColorMode, useColorModeValue} from '@chakra-ui/react'; 

const Home = () => {

  const {_, toggleColorMode} = useColorMode()
  const formBackground = useColorModeValue('gray.100', 'gray.700')

  return (
    <Flex
      height='100vh'
      alignItems='center'
      justifyContent='center'
    >
      <Flex
        direction='column'
        background={formBackground}
        p={12}
        rounded={6}
      >
        <Heading
          mb={6}
        >
          Log in 
        </Heading>
        <Input
          placeholder='hai@bio-rithm.com'
          variant='filled'
          mb={3}
          type='email'
        >
        </Input>
        <Input
          placeholder='password'
          variant='filled'
          mb={6}
          type='password'
        >
        </Input>
        <Button

          colorScheme='teal'
          mb={6}
        >
          Log in 
        </Button>
        <Button
          onClick={() => {
            console.log('theme toggle')
            toggleColorMode()
          }}
        >
          Toggle theme
        </Button>
      </Flex>
    </Flex>
  ); 
}

export default Home; 
