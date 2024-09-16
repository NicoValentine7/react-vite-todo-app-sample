import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@emotion/react';
import chakraEmotionCache from './chakraEmotionCache';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <CacheProvider value={chakraEmotionCache}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </CacheProvider>
  </React.StrictMode>
);
