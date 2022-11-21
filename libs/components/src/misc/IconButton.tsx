import { IconButton as ChakraIconButton, IconButtonProps as ChakraIconButtonProps, chakra } from '@chakra-ui/react';
import { ReactNode, Ref, forwardRef } from 'react';

import { IconButtonConfig } from '@lib/themes';

export type IconButtonProps = Partial<ChakraIconButtonProps> & {
  children?: ReactNode;
};

const IIconButtonComponent = chakra<typeof ChakraIconButton, IconButtonProps>(ChakraIconButton);

const IIconButton = (props: IconButtonProps, ref: Ref<Element>) => {
  return (
    <IIconButtonComponent ref={ref} {...props} styleConfig={IconButtonConfig}>
      {props.children}
    </IIconButtonComponent>
  );
};

export const IconButton = forwardRef(IIconButton);
