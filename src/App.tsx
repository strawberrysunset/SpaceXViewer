import React from 'react';
import styled, {ThemeProvider} from 'styled-components'
import {GlobalStyle, theme} from './theme'
import {QueryCache, ReactQueryCacheProvider} from 'react-query'
import {rem} from 'polished'

const queryCache = new QueryCache()

export const App = () => {
  return (
    <GlobalStyle>
      <ThemeProvider theme={theme}>
        <ReactQueryCacheProvider queryCache={queryCache}>
          <PageWrapper>
          </PageWrapper>
        </ReactQueryCacheProvider>
      </ThemeProvider>
    </GlobalStyle>
  );
}

const PageWrapper = styled.body`
  max-width: ${rem(1440)};
`
