import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@emotion/react';
import { MantineProvider } from '@mantine/core';
import chakraEmotionCache from './chakraEmotionCache';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <CacheProvider value={chakraEmotionCache}>
      <ChakraProvider>
        <MantineProvider>
          <App />
        </MantineProvider>
      </ChakraProvider>
    </CacheProvider>
  </React.StrictMode>
);
