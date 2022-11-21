import { ComponentStyleConfig, ThemeComponents, ThemeOverride, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const IContainerConfig: ComponentStyleConfig = {
  baseStyle: (props) => {
    const { colorScheme, theme } = props;
    return {
      maxWidth: 'full',
      paddingX: 8,
      paddingY: 4,
      borderRadius: 'none',
      ...(colorScheme && {
        backgroundColor: mode(theme.colors[colorScheme][50], theme.colors[colorScheme][800])(props) ?? 'inherit',
      }),
      '@media (min-width: 768px)': {
        paddingX: 16,
      },
    };
  },
  variants: {
    unset: () => ({
      backgroundColor: 'unset',
    }),
    ghost: () => ({
      shadow: 'none',
      backgroundColor: 'none',
    }),
  },
  sizes: {
    md: () => ({
      maxWidth: 1280,
    }),
    lg: () => ({
      maxWidth: 1366,
    }),
  },
  defaultProps: {
    size: 'md',
  },
};

const IContainerTheme: ThemeOverride = {
  components: {
    Container: IContainerConfig,
  },
};

type TContainerTheme = typeof IContainerTheme;

export const ContainerTheme = <TContainerTheme>extendTheme(IContainerTheme);

export const ContainerConfig = (ContainerTheme.components as ThemeComponents).Container;
