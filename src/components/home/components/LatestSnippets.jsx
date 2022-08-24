import { Box, Button, Center, Heading, Link, Wrap } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

import { SnippetCard } from '@/UIElements/index.js';

const LatestSnippets = ({ snippets }) => {
  return (
    <Box m={{ base: '5% 10%', '2xl': '5% 15%' }}>
      <Heading color={'brand.50'}>EXPLORE OS ÚLTIMOS SNIPPETS</Heading>
      <Wrap my={6}>
        {snippets.map((snippet) => {
          return <SnippetCard key={snippet.id} snippet={snippet} />;
        })}
      </Wrap>
      <Center>
        <NextLink href={'/snippets'} passHref>
          <Link textDecor={'none'} tabIndex={-1}>
            <Button rightIcon={<ChevronRightIcon />} bgColor={'transparent'}>
              Navegue por todos os snippets
            </Button>
          </Link>
        </NextLink>
      </Center>
    </Box>
  );
};

export default LatestSnippets;
