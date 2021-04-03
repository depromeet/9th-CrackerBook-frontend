import 'styled-components';

// interface라고 생각하면 된다.
// 참고 : https://flowkater.io/frontend/setup-styled-components/
// 참고 : https://velog.io/@hwang-eunji/styled-component-typescript
declare module 'styled-components' {
  export interface DefaultTheme {
    basicWidth: string;
    color: {
      main: string;
      sub: string;
    };
  }
}
