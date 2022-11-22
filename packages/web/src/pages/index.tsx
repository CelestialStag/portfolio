import { NextPage } from 'next';
import React from 'react';
import { observer } from 'mobx-react-lite';

import { Container } from '@lib/components';

import { WebLayout } from '@components/layout';

const IndexPage: NextPage = () => {
  return (
    <WebLayout>
      <Container display="flex" flexGrow={1} textAlign="center"></Container>
    </WebLayout>
  );
};

export default observer(IndexPage);
