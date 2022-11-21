import { ComponentStyleConfig, ThemeComponents, ThemeOverride, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const IBadgeConfig: ComponentStyleConfig = {
  baseStyle: (props) => {
    const { colorScheme, theme } = props;
    return {
      bgColor: mode(theme.colors[colorScheme]?.[600], theme.colors[colorScheme]?.[400])(props),
      borderRadius: 'sm',
    };
  },
  sizes: {
    xs: {
      fontSize: 8,
    },
  },
};

const IBadgeTheme: ThemeOverride = {
  components: {
    Badge: IBadgeConfig,
  },
};

type TBadgeTheme = typeof IBadgeTheme;

export const BadgeTheme = <TBadgeTheme>extendTheme(IBadgeTheme);

export const BadgeConfig = (BadgeTheme.components as ThemeComponents).Badge;
