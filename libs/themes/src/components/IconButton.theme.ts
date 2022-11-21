import { ComponentStyleConfig, ThemeComponents, ThemeOverride, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const IIconButtonConfig: ComponentStyleConfig = {
  baseStyle: (props) => {
    const { colorScheme, theme } = props;
    const color = mode(theme.colors[colorScheme], theme.colors[colorScheme])(props);
    return {
      padding: 1,
      borderRadius: 'none',
      color: mode(color[400], color[400])(props),
      backgroundColor: mode(color[200], color[200])(props),
      _focusVisible: {
        outline: 'none',
      },
      _active: {
        color: mode(color[200], color[200])(props),
        backgroundColor: mode(color[800], color[800])(props),
      },
      _hover: {
        color: mode(color[200], color[200])(props),
        backgroundColor: mode(color[600], color[600])(props),
      },
    };
  },
  variants: {
    unstyled: (props) => {
      const { colorScheme, theme } = props;
      const color = mode(theme.colors[colorScheme], theme.colors[colorScheme])(props);
      return {
        cursor: 'inherit',
        color: mode(color[400], color[400])(props),
        background: 'none',
        _active: {
          color: mode(color[400], color[400])(props),
          background: 'none',
        },
        _hover: {
          color: mode(color[400], color[400])(props),
          background: 'none',
        },
      };
    },
    ghost: (props) => {
      const { colorScheme, theme } = props;
      const color = mode(theme.colors[colorScheme], theme.colors[colorScheme])(props);
      return {
        color: mode(color[400], color[400])(props),
        background: 'none',
        _active: {
          color: mode(color[600], color[600])(props),
          background: 'none',
        },
        _hover: {
          color: mode(color[200], color[200])(props),
          background: 'none',
        },
      };
    },
    ghostInvert: (props) => {
      const { colorScheme, theme } = props;
      const color = mode(theme.colors[colorScheme], theme.colors[colorScheme])(props);
      return {
        color: mode(color[800], color[800])(props),
        background: 'none',
        _active: {
          color: mode(color[600], color[600])(props),
          background: 'none',
        },
        _hover: {
          color: mode(color[200], color[200])(props),
          background: 'none',
        },
      };
    },
  },
  sizes: {
    xs: {
      width: 6,
      height: 6,
      svg: {
        width: 6,
        height: 6,
      },
    },
    sm: {
      width: 8,
      height: 8,
      svg: {
        width: 8,
        height: 8,
      },
    },
    md: {
      boxSize: 14,
      width: 14,
      height: 14,
      svg: {
        width: 14,
        height: 14,
      },
    },
    lg: {
      boxSize: 24,
      width: 24,
      height: 24,
      svg: {
        width: 24,
        height: 24,
      },
    },
  },
  defaultProps: {
    size: 'sm',
    colorScheme: 'lime',
  },
};

const IIconButtonTheme: ThemeOverride = {
  components: {
    Button: IIconButtonConfig,
    CloseButton: IIconButtonConfig,
    Menu: IIconButtonConfig,
  },
};

type TIconButtonTheme = typeof IIconButtonTheme;

export const IconButtonTheme = <TIconButtonTheme>extendTheme(IIconButtonTheme);

export const IconButtonConfig = (IconButtonTheme.components as ThemeComponents).Button;
