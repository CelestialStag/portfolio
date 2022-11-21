import { Box as ChakraBox, BoxProps as ChakraBoxProps, chakra } from '@chakra-ui/react';
import { ReactNode, Ref, forwardRef } from 'react';
import { omit } from 'lodash';

export type BoxProps = Partial<ChakraBoxProps> & {
  children?: ReactNode;
  variant?: 'unset' | 'box';
};

const IBoxComponent = chakra<typeof ChakraBox, ChakraBoxProps>(ChakraBox, {
  baseStyle: {
    maxWidth: '100vw',
    padding: 0,
    margin: 0,
  },
});

const IBox = (props: ChakraBoxProps, ref: Ref<HTMLElement>) => {
  const { children } = props;
  return (
    <IBoxComponent ref={ref} fontFamily="Sora" {...omit(props, 'isDisabled')}>
      {children}
    </IBoxComponent>
  );
};

export const Box = forwardRef(IBox);
