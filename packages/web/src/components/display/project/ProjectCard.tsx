import Image, { StaticImageData } from 'next/image';
import { NextPage } from 'next';
import React from 'react';

import { Anchor, Box, BoxProps, Heading, Span, Text } from '@lib/components';

export type ProjectCardProps = BoxProps & {
  image?: string | StaticImageData;
  title?: string;
  description?: string;
  alt?: string;
  gitLink?: string;
  liveLink?: string;
};

const IProjectCardComponent: NextPage<ProjectCardProps> = ({
  title,
  description,
  alt,
  image,
  gitLink,
  liveLink,
}: ProjectCardProps) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={4}
      textAlign="left"
      px={4}
      py={4}
      background="background.600"
      shadow="lg"
      borderRadius="md"
    >
      {image && (
        <Box position="relative" display="flex" placeItems="center" placeContent="center">
          <Box minW={16}>
            <Image src={image} alt={alt} layout="responsive" />
          </Box>
          {/* <Box minW={32} minH={32} bgColor="background.200" borderRadius="full"></Box> */}
        </Box>
      )}
      <Box flexGrow={1}>
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
          <Box fontSize="xs">
            {liveLink && (
              <Box display="flex" gap={2}>
                <Span>website:</Span>
                <Anchor href={`https://${liveLink}`}>{liveLink}</Anchor>
              </Box>
            )}
            {gitLink && (
              <Box display="flex" gap={2}>
                <Span>github:</Span>
                <Anchor href={`https://${gitLink}`}>{gitLink}</Anchor>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const ProjectCard = IProjectCardComponent;
