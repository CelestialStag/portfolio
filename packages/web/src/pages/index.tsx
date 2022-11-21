import { Badge, Divider, Icon } from '@chakra-ui/react';
import { FiCircle, FiDownload, FiGithub, FiHeart, FiLinkedin, FiMail } from 'react-icons/fi';
import React, { useEffect, useMemo, useState } from 'react';
import { FaDiscord } from 'react-icons/fa';
import Image from 'next/image';
import { NextPage } from 'next';
import _ from 'lodash';
import { observer } from 'mobx-react-lite';

import { Anchor, Box, Container, Heading, Span, Text } from '@lib/components';
import { r_number } from '@lib/utility';

import { WebLayout } from '@components/layout';
import { useStore } from '@stores/core';

import playerFrontIdle from '@assets/img/masthead/player-front-idle.gif';
import slimeFrontIdle from '@assets/img/masthead/slime-front-idle.gif';
import slimeFrontJump from '@assets/img/masthead/slime-front-jump.gif';

const IndexPage: NextPage = () => {
  const { session } = useStore();

  const mastheadImageList = useMemo(() => [playerFrontIdle, slimeFrontIdle, slimeFrontJump], []);

  const [imageIndex, setImageIndex] = useState(r_number(mastheadImageList.length));
  console.log(imageIndex);

  // const [imageIndex, setImageIndex] = useState(1);
  const mastheadImage = useMemo(() => mastheadImageList[imageIndex - 1], [imageIndex, mastheadImageList]);

  const debouncedIncrementImageIndex = useMemo(() => {
    const incrementImageIndex = () => setImageIndex((imageIndex % mastheadImageList.length) + 1);
    return _.debounce(incrementImageIndex, 0);
  }, [imageIndex, mastheadImageList.length]);

  const GithubLink = 'https://github.com/theluckyegg/portfolio';
  const LinkedinLink = 'https://www.linkedin.com/in/emawa';
  const EmailLink = 'mailto:elias@emawa.io';
  const ResumeLink = '/resume/technical-resume-2022.pdf';

  useEffect(() => {
    session.session_token = 'token';
  }, [session]);

  return (
    <WebLayout>
      <Container display="flex" flexGrow={1} textAlign="center">
        <Box
          display="flex"
          flexDirection="column"
          flexGrow={1}
          placeItems="center"
          // placeContent="center"
          gap={4}
          sx={{
            mt: 4,
            '@media screen and (min-width: 680px)': {
              mt: 16,
            },
          }}
        >
          <Box display="flex" flexDirection="column" placeItems="center" gap={2}>
            <Box _hover={{ cursor: 'pointer' }}>
              <Image
                src={mastheadImage}
                alt="Masthead Image"
                height={128}
                width={128}
                onClick={debouncedIncrementImageIndex}
              />
            </Box>
            <Box>
              <Heading size="2xl">Elias C. Mawa</Heading>
            </Box>
            <Box>
              <Text fontSize="xs">Principal Software developer @ Chesney Management Group LTD.</Text>
              <Text fontSize="xs">Calgary, AB</Text>
            </Box>
            <Box
              flexWrap="wrap"
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
                '.link-text': {
                  visibility: 'hidden',
                  display: 'none',
                  '@media screen and (min-width: 720px)': {
                    visibility: 'visible',
                    display: 'inline',
                  },
                },
              }}
            >
              <Anchor href={GithubLink} colorScheme="background">
                {/* <Span position="relative">
                  <Icon as={FiCircle} fontSize={48} color="background.400" fill="background.400" />
                  <Icon as={FiGithub} fontSize={24} color="background.50" position="absolute" left={3} top={3} />
                </Span> */}
                <Icon as={FiGithub} fontSize={24} />
                <Span
                  sx={{
                    visibility: 'hidden',
                    display: 'none',
                    '@media screen and (min-width: 720px)': {
                      visibility: 'visible',
                      display: 'inline',
                    },
                  }}
                >
                  theluckyegg
                </Span>
              </Anchor>

              {/* <Anchor href={CodepenLink} colorScheme="background">
                <Span position="relative">
                  <Icon as={FiCircle} fontSize={24} color="background.400" fill="background.400" />
                  <Icon as={FiCodepen} fontSize={24} color="background.50" position="absolute" left={2} top={2} />
                </Span>
              </Anchor> */}

              <Anchor href={LinkedinLink} colorScheme="background">
                {/* <Span position="relative">
                  <Icon as={FiCircle} fontSize={48} color="background.400" fill="background.400" />
                  <Icon as={FiLinkedin} fontSize={24} color="background.50" position="absolute" left={3} top={3} />
                </Span> */}
                <Icon as={FiLinkedin} fontSize={24} />
                <Span className="link-text">elias-mawa</Span>
              </Anchor>

              <Anchor href={EmailLink} colorScheme="background">
                {/* <Span position="relative">
                  <Icon as={FiCircle} fontSize={24} color="background.400" fill="background.400" />
                  <Icon as={FiMail} fontSize={24} color="background.50" position="absolute" left={2} top={2} />
                </Span> */}
                <Icon as={FiMail} fontSize={24} />
                <Span className="link-text">elias@emawa.io</Span>
              </Anchor>

              <Anchor colorScheme="background">
                {/* <Span position="relative">
                  <Icon as={FiCircle} fontSize={24} color="background.400" fill="background.400" />
                  <Icon as={FaDiscord} fontSize={24} color="background.50" position="absolute" left={2} top={2} />
                </Span> */}
                <Icon as={FaDiscord} fontSize={24} />
                <Span className="link-text">cachet#0001</Span>
              </Anchor>

              <Anchor href={ResumeLink} colorScheme="background">
                {/* <Span position="relative">
                  <Icon as={FiCircle} fontSize={24} color="accent.200" fill="accent.200" />
                  <Icon as={FiDownload} fontSize={24} stroke="background.400" position="absolute" left={2} top={2} />
                </Span> */}
                <Icon as={FiDownload} fontSize={24} />
                <Span className="link-text">resume</Span>
              </Anchor>
            </Box>
          </Box>

          <Divider maxW={96} borderColor="background.400" />

          <Box display="flex" placeItems="center" placeContent="center" flexWrap="wrap" gap={2} maxW={680}>
            <Badge variant="solid" colorScheme="emerald">
              JS/TS
            </Badge>
            <Badge variant="solid" colorScheme="emerald">
              HTML/CSS/SCSS
            </Badge>
            <Badge variant="solid" colorScheme="emerald">
              C/C++
            </Badge>
            <Badge variant="solid" colorScheme="emerald">
              Java
            </Badge>
            <Badge variant="solid" colorScheme="emerald">
              Dart
            </Badge>
            <Badge variant="solid" colorScheme="emerald">
              Go
            </Badge>
            <Badge variant="solid" colorScheme="blue">
              React
            </Badge>
            <Badge variant="solid" colorScheme="blue">
              React Native
            </Badge>
            <Badge variant="solid" colorScheme="blue">
              NEXT.JS
            </Badge>
            <Badge variant="solid" colorScheme="blue">
              Flutter
            </Badge>
            <Badge variant="solid" colorScheme="honey">
              Linux
            </Badge>
            <Badge variant="solid" colorScheme="honey">
              Shell Scripting
            </Badge>
            <Badge variant="solid" colorScheme="honey">
              SQL/NoSQL
            </Badge>
            <Badge variant="solid" colorScheme="violet">
              Digital Ocean
            </Badge>
            <Badge variant="solid" colorScheme="violet">
              Arduino/RaspberryPi
            </Badge>
            <Badge variant="solid" colorScheme="violet">
              GCP/AWS
            </Badge>
          </Box>

          <Divider maxW={96} borderColor="background.400" />

          <Box
            display="flex"
            placeContent="center"
            placeItems="center"
            flexDirection="column"
            gap={2}
            maxW={680}
            fontSize="sm"
          >
            <Text>
              {`Hello, I'm Elias Mawa and welcome to my website. I'm a programming hobbyist and eternal student.`}
            </Text>

            <Box display="flex" gap={2}>
              <Icon as={FiCircle} fontSize={8} stroke="background.400" fill="background.400" />
              <Icon as={FiCircle} fontSize={8} stroke="background.400" fill="background.400" />
              <Icon as={FiCircle} fontSize={8} stroke="background.400" fill="background.400" />
            </Box>

            <Text>
              {`I like to work on web/mobile applications, Arduino and Raspberry Pi projects. You can head over to my GitHub and view my live projects. My preferred daily driver is either Linux or macOS. Currently, I'm neck deep in TypeScript.`}
            </Text>

            <Box display="flex" gap={2}>
              <Icon as={FiCircle} fontSize={8} stroke="background.400" fill="background.400" />
              <Icon as={FiCircle} fontSize={8} stroke="background.400" fill="background.400" />
              <Icon as={FiCircle} fontSize={8} stroke="background.400" fill="background.400" />
            </Box>

            <Text>
              {`While I love programming, I also love Rugby (Full-back/Wing 😎), camping, hiking, `}
              <Span display="inline-flex" placeContent="center" placeItems="center" gap={2}>
                {`board games `}
                <Icon as={FiHeart} stroke="cherryBlossom.200" fill="cherryBlossom.200" />
              </Span>
              {`, video games, anime/manga and painting.`}
            </Text>
          </Box>
        </Box>
      </Container>
    </WebLayout>
  );
};

export default observer(IndexPage);
