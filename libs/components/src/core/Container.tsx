import {
  BoxProps as ChakraBoxProps,
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
  chakra,
} from '@chakra-ui/react';
import { ReactNode, Ref, forwardRef } from 'react';

import { ContainerConfig } from '@lib/themes';

export type ContainerProps = Partial<ChakraContainerProps & ChakraBoxProps> & {
  children?: ReactNode;
  variant?: 'unset' | 'container' | 'box';
};

const IContainerComponent = chakra<typeof ChakraContainer, ChakraContainerProps>(ChakraContainer);

const IContainer = (props: ChakraContainerProps, ref: Ref<HTMLElement>) => {
  const { children } = props;
  return (
    <IContainerComponent ref={ref} fontFamily="Fira Sans" {...props} styleConfig={ContainerConfig}>
      {children}
    </IContainerComponent>
  );
};

export const Container = forwardRef(IContainer);
