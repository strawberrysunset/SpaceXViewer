import {createGlobalStyle} from 'styled-components'
import {normalize} from 'polished'
import {colors} from './colors'
import {fonts} from './fonts'
import {typeScale} from './typeScale'

export const theme = {
    typeScale,
    colors,
    fonts
}

export const GlobalStyle = createGlobalStyle`

    // Account for browser inconsistencies.
    ${normalize()}

    // Set default values for document.
    color: ${colors.neutral[100]};
    font-family: ${fonts.default};
    font-size: ${typeScale[100]};

    // Load all relevant fonts.
    @font-face {
        font-family: 'Brandon Grotesque';
        src: url('../assets/font/BrandonGrotesque-Bold.woff2') format('woff2'),
            url('../assets/font/BrandonGrotesque-Bold.woff') format('woff'),
            url('../assets/font/BrandonGrotesque-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'Brandon Grotesque';
        src: url('../assets/font/BrandonGrotesque-Regular.woff2') format('woff2'),
            url('../assets/font/BrandonGrotesque-Regular.woff') format('woff'),
            url('../assets/font/BrandonGrotesque-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Brandon Grotesque';
        src: url('../assets/font/BrandonGrotesque-RegularItalic.woff2') format('woff2'),
            url('../assets/font/BrandonGrotesque-RegularItalic.woff') format('woff'),
            url('../assets/font/BrandonGrotesque-RegularItalic.ttf') format('truetype');
        font-weight: normal;
        font-style: italic;
    }

    @font-face {
        font-family: 'Brandon Grotesque';
        src: url('../assets/font/BrandonGrotesque-Black.woff2') format('woff2'),
            url('../assets/font/BrandonGrotesque-Black.woff') format('woff'),
            url('../assets/font/BrandonGrotesque-Black.ttf') format('truetype');
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: 'Brandon Grotesque';
        src: url('../assets/font/BrandonGrotesque-Medium.woff2') format('woff2'),
            url('../assets/font/BrandonGrotesque-Medium.woff') format('woff'),
            url('../assets/font/BrandonGrotesque-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
    }
`

