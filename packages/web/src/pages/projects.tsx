import { NextPage } from 'next';
import React from 'react';
import { observer } from 'mobx-react-lite';

import { Box, Container, Heading } from '@lib/components';

import { ProjectCard } from '@components/display';
import { WebLayout } from '@components/layout';

import goboxLogo from '@assets/img/logo/gobox.png';
import pndomeLogo from '@assets/img/logo/pndome.svg';
import shrympLogo from '@assets/img/logo/shrymp.png';
import stagLogo from '@assets/img/logo/stag.png';

const ProjectsPage: NextPage = () => {
  return (
    <WebLayout>
      <Container display="flex" flexGrow={1} textAlign="center">
        <Box display="flex" flexDirection="column" flexGrow={1} placeItems="center" gap={4}>
          <Box display="flex" flexDirection="column" placeItems="center" gap={4}>
            <Box>
              <Heading size="2xl">Projects</Heading>
            </Box>
            <Box display="flex" flexDirection="column" gap={4}>
              <ProjectCard
                title="portfolio"
                description="My portfolio website (this website)."
                gitLink="github.com/theluckyegg/portfolio"
                liveLink="mawa.dev"
              />
              <ProjectCard
                title="shrymp.co"
                image={shrympLogo}
                description="A quick and simple link shortener. Creates easy to read custom or random sharable links."
                gitLink="github.com/theluckyegg/shrymp-web"
                liveLink="shrymp.co"
              />
              <ProjectCard
                title="gobox"
                image={goboxLogo}
                description="The predecessor to 'pndo.me'.A quick and simple link shortener. Creates easy to read custom or random sharable links."
                gitLink="https://github.com/theluckyegg/gobox-server-v1"
                liveLink="gobox.dev"
              />
              <ProjectCard
                title="pndo.me"
                image={pndomeLogo}
                description="The successor to 'gobox'. The webapp implements an improved user interface, user accounts and access control."
                gitLink="github.com/theluckyegg/pndome"
                liveLink="pndo.me"
              />
              <ProjectCard
                title="stagcss"
                image={stagLogo}
                description="A mobile friendly CSS framework based on flexbox. The framework conforms to modern CSS3 and HTML5 standards. Written in pure SASS."
                gitLink="github.com/theluckyegg/stag"
                liveLink="stagcss.dev"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </WebLayout>
  );
};

export default observer(ProjectsPage);
