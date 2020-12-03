import { CSSProp } from 'styled-components';
import theme from './index';

// Get type from user defined theme and set it as the default styled-components theme interface.
declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject,
    as?: string,
    [x: string]: any 
  }
}

