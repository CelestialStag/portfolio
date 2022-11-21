import { ComponentStyleConfig, ThemeComponents, ThemeOverride, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const IButtonConfig: ComponentStyleConfig = {
  baseStyle: (props) => {
    const { colorScheme, theme } = props;
    return {
      // borderRadius: 'none',
      borderRadius: 'sm',
      borderColor: mode(theme.colors[colorScheme]?.[400], theme.colors[colorScheme]?.[200])(props) ?? 'inherit',
      svg: {
        _focus: {
          outline: 'none',
        },
        width: 16,
        height: 16,
      },
      _focus: {
        outline: 'none',
        boxShadow: 'none',
      },
    };
  },
  sizes: {
    xs: {
      height: 6,
    },
    sm: {
      height: 8,
    },
    md: {
      height: 12,
    },
    lg: {
      height: 16,
    },
  },
  defaultProps: {
    size: 'sm',
    colorScheme: 'whiteSmoke',
    variant: 'solid',
  },
};

const IButtonTheme: ThemeOverride = {
  components: {
    Button: IButtonConfig,
    CloseButton: IButtonConfig,
  },
};

type TButtonTheme = typeof IButtonTheme;

export const ButtonTheme = <TButtonTheme>extendTheme(IButtonTheme);

export const ButtonConfig = (ButtonTheme.components as ThemeComponents).Button;
