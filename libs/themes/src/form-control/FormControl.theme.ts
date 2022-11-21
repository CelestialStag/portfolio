import { ComponentStyleConfig, ThemeComponents, ThemeOverride, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const IFormControlConfig: ComponentStyleConfig = {
  baseStyle: (props) => {
    const { colorScheme, theme } = props;
    return {
      color: 'red',
      '&>': {
        color: 'red',
      },
      backgroundColor: mode(theme.colors[colorScheme][600], theme.colors[colorScheme][600])(props) ?? 'inherit',
      '&:focus': {
        backgroundColor: mode(theme.colors[colorScheme][50], theme.colors[colorScheme][600])(props) ?? 'inherit',
      },
    };
  },
  variants: {
    unset: () => ({}),
    // filled: ({ props }) => {
    //   const { colorScheme, theme } = props;
    //   return {
    //     color: 'red',
    //     backgroundColor: mode(theme.colors[colorScheme][600], theme.colors[colorScheme][600])(props) ?? 'inherit',
    //     '&:focus': {
    //       backgroundColor: mode(theme.colors[colorScheme][50], theme.colors[colorScheme][600])(props) ?? 'inherit',
    //     },
    //   };
    // },
  },
  defaultProps: {
    colorScheme: 'background',
  },
};

const IFormControlTheme: ThemeOverride = {
  components: {
    Input: IFormControlConfig,
  },
};

type TFormControlTheme = typeof IFormControlTheme;

export const FormControlTheme = <TFormControlTheme>extendTheme(IFormControlTheme);

export const FormControlConfig = FormControlTheme.components as ThemeComponents;
