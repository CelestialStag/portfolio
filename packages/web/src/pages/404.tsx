import { NextPage } from 'next';
import React from 'react';

import { Container, Heading, Text } from '@lib/components';

import { WebLayout } from '@components/layout';

const Error: NextPage = () => {
  return (
    <WebLayout>
      <Container textAlign="center">
        <Heading>Error 404</Heading>
        <Text>Page Not Found!</Text>
      </Container>
    </WebLayout>
  );
};

export default Error;
