import Image, { StaticImageData } from 'next/image';
import { NextPage } from 'next';
import React from 'react';

import { Anchor, Box, BoxProps, Heading, Span, Text } from '@lib/components';
import { Divider, Tooltip } from '@chakra-ui/react';

export type ProjectCardProps = BoxProps & {
  image?: string | StaticImageData;
  imageColor?: string;
  title?: string;
  description?: string;
  alt?: string;
  liveLink?: string;
  gitLink?: string | string[];
  isDisabled?: boolean;
};

const IProjectCardComponent: NextPage<ProjectCardProps> = ({
  image,
  imageColor,
  title,
  description,
  alt,
  liveLink,
  gitLink,
  isDisabled,
  onClick,
}: ProjectCardProps) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      flex={1}
      flexGrow={1}
      textAlign="left"
      background="background.600"
      borderRadius="md"
      overflow="hidden"
      sx={{
        shadow: 'md',
        flexDirection: 'column',
        '@media screen and (min-width: 680px)': {
          flexDirection: 'row',
        },
      }}
      _hover={{
        shadow: 'xl',
        transform: 'translate(-4px, -2px)',
        transitionDuration: '0.4s',
        zIndex: 4,
      }}
      maxH="auto"
      minW="auto"
    >
      {image && (
        <Box
          position="relative"
          display="flex"
          placeItems="center"
          placeContent="center"
          px={4}
          py={4}
          bgColor={imageColor || 'background.400'}
          onClick={onClick}
          _hover={{ cursor: onClick ? 'pointer' : 'cursor' }}
          sx={{
            minH: 32,
          }}
        >
          <Box
            flexGrow={0.2}
            sx={{
              minW: 16,
            }}
          >
            <Image src={image} alt={alt} layout="responsive" />
          </Box>
          {/* <Box minW={32} minH={32} bgColor="background.200" borderRadius="full"></Box> */}
        </Box>
      )}
      <Box flexGrow={1} px={4} py={4}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" flexDirection="column" gap={2}>
            {title && (
              <Box>
                <Heading size="lg">
                  <Span fontWeight="black">{title}</Span>
                </Heading>
              </Box>
            )}
            <Box fontSize="sm">
              {description && (
                <Box>
                  <Text>{description}</Text>
                </Box>
              )}
            </Box>
          </Box>
          {(liveLink || gitLink) && <Divider borderColor="background.200" />}
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              fontSize: 'xs',
              '@media screen and (min-width: 680px)': {
                fontSize: 'sm',
              },
            }}
          >
            {liveLink && (
              <Box display="flex" gap={2}>
                <Span>website</Span>
                <Tooltip
                  label="Currently re-deploying to new server..."
                  aria-label="err message"
                  isDisabled={!isDisabled}
                >
                  <Anchor href={`https://${liveLink}`} isResponsive isDisabled={isDisabled}>
                    {liveLink}
                  </Anchor>
                </Tooltip>
              </Box>
            )}
            {(typeof gitLink === 'object' && gitLink.length && (
              <Box display="flex" flexDirection="column">
                <Span>github links</Span>
                <Box display="flex" flexDirection="column">
                  {gitLink.map((x) => (
                    <Anchor key={x} href={`https://${x}`} isResponsive>
                      {x}
                    </Anchor>
                  ))}
                </Box>
              </Box>
            )) ||
              (typeof gitLink === 'string' && (
                <Box display="flex" gap={2}>
                  <Span>github</Span>
                  <Anchor href={`https://${gitLink}`} isResponsive>
                    {gitLink}
                  </Anchor>
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const ProjectCard = IProjectCardComponent;
