import { Icon, Stack, StackProps, chakra } from '@chakra-ui/react';
import { Ref, forwardRef, useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import _ from 'lodash';

import { Box, Text } from '../';

export type ScrollToTopProps = Partial<StackProps> & {
  minScroll?: number;
};

const IScrollToTopComponent = chakra<typeof Stack, ScrollToTopProps>(Stack);

const IScrollToTop = (props: ScrollToTopProps, ref: Ref<Element>) => {
  const { minScroll = 0 } = props;
  const [scrollPosition, setScrollPosition] = useState(0);

  const onScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <IScrollToTopComponent
      ref={ref}
      {..._.omit(props, 'minScroll')}
      bgColor="background.700"
      color="background.50"
      shadow="lg"
      position="relative"
      width={12}
      height={12}
      borderRadius="md"
      cursor="pointer"
      right={0}
      display={scrollPosition > minScroll ? 'flex' : 'none'}
      onClick={scrollToTop}
      _hover={{
        shadow: 'xl',
        transitionDuration: '0.4s',
        transform: 'translate(-1px, -1px)',
        width: 14,
        height: 14,
        right: -1,
        zIndex: 4,
      }}
    >
      <Box
        display="flex"
        flexDir="column"
        placeContent="center"
        alignItems="center"
        borderRadius="sm"
        fontSize="xs"
        padding={2}
        flexGrow={1}
      >
        <Icon as={FiArrowUp} />
        <Text>Top</Text>
      </Box>
    </IScrollToTopComponent>
  );
};

export const ScrollToTop = forwardRef(IScrollToTop);
