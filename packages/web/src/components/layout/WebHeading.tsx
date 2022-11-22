import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import _ from 'lodash';

import { Box, BoxProps, Span } from '@lib/components';
import { r_number } from '@lib/utility';

import playerFrontIdle from '@assets/img/masthead/player-front-idle.gif';
import slimeFrontIdle from '@assets/img/masthead/slime-front-idle.gif';
import slimeFrontJump from '@assets/img/masthead/slime-front-jump.gif';

export type WebHeadingProps = BoxProps;

const IWebHeadingComponent: NextPage<WebHeadingProps> = ({ children }: WebHeadingProps) => {
  const mastheadImageList = useMemo(() => [playerFrontIdle, slimeFrontIdle, slimeFrontJump], []);
  const [imageIndex, setImageIndex] = useState(r_number(mastheadImageList.length));
  const mastheadImage = useMemo(() => mastheadImageList[imageIndex - 1], [imageIndex, mastheadImageList]);

  const debouncedIncrementImageIndex = useMemo(() => {
    const incrementImageIndex = () => setImageIndex((imageIndex % mastheadImageList.length) + 1);
    return _.debounce(incrementImageIndex, 0);
  }, [imageIndex, mastheadImageList.length]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      placeItems="center"
      textAlign="center"
      sx={{
        mt: 16,
        '@media screen and (min-width: 680px)': {
          mt: 24,
        },
      }}
    >
      <Box>
        <Span _hover={{ cursor: 'pointer' }}>
          <Image
            src={mastheadImage}
            alt="Masthead Image"
            height={72}
            width={72}
            onClick={debouncedIncrementImageIndex}
          />
        </Span>
        {children}
      </Box>
    </Box>
  );
};

export const WebHeading = IWebHeadingComponent;
