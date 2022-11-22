import { Divider } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { useRouter } from 'next/router';

import { Anchor, Box, BoxProps, Span } from '@lib/components';

export type WebNavigationProps = BoxProps;

const IWebNavigationComponent: NextPage<WebNavigationProps> = ({ children }: WebNavigationProps) => {
  const { route, pathname } = useRouter();

  console.log(route);
  console.log(pathname);

  return (
    <Box display="flex" flexDirection="column" placeItems="center" gap={2}>
      <Box
        display="flex"
        placeItems="center"
        placeContent="center"
        flexWrap="wrap"
        gap={2}
        maxW={680}
        sx={{
          '>a': {
            display: 'flex',
            flexDirection: 'row',
            placeContent: 'center',
            placeItems: 'center',
            gap: 2,
            fontSize: 'sm',
          },
        }}
      >
        <Anchor href="/" colorScheme="accent">
          <Span>home</Span>
        </Anchor>
        <Span color="background.400">{'/'}</Span>
        <Anchor href="/about-me" colorScheme="accent">
          <Span>about</Span>
        </Anchor>
        <Span color="background.400">{'/'}</Span>
        <Anchor href="/projects" colorScheme="accent">
          <Span>projects</Span>
        </Anchor>
        {children}
      </Box>

      <Divider maxW={96} borderColor="background.400" />
    </Box>
  );
};

export const WebNavigation = IWebNavigationComponent;
