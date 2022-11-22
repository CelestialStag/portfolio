import Image, { StaticImageData } from 'next/image';
import { NextPage } from 'next';
import React from 'react';

import { Anchor, Box, BoxProps, Heading, Span, Text } from '@lib/components';

export type ProjectCardProps = BoxProps & {
  image?: string | StaticImageData;
  imageColor?: string;
  title?: string;
  description?: string;
  alt?: string;
  liveLink?: string;
  gitLink?: string | string[];
};

const IProjectCardComponent: NextPage<ProjectCardProps> = ({
  image,
  imageColor,
  title,
  description,
  alt,
  liveLink,
  gitLink,
  onClick,
}: ProjectCardProps) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      // gap={4}
      textAlign="left"
      background="background.600"
      // shadow="lg"
      borderRadius="md"
      overflow="hidden"
      sx={{
        shadow: 'md',
      }}
      _hover={{
        shadow: 'xl',
        transform: 'translate(-4px, -2px)',
        transitionDuration: '0.4s',
        zIndex: 4,
      }}
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
        >
          <Box minW={16}>
            <Image src={image} alt={alt} layout="responsive" />
          </Box>
          {/* <Box minW={32} minH={32} bgColor="background.200" borderRadius="full"></Box> */}
        </Box>
      )}
      <Box flexGrow={1} px={4} py={4}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" flexDirection="column">
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
          <Box display="flex" flexDirection="column" gap={0} fontSize="xs">
            {liveLink && (
              <Box display="flex" gap={2}>
                <Span>website</Span>
                <Anchor href={`https://${liveLink}`}>{liveLink}</Anchor>
              </Box>
            )}
            {(typeof gitLink === 'object' && gitLink.length && (
              <Box display="flex" gap={2}>
                <Span>github links</Span>
                <Box display="flex" flexDirection="column">
                  {gitLink.map((x) => (
                    <Anchor key={x} href={`https://${x}`}>
                      {x}
                    </Anchor>
                  ))}
                </Box>
              </Box>
            )) ||
              (typeof gitLink === 'string' && (
                <Box display="flex" gap={2}>
                  <Span>github</Span>
                  <Anchor href={`https://${gitLink}`}>{gitLink}</Anchor>
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const ProjectCard = IProjectCardComponent;
