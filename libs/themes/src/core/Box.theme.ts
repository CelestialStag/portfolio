import { ComponentStyleConfig, ThemeComponents, ThemeOverride, extendTheme } from '@chakra-ui/react';

const IBoxConfig: ComponentStyleConfig = {
  baseStyle: () => {
    return {};
  },
  variants: {},
  defaultProps: {},
};

const IBoxTheme: ThemeOverride = {
  components: {
    Box: IBoxConfig,
  },
};

type TBoxTheme = typeof IBoxTheme;

export const BoxTheme = <TBoxTheme>extendTheme(IBoxTheme);

export const BoxConfig = (BoxTheme.components as ThemeComponents).Box;
