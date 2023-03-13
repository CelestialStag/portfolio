import { NextPage } from 'next';
import React from 'react';
import { observer } from 'mobx-react-lite';

import { Box, Container, Heading, Text } from '@lib/components';

import { WebLayout } from '@components/layout';

const IndexPage: NextPage = () => {
  return (
    <WebLayout isCentered>
      <Container display="flex" flexGrow={1} placeItems="flex-start" placeContent="center" textAlign="center">
        <Box display="flex" flexDirection="column" placeItems="center" placeContent="center">
          <Heading>Elias C. Mawa</Heading>
          <Box>
            { /* <Text fontSize="xs">Principal Software developer @ Chesney Management Group LTD.</Text> */ }
            <Text fontSize="xs">Calgary, AB</Text>
          </Box>
        </Box>
      </Container>
    </WebLayout>
  );
};

export default observer(IndexPage);
