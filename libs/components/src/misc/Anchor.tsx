import { Link as CLink, LinkProps as CLinkProps, chakra } from '@chakra-ui/react';
import { ReactNode, Ref, forwardRef, useEffect, useState } from 'react';
import NLink from 'next/link';
import { omit } from 'lodash';

import { AnchorConfig } from '@lib/themes';
import { useRouter } from 'next/router';

export type AnchorProps = Partial<CLinkProps> & {
  children?: ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  isReactive?: boolean;
};

const IAnchorComponent = chakra<typeof CLink, AnchorProps>(CLink);

const IAnchor = (props: AnchorProps, ref: Ref<Element>) => {
  const router = useRouter();
  const { children, href: link, isLoading, isDisabled, isReactive } = props;
  const [href, setHref] = useState<string | null>(link ?? null);
  const isDisabledLink = router.asPath == props.href || props.isDisabled;

  useEffect(() => {
    if (link) setHref(link);
  }, [link]);

  const onClick = (event) => {
    if (!isDisabled && !isLoading) {
      if (link) router.replace(link, undefined, { shallow: true });
      if (props.onClick) props.onClick(event);
    }
  };

  return (
    <NLink
      href={
        typeof window === 'undefined' ? (isDisabled ? '' : href ?? '') : isDisabledLink ? router.asPath : href ?? ''
      }
      passHref={isDisabledLink ? false : true}
    >
      <IAnchorComponent
        ref={ref}
        {...omit(props, ['isDisabled'])}
        onClick={onClick}
        cursor={
          // not active && reactive
          props.cursor ?? ((isReactive && (isDisabledLink || !href)) || isLoading)
            ? 'not-allowed'
            : // not active
            !href
            ? 'default'
            : 'pointer'
        }
        opacity={props.opacity ?? ((isReactive && (isDisabledLink || !href)) || isLoading ? 0.4 : 1)}
        styleConfig={AnchorConfig}
      >
        {children}
      </IAnchorComponent>
    </NLink>
  );
};

export const Anchor = forwardRef(IAnchor);
