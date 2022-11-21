import { BoxProps, chakra } from '@chakra-ui/react';
import { ReactNode, Ref, forwardRef } from 'react';

import { Box } from '.';

export type TextProps = Partial<BoxProps> & {
  children?: ReactNode;
  subText?: string;
};

const ITextComponent = chakra<typeof Box, TextProps>(Box, {
  baseStyle: {},
});

const IText = (props: TextProps, ref: Ref<HTMLElement>) => {
  const { children } = props;
  return (
    <ITextComponent ref={ref} fontFamily="Sora" {...props}>
      {children}
    </ITextComponent>
  );
};

export const Text = forwardRef(IText);
