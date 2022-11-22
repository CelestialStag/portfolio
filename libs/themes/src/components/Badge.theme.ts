import {
  ComponentStyleConfig,
  ThemeComponents,
  ThemeOverride,
  // defineStyle,
  defineStyleConfig,
  extendTheme,
} from '@chakra-ui/react';

const badgeStyle: ComponentStyleConfig = defineStyleConfig({
  sizes: {
    xs: {
      fontSize: 8,
    },
  },
  defaultProps: {
    colorScheme: 'emerald',
  },
});

const badgeThemeOverride: ThemeOverride = {
  components: {
    Badge: badgeStyle,
  },
};

type IBadgeTheme = typeof badgeThemeOverride;

export const badgeTheme = <IBadgeTheme>extendTheme(badgeThemeOverride);

export const badgeConfig = (badgeTheme.components as ThemeComponents).Badge;
