import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import useSSR from 'use-ssr'
import { useState, useEffect } from 'react'

import { client } from '@/utils/index.js';
import theme from '../theme';
import '../styles/globals.css';
import Fonts from '../theme/Fonts';

function ClientSideRenderedNextJS({ children }) {
  const [domLoaded, setDomLoaded] = useState(false)
  
  useEffect(() => {
    setDomLoaded(true)
  }, [])

  const { isServer } = useSSR()
  if (!domLoaded) return null
  if (isServer) return <></>

  return children
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Fonts />
        {/* <Component {...pageProps} /> */}
        <ClientSideRenderedNextJS>
          <Component {...pageProps} />
        </ClientSideRenderedNextJS>
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default MyApp;
