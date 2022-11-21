import React from 'react';

import { NextPage } from 'next';

import { Box, BoxProps } from '@lib/components';

export type WebFooterProps = BoxProps & {
  mainText?: string;
  subText?: string;
};

const IWebFooterComponent: NextPage<WebFooterProps> = ({ children, mainText, subText }: WebFooterProps) => {
  return (
    <Box display="flex" flexDirection="column" py={4}>
      {children && <Box>{children}</Box>}
      {mainText && <Box>{mainText}</Box>}
      {subText && <Box>{subText}</Box>}
    </Box>
  );
};

export const WebFooter = IWebFooterComponent;
