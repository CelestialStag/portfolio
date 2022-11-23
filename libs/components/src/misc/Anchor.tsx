import { Link as CLink, LinkProps as CLinkProps, chakra } from '@chakra-ui/react';
import { MouseEvent, ReactNode, Ref, forwardRef, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { omit } from 'lodash';

import { AnchorConfig } from '@lib/themes';
import { useRouter } from 'next/router';

export type AnchorProps = Partial<CLinkProps> & {
  children?: ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  isResponsive?: boolean;
};

const IAnchorComponent = chakra<typeof CLink, AnchorProps>(CLink);

const IAnchor = (props: AnchorProps, ref: Ref<Element>) => {
  const { children, href: link, isLoading, isDisabled, isResponsive } = props;
  const router = useRouter();
  const [href, setHref] = useState<string | null>(link ?? null);
  const isDisabledLink = router.asPath === props.href || props.isDisabled;

  useEffect(() => {
    if (link) setHref(link);
  }, [link]);

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isDisabled || isLoading) return;
    if (props.onClick) props.onClick(event);
  };

  return (
    <NextLink
      href={
        typeof window === 'undefined' ? (isDisabled ? '' : href ?? '') : isDisabledLink ? router.asPath : href ?? ''
      }
      passHref={!isDisabledLink}
      scroll={!isDisabledLink}
    >
      <IAnchorComponent
        ref={ref}
        {...omit(props, ['isDisabled', 'isResponsive'])}
        onClick={onClick}
        cursor={
          // not active && reactive
          props.cursor ?? ((isResponsive && (isDisabledLink || !href)) || isLoading)
            ? 'not-allowed'
            : // not active
            !href
            ? 'default'
            : 'pointer'
        }
        opacity={props.opacity ?? ((isResponsive && (isDisabledLink || !href)) || isLoading ? 0.4 : 1)}
        styleConfig={AnchorConfig}
        color={props.color ?? router.asPath === props.href ? 'alt.500' : undefined}
      >
        {children}
      </IAnchorComponent>
    </NextLink>
  );
};

export const Anchor = forwardRef(IAnchor);
