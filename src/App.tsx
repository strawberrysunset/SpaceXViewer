import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './theme'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { rem } from 'polished'
import { Header, HeroImage, LaunchTable } from './components'

// React query requires global provider for caching server state.
const queryCache = new QueryCache()

export const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ReactQueryCacheProvider queryCache={queryCache}>
          <PageWrapper>
            <Header />
            <Main>
              <StyledHeroImage />
              <LaunchTable />
            </Main>
          </PageWrapper>
        </ReactQueryCacheProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

const PageWrapper = styled.div`
  padding-left: ${rem(40.92)};
  padding-top: ${rem(32.7)};
  margin: 0 auto;
`

const Main = styled.main`
  max-width: ${rem(1400)};
  min-height: ${rem(800)};
  margin: ${rem(52)} auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
`

const StyledHeroImage = styled(HeroImage)`
  position: absolute;
  left: 0;
  top: ${rem(81.69)};
  z-index: -1;
  @media (max-width: ${rem(1200)}) {
    opacity: 0.5;
  }
`
