import { ComponentStyleConfig, ThemeComponents, ThemeOverride, extendTheme } from '@chakra-ui/react';

const IInputConfig: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 'md',
  },
  variants: {},
  defaultProps: {
    size: 'sm',
  },
};

const IInputTheme: ThemeOverride = {
  components: {
    Input: IInputConfig,
    Select: IInputConfig,
    NumberInput: IInputConfig,
  },
};

type TInputTheme = typeof IInputTheme;

export const InputTheme = <TInputTheme>extendTheme(IInputTheme);

export const InputConfig = (InputTheme.components as ThemeComponents).Input;
