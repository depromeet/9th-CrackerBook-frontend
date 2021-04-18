import "styled-components";
// interface
// 참고 : https://flowkater.io/frontend/setup-styled-components/
// 참고 : https://velog.io/@hwang-eunji/styled-component-typescript
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
    };
    fontSizes: string[];
    secondaryColors;
    media: Media;
  }
}
