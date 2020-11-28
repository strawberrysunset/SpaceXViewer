import React from 'react';
import styled, {ThemeProvider} from 'styled-components'
import {GlobalStyle, theme} from './theme'
import {rem} from 'polished'

export const App = () => {
  return (
    <GlobalStyle>
      <ThemeProvider theme={theme}>
        <PageWrapper>
        </PageWrapper>
      </ThemeProvider>
    </GlobalStyle>
  );
}

const PageWrapper = styled.body`
  max-width: ${rem(1440)};
`
