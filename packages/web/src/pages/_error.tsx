import { NextPage } from 'next';
import React from 'react';
import { observer } from 'mobx-react-lite';

import { Container, Heading, Text } from '@lib/components';
import { WebLayout } from '@components/layout';

type ErrPageProps = {
  statusCode?: number;
  message?: string;
};

export const ErrPage: NextPage<ErrPageProps> = ({ statusCode = 500, message = 'Server Error' }: ErrPageProps) => {
  return (
    <WebLayout>
      <Container textAlign="center">
        <Heading>Error {statusCode}</Heading>
        <Text>
          <Text>{message}</Text>
        </Text>
      </Container>
    </WebLayout>
  );
};

export const getServerSideProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  const message = res && res.statusMessage ? res.statusMessage : err ? err.message : 'Not Found';
  return { props: { statusCode, message } };
};

export default observer(ErrPage);
