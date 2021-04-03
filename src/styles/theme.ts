import { DefaultTheme } from 'styled-components';

// defaultTheme 즉 styled.d.ts에서 만든 interface 기반을 스타일 정의
// 참고 : https://flowkater.io/frontend/setup-styled-components/
// 참고 : https://velog.io/@hwang-eunji/styled-component-typescript
const theme: DefaultTheme = {
  basicWidth: '320px',
  color: {
    main: '#1c1f25',
    sub: '#fff'
  }
};

export { theme };
