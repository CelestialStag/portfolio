import { FiDownload, FiGithub, FiHeart, FiLinkedin, FiMail } from 'react-icons/fi';
import { Icon, Tooltip } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { FaDiscord } from 'react-icons/fa';

import { Anchor, Box, BoxProps, Span, Text } from '@lib/components';

import { WebFooter, WebHeading, WebNavigation } from '@components/layout';
import _ from 'lodash';

export type WebLayoutProps = BoxProps & {
  isCentered?: boolean;
};

const IWebLayoutComponent = ({ children }: WebLayoutProps) => {
  const GithubLink = 'https://github.com/CelestialStag/portfolio';
  const LinkedinLink = 'https://www.linkedin.com/in/emawa';
  const EmailLink = 'mailto:elias@emawa.io';
  //  const ResumeLink = '/resume/technical-resume-2022.pdf';
  const discordUser = 'cachet#0001';

  const debouncedCopyToClipboard = useMemo(() => {
    const copyToClipboard = (data: string) => {
      navigator.clipboard.writeText(data);
    };
    return _.debounce(copyToClipboard, 0);
  }, []);

  return (
    <Box display="flex" flexDir="column" maxW="100vw" minHeight="100vh">
      <Box display="flex" flexDir="column" flexGrow={1} zIndex={0}>
        <Box display="flex" flexDirection="column" flex={1} placeItems="center" placeContent="center">
          <WebHeading flex={1}>
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

              <Tooltip label="click to copy" aria-label="copy discord username">
                <Anchor colorScheme="background" onClick={() => debouncedCopyToClipboard(discordUser)}>
                  <Icon as={FaDiscord} fontSize={24} />
                  <Span className="visible-mobile">{discordUser}</Span>
                </Anchor>
              </Tooltip>

              {/*<Anchor href={ResumeLink} colorScheme="background">
                <Icon as={FiDownload} fontSize={24} />
                <Span className="hidden-mobile">resume</Span>
              </Anchor>*/}
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
