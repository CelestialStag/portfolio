import { FiHeart } from 'react-icons/fi';
import { Icon } from '@chakra-ui/react';
import React from 'react';

import { Box, BoxProps, Text } from '@lib/components';

import { WebFooter } from './WebFooter';

export type WebLayoutProps = BoxProps;

const IWebLayoutComponent = ({ children }: WebLayoutProps) => {
  return (
    <Box display="flex" flexDir="column" maxW="100vw" minHeight="100vh">
      <Box display="flex" flexDir="column" flexGrow={1} zIndex={0}>
        <Box display="flex" flexDir="column" flex={1}>
          {children}
        </Box>
        <WebFooter flex={1}>
          <Box textAlign="center">
            <Text display="flex" placeContent="center" placeItems="center" gap={2} fontSize="xs">
              With <Icon as={FiHeart} /> by Elias Mawa
            </Text>
          </Box>
        </WebFooter>
      </Box>
    </Box>
  );
};

export const WebLayout = IWebLayoutComponent;
