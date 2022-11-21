import { ComponentStyleConfig, ThemeComponents, ThemeOverride, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const IAnchorConfig: ComponentStyleConfig = {
  baseStyle: (props) => {
    const { colorScheme, theme } = props;
    const color = mode(theme.colors[colorScheme], theme.colors[colorScheme])(props);
    return {
      color: mode(color[600], color[200])(props),
      _hover: {
        color: mode(color[400], color[400])(props),
      },
    };
  },
  variants: {
    unset: (props) => {
      return {
        color: mode('inherit', 'inherit')(props),
      };
    },
  },
  defaultProps: {
    size: 'md',
    colorScheme: 'lime',
  },
};

const IAnchorTheme: ThemeOverride = {
  components: {
    Anchor: IAnchorConfig,
  },
};

type TAnchorTheme = typeof IAnchorTheme;

export const AnchorTheme = <TAnchorTheme>extendTheme(IAnchorTheme);

export const AnchorConfig = (AnchorTheme.components as ThemeComponents).Anchor;
