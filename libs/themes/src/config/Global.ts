import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools';

export const GlobalStyle = (props: StyleFunctionProps) => ({
  body: {
    minHeight: '100vh',
    color: mode('body.600', 'body.50')(props),
    background: mode('background.100', 'background.800')(props),
    lineHeight: 'base',
  },
});
