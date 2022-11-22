import { Badge, Icon } from '@chakra-ui/react';
import { FiCircle, FiHeart } from 'react-icons/fi';
import { NextPage } from 'next';
import React from 'react';
import { observer } from 'mobx-react-lite';

import { Box, Container, Heading, Span, Text } from '@lib/components';

import { WebLayout } from '@components/layout';

const AboutMePage: NextPage = () => {
  return (
    <WebLayout>
      <Container display="flex" flexGrow={1} textAlign="center">
        <Box display="flex" flexDirection="column" flexGrow={1} placeItems="center" gap={4}>
          <Box display="flex" flexDirection="column" placeItems="center" placeContent="center">
            <Heading>Elias C. Mawa</Heading>
            <Box>
              <Text fontSize="xs">Principal Software developer @ Chesney Management Group LTD.</Text>
              <Text fontSize="xs">Calgary, AB</Text>
            </Box>
          </Box>

          <Box display="flex" gap={2}>
            <Icon as={FiCircle} fontSize={8} stroke="background.400" fill="background.400" />
            <Icon as={FiCircle} fontSize={8} stroke="background.400" fill="background.400" />
            <Icon as={FiCircle} fontSize={8} stroke="background.400" fill="background.400" />
          </Box>

          <Box display="flex" flexDirection="column" placeItems="center" gap={4}>
            <Box display="flex" placeItems="center" placeContent="center" flexWrap="wrap" gap={2} maxW={680}>
              <Badge colorScheme="emerald">JS/TS</Badge>
              <Badge colorScheme="emerald">HTML/CSS/SCSS</Badge>
              <Badge colorScheme="emerald">C/C++</Badge>
              <Badge colorScheme="emerald">Java</Badge>
              <Badge colorScheme="emerald">Dart</Badge>
              <Badge colorScheme="emerald">Go</Badge>
              <Badge colorScheme="blue">React</Badge>
              <Badge colorScheme="blue">React Native</Badge>
              <Badge colorScheme="blue">NEXT.JS</Badge>
              <Badge colorScheme="blue">Flutter</Badge>
              <Badge colorScheme="honey">Linux</Badge>
              <Badge colorScheme="honey">Shell Scripting</Badge>
              <Badge colorScheme="honey">SQL/NoSQL</Badge>
              <Badge colorScheme="violet">Digital Ocean</Badge>
              <Badge colorScheme="violet">Arduino/RaspberryPi</Badge>
              <Badge colorScheme="violet">GCP/AWS</Badge>
            </Box>

            {/* <Box display="flex" gap={2}>
              <Icon as={FiCircle} fontSize={8} stroke="background.400" fill="background.400" />
              <Icon as={FiCircle} fontSize={8} stroke="background.400" fill="background.400" />
              <Icon as={FiCircle} fontSize={8} stroke="background.400" fill="background.400" />
            </Box>

            <Box>
              <Text fontSize="xs">Principal Software developer @ Chesney Management Group LTD.</Text>
              <Text fontSize="xs">Calgary, AB</Text>
            </Box> */}

            <Box display="flex" gap={2}>
              <Icon as={FiCircle} fontSize={8} stroke="background.400" fill="background.400" />
              <Icon as={FiCircle} fontSize={8} stroke="background.400" fill="background.400" />
              <Icon as={FiCircle} fontSize={8} stroke="background.400" fill="background.400" />
            </Box>

            <Box
              display="flex"
              placeContent="center"
              placeItems="center"
              flexDirection="column"
              gap={4}
              maxW={680}
              fontSize="sm"
            >
              <Text>
                {`Hello, I'm Elias Mawa and welcome to my website. I'm a programming hobbyist and eternal student.`}
              </Text>

              <Text>
                {`I like to work on web/mobile applications, Arduino and Raspberry Pi projects. You can head over to my GitHub and view my live projects. My preferred daily driver is either Linux or macOS. Currently I'm neck deep in TypeScript.`}
              </Text>

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
        </Box>
      </Container>
    </WebLayout>
  );
};

export default observer(AboutMePage);
