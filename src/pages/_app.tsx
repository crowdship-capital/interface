import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from '@/components/Layout';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { onboard } from '@/connectors';
import theme from '@/theme/theme';

import '@/styles/global.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/700.css';
import '@fontsource/dm-mono/500.css';

const client = new ApolloClient({
  uri: 'http://localhost:8000/subgraphs/name/carterax/crowdship',
  cache: new InMemoryCache(),
});

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // cache wallet selection
    const walletSelection = async () => {
      const previouslySelectedWallet =
        window.localStorage.getItem('selectedWallet');

      if (previouslySelectedWallet != 'undefined')
        await onboard.walletSelect(previouslySelectedWallet || '');
    };
    walletSelection();
  });

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default App;
