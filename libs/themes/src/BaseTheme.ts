import { ThemeConfig, ThemeOverride, extendTheme, withDefaultColorScheme, withDefaultSize } from '@chakra-ui/react';

import { AnchorTheme, BoxTheme, ContainerTheme, HeadingTheme } from './core';
import { Breakpoints, GlobalStyle } from './config';
import { ButtonTheme, InputTheme, badgeTheme } from './components';
import { CheckboxTheme } from './forms';

import { BaseColors, ThemeColors } from './colors';

export const themeConfig: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

export const baseTheme = extendTheme(
  {
    config: themeConfig,
    colors: {
      ...BaseColors,
      ...ThemeColors,
    },
    fonts: {
      body: `'Fira Sans', sans-serif`,
      heading: `'Secular One', sans-serif`,
      mono: 'Menlo, monospace',
    },
    styles: {
      global: (props) => ({
        ...GlobalStyle(props),
      }),
    },
    breakpoints: Breakpoints,
  } as ThemeOverride,
  withDefaultColorScheme({ colorScheme: 'background' }),
  AnchorTheme,
  badgeTheme,
  ButtonTheme,
  BoxTheme,
  ContainerTheme,
  HeadingTheme,
  InputTheme,
  CheckboxTheme,
  // withDefaultVariant({ variant: 'profile', components: ['Badge'] }),
  withDefaultSize({ size: 'sm', components: ['Input', 'NumberInput', 'Select'] }),
  withDefaultSize({ size: 'lg', components: ['Heading'] }),
);

export type TBaseTheme = typeof baseTheme;
