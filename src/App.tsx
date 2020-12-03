import React from 'react';
import styled, {ThemeProvider} from 'styled-components'
import {GlobalStyle, theme} from './theme'
import {QueryCache, ReactQueryCacheProvider} from 'react-query'
import {rem} from 'polished'
import {Header, HeroImage, LaunchTable} from './components';

// React query requires global provider for caching server state.
const queryCache = new QueryCache()

export const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <ReactQueryCacheProvider queryCache={queryCache}>
           <PageWrapper>
            <Header />
            <MainWrapper>
              <HeroImage/>
              <LaunchTable/>
            </MainWrapper>
          </PageWrapper> 
        </ReactQueryCacheProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

const PageWrapper = styled.div`
  max-width: ${rem(1440)};
  padding-left: ${rem(40.92)};
  padding-top: ${rem(32.7)};
  margin: 0 auto;
`

const MainWrapper = styled.main`
  margin: ${rem(52)} auto;
  padding: 0 ${rem(80)};
  display: flex;
  align-items: flex-start;
`
