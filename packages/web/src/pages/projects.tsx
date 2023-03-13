import React, { useMemo, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import { observer } from 'mobx-react-lite';

import { Box, Container, Heading } from '@lib/components';
import { r_number } from '@lib/utility';

import { ProjectCard } from '@components/display';
import { WebLayout } from '@components/layout';

import goboxLogo from '@assets/img/logo/gobox.png';
import kurisuLogo from '@assets/img/logo/kurisu.png';
import pndomeLogo from '@assets/img/logo/pndome.svg';
import shrympLogo from '@assets/img/logo/shrymp.png';
import stagLogo from '@assets/img/logo/stag.png';

import playerFrontIdle from '@assets/img/masthead/player-front-idle.gif';
import slimeFrontIdle from '@assets/img/masthead/slime-front-idle.gif';
import slimeFrontJump from '@assets/img/masthead/slime-front-jump.gif';

const ProjectsPage: NextPage = () => {
  const mastheadImageList = useMemo(() => [playerFrontIdle, slimeFrontIdle, slimeFrontJump], []);
  const [imageIndex, setImageIndex] = useState(r_number(mastheadImageList.length));
  const mastheadImage = useMemo(() => mastheadImageList[imageIndex], [imageIndex, mastheadImageList]);

  const debouncedIncrementImageIndex = useMemo(() => {
    const incrementImageIndex = () => setImageIndex((imageIndex + 1) % mastheadImageList.length);
    return _.debounce(incrementImageIndex, 0);
  }, [imageIndex, mastheadImageList.length]);

  return (
    <WebLayout>
      <Container display="flex" flexGrow={1} textAlign="center">
        <Box display="flex" flexDirection="column" flexGrow={1} placeItems="center" gap={4}>
          <Box display="flex" flexDirection="column" placeItems="stretch" gap={4}>
            <Box display="flex" flexDirection="column" gap={4}>
              <Box>
                <Heading size="2xl">Projects</Heading>
              </Box>
              <ProjectCard
                image={mastheadImage}
                onClick={debouncedIncrementImageIndex}
                imageColor={imageIndex === 0 ? '#7b5630' : '#a4ff4c'}
                title="portfolio"
                description="My portfolio website, nothing much other than showcasing some of my work (Click on the header image to change it!)."
                liveLink="mawa.dev"
                gitLink="github.com/celestialstag/portfolio"
              />
              <ProjectCard
                image={shrympLogo}
                imageColor="#ffb0a0"
                title="shrymp.co"
                description="A quick and simple link shortener. Creates easy to read custom or random sharable links."
                liveLink="shrymp.co"
                gitLink={['github.com/celestialstag/shrymp-web', 'github.com/celestialstag/shrymp-server']}
                // isDisabled
              />
              <ProjectCard
                image={stagLogo}
                imageColor="#e4c550"
                title="stagcss"
                description="A mobile friendly CSS framework based on flexbox. The framework conforms to modern CSS3 and HTML5 standards. Written in pure SASS."
                liveLink="stagcss.dev"
                gitLink="github.com/celestialstag/stagcss"
                isDisabled
              />
              <ProjectCard
                image={kurisuLogo}
                imageColor="#f2dbb1"
                title="kurisu"
                description="General purpose Discord chat bot. Used to manage server access and roles."
                gitLink="github.com/tromodolo/Kurisu"
              />
              <ProjectCard
                image={goboxLogo}
                imageColor="#6d6d6c"
                title="gobox"
                description="The predecessor to 'pndo.me'.A quick and simple link shortener. Creates easy to read custom or random sharable links."
                liveLink="gobox.dev"
                gitLink="github.com/celestialstag/gobox-server-v1"
                // isDisabled
              />
              <ProjectCard
                image={pndomeLogo}
                imageColor="#ffffff"
                title="pndo.me"
                description="The successor to 'gobox'. The webapp implements an improved user interface, user accounts and access control."
                liveLink="pndo.me"
                gitLink="github.com/celestialstag/pndome"
                // isDisabled
              />
            </Box>
            <Box display="flex" flexDirection="column" gap={4}>
              <Box>
                <Heading size="2xl">School Projects</Heading>
              </Box>
              <ProjectCard
                // image={mastheadImage}
                onClick={debouncedIncrementImageIndex}
                // imageColor={imageIndex === 0 ? '#7b5630' : '#a4ff4c'}
                title="Software Engineering: chess"
                description="Chess program developed in Software Engineering 320. Developed with a team of my peers. The program was built using Java and implements a chess engine and a GUI built using the Swing library. My work was towards the chess engine, computer AI engine, and UI Design images/icons)."
                // liveLink="mawa.dev"
                // gitLink="github.com/celestialstag/portfolio"
              />
              <ProjectCard
                // image={mastheadImage}
                onClick={debouncedIncrementImageIndex}
                // imageColor={imageIndex === 0 ? '#7b5630' : '#a4ff4c'}
                title="Algorithm Analysis: paint"
                description="Paint program developed for Algorithm Analysis 370. The program was developed in c++ utilizing OpenGL and GLUT. The program implements a simple toolbar, pixel brush and bucket tool. The program demonstrates the the flood fill algorithm with color tolerance on loaded or painted images. The process of the flood fill algorithm may be viewed with a speed toggle."
                // liveLink="mawa.dev"
                // gitLink="github.com/celestialstag/portfolio"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </WebLayout>
  );
};

export default observer(ProjectsPage);
