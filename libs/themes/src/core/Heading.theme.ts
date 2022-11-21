import { ComponentStyleConfig, ThemeComponents, ThemeOverride, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const IHeadingConfig: ComponentStyleConfig = {
  baseStyle: (props) => {
    const { colorScheme, theme } = props;
    return {
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 'light',
      textDecoration: 'none',
      color: mode(theme.colors[colorScheme]?.[800], theme.colors[colorScheme]?.[100])(props),
    };
  },
  variants: {
    unset: () => ({
      color: 'unset',
    }),
    bold: {
      fontWeight: 'bold',
    },
    light: (props) => {
      const { colorScheme, theme } = props;
      return {
        color: mode(theme.colors[colorScheme]?.[400], theme.colors[colorScheme]?.[800])(props),
      };
    },
  },
  defaultProps: {
    colorScheme: 'primary',
  },
};

const IHeadingTheme: ThemeOverride = {
  components: {
    Heading: IHeadingConfig,
  },
};

type THeadingTheme = typeof IHeadingTheme;

export const HeadingTheme = <THeadingTheme>extendTheme(IHeadingTheme);

export const HeadingConfig = (HeadingTheme.components as ThemeComponents).Heading;
