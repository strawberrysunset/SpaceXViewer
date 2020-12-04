import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { colors } from './colors'
import { fonts } from './fonts'
import { typeScale } from './typeScale'
import '../assets/font/fonts.css' // Import all fonts.

export const theme = {
  typeScale,
  colors,
  fonts,
}

export const GlobalStyle = createGlobalStyle`

    // Account for browser inconsistencies.
    ${normalize()}

    // Remove default margin and padding. 
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }


    // Set default values for document.
    body {
        color: ${colors.neutral[100]};
        font-family: ${fonts.default};
        font-size: ${typeScale[100]};
        background: ${colors.neutral[300]};

    }


   
    
`
