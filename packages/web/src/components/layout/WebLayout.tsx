import { FiDownload, FiGithub, FiHeart, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';
import React from 'react';

import { Anchor, Box, BoxProps, Span, Text } from '@lib/components';

import { WebFooter, WebHeading, WebNavigation } from '@components/layout';

export type WebLayoutProps = BoxProps;

const IWebLayoutComponent = ({ children }: WebLayoutProps) => {
  const GithubLink = 'https://github.com/theluckyegg/portfolio';
  const LinkedinLink = 'https://www.linkedin.com/in/emawa';
  const EmailLink = 'mailto:elias@emawa.io';
  const ResumeLink = '/resume/technical-resume-2022.pdf';
  return (
    <Box display="flex" flexDir="column" maxW="100vw" minHeight="100vh">
      <Box display="flex" flexDir="column" flexGrow={1} zIndex={0}>
        <Box display="flex" flexDirection="column" flex={1} placeItems="center" placeContent="center">
          <WebHeading>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                placeContent: 'center',
                placeItems: 'center',
                gap: 4,
                '>a': {
                  display: 'flex',
                  flexDirection: 'row',
                  placeContent: 'center',
                  placeItems: 'center',
                  gap: 2,
                  fontSize: 'sm',
                },
                '.hidden-mobile': {
                  visibility: 'hidden',
                  display: 'none',
                  '@media screen and (min-width: 720px)': {
                    visibility: 'visible',
                    display: 'inline',
                  },
                },
                '.visible-mobile': {
                  visibility: 'visible',
                  display: 'inline',
                },
              }}
            >
              <Anchor href={GithubLink} colorScheme="background">
                <Icon as={FiGithub} fontSize={24} />
                <Span className="hidden-mobile">theluckyegg</Span>
              </Anchor>

              <Anchor href={LinkedinLink} colorScheme="background">
                <Icon as={FiLinkedin} fontSize={24} />
                <Span className="hidden-mobile">elias-mawa</Span>
              </Anchor>

              <Anchor href={EmailLink} colorScheme="background">
                <Icon as={FiMail} fontSize={24} />
                <Span className="hidden-mobile">elias@emawa.io</Span>
              </Anchor>

              <Anchor colorScheme="background">
                <Icon as={FaDiscord} fontSize={24} />
                <Span className="visible-mobile">cachet#0001</Span>
              </Anchor>

              <Anchor href={ResumeLink} colorScheme="background">
                <Icon as={FiDownload} fontSize={24} />
                <Span className="hidden-mobile">resume</Span>
              </Anchor>
            </Box>
            <WebNavigation />
          </WebHeading>
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
