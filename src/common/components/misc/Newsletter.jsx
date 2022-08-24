import {
  Box,
  Button,
  Center,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  VStack,
  SimpleGrid,
  Divider
} from '@chakra-ui/react';
import { CheckCircleIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Newsletter = () => {
  return (
    <Box
      id={'newsletter'}
      p={{ base: 10, md: 20 }}
      mt={5}
      bgGradient={
        'linear( 83.2deg,  rgba(150,93,233,1) 10.8%, rgba(99,88,238,1) 94.3% )'
      }
    >
      <Center color={'white'}>
        <VStack>
          <Heading mb={4} textAlign={['center', null]}>
            Assine a Newsletter
            <Center>
              <Box my={2} w={'40%'} h={'5px'} bg={'brand.300'} />
            </Center>
          </Heading>
          {/* <SimpleGrid columns={[1, 1]} spacing={4} w={[null, '70%']}> */}
          <Box textAlign="center">
            <Center>
              <Heading size={'md'}>Semanalmente</Heading>
            </Center>
            <Divider my={2} />
            <List spacing={4} my={2}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} />
                Nunca perca uma atualização.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} />
                Receba artigos e trechos diretamente na sua caixa de entrada.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} />
                Inscreva-se para ficar conectado e evitar se perder entre milhões de sites.
              </ListItem>
            </List>
          </Box>
          {/* <Box>
              <Center>
                <Heading size={'md'}>Monthly</Heading>
              </Center>
              <Divider my={2} />
              <List spacing={4} my={2}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} />
                  Coming soon...
                </ListItem>
              </List>
            </Box> */}
          {/* </SimpleGrid> */}

          <Link href={process.env.NEXT_PUBLIC_SUBSTACK_URL} isExternal>
            <Button
              mt="4"
              rightIcon={<ChevronRightIcon />}
              bg={'brand.300'}
              color={'black'}
              _hover={{ bg: 'brand.300', opacity: 0.8 }}
              _active={{ bg: 'brand.300', opacity: 0.8 }}
            >
              Inscreva-se agora
            </Button>
          </Link>
        </VStack>
      </Center>
    </Box>
  );
};

export default Newsletter;
