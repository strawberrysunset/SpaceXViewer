import {createGlobalStyle} from 'styled-components'
import {normalize} from 'polished'
import {colors} from './colors'
import {fonts} from './fonts'
import {typeScale} from './typeScale'
import '../assets/font/fonts.css' // Import all fonts.


export const theme = {
    typeScale,
    colors,
    fonts
}

export const GlobalStyle = createGlobalStyle`

    // Account for browser inconsistencies.
    ${normalize()}

    // Remove default margin and padding. 
    * {
        margin: 0;
        padding: 0;
    }

    // Set default values for document.
    body {
        color: ${colors.neutral[100]};
        font-family: ${fonts.default};
        font-size: ${typeScale[100]};
    }
    
`

