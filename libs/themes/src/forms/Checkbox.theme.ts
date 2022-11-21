import { ComponentStyleConfig, ThemeComponents, ThemeOverride, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const ICheckboxConfig: ComponentStyleConfig = {
  baseStyle: (props) => {
    const { colorScheme, theme } = props;
    const color = mode(theme.colors[colorScheme], theme.colors[colorScheme])(props);
    return {
      control: {
        borderColor: mode(color[200], color[200])(props) ?? 'inherit',
        backgroundColor: 'transparent',
      },
    };
  },
  variants: {
    solid: (props) => {
      const { colorScheme, theme } = props;
      const color = mode(theme.colors[colorScheme], theme.colors[colorScheme])(props);
      return {
        control: {
          borderColor: mode(color[400], color[400])(props) ?? 'inherit',
          backgroundColor: mode(color[200], color[200])(props) ?? 'inherit',

          _checked: {
            borderColor: mode(color[400], color[400])(props) ?? 'inherit',
            backgroundColor: mode(color[400], color[400])(props) ?? 'inherit',

            _disabled: {
              borderColor: mode('whiteSmoke.200', 'whiteSmoke.200')(props) ?? 'inherit',
              backgroundColor: mode('whiteSmoke.200', 'whiteSmoke.200')(props) ?? 'inherit',
            },
          },

          _disabled: {
            borderColor: mode('whiteSmoke.200', 'whiteSmoke.200')(props) ?? 'inherit',
            backgroundColor: mode('whiteSmoke.200', 'whiteSmoke.200')(props) ?? 'inherit',
          },
        },
      };
    },
  },
  defaultProps: {
    variant: 'solid',
    colorScheme: 'lime',
  },
};

const ICheckboxTheme: ThemeOverride = {
  components: {
    Checkbox: ICheckboxConfig,
  },
};

type TCheckboxTheme = typeof ICheckboxTheme;

export const CheckboxTheme = <TCheckboxTheme>extendTheme(ICheckboxTheme);

export const CheckboxConfig = (CheckboxTheme.components as ThemeComponents).Checkbox;
