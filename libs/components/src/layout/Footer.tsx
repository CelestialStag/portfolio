import { BoxProps, chakra } from '@chakra-ui/react';
import { ReactNode, Ref, forwardRef } from 'react';

import { Box, Span } from '../core';

type FooterProps = Partial<BoxProps> & {
  children?: ReactNode;
  subtext?: string;
};

const IFooterComponent = chakra<typeof Box, FooterProps>(Box, {
  baseStyle: {
    // nothing
  },
});

const IFooter = (props: FooterProps, ref: Ref<HTMLElement>) => {
  const { children, subtext } = props;
  return (
    <IFooterComponent ref={ref} {...props}>
      {children}
      {subtext && (
        <Box textAlign={'center'} fontSize={['xx-small', 'xs']}>
          <Span>{subtext}</Span>
        </Box>
      )}
    </IFooterComponent>
  );
};

export const Footer = forwardRef(IFooter);
