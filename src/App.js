import React from 'react';
import { ApolloProvider } from '@apollo/client';
import JungsoftPage from './pages/Jungsoft';
import client from './services';

function App() {
  return (
    <ApolloProvider client={client}>
      <JungsoftPage />
    </ApolloProvider>
  );
}

export default App;
