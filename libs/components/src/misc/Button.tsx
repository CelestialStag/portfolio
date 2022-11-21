import { Button as ChakraButton, ButtonProps as ChakraButtonProps, chakra } from '@chakra-ui/react';
import { ReactNode, Ref, forwardRef } from 'react';
import _ from 'lodash';

import { ButtonConfig } from '@lib/themes';

export type ButtonProps = Partial<ChakraButtonProps> & {
  children?: ReactNode;
};

const IButtonComponent = chakra<typeof ChakraButton, ButtonProps>(ChakraButton);

const IButton = (props: ButtonProps, ref: Ref<Element>) => {
  const { children } = props;
  const button_text = typeof children === 'string' ? _.upperCase(children) : children;
  return (
    <IButtonComponent ref={ref} {...props} styleConfig={ButtonConfig}>
      {button_text === '' ? children : button_text}
    </IButtonComponent>
  );
};

export const Button = forwardRef(IButton);
