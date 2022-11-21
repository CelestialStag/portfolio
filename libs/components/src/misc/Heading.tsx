import { Heading as CHeading, HeadingProps as CHeadingProps, chakra } from '@chakra-ui/react';
import { ReactNode, Ref, forwardRef } from 'react';

import { HeadingConfig } from '@lib/themes';

export type HeadingProps = Partial<CHeadingProps> & {
  children?: ReactNode;
};

const IHeadingComponent = chakra<typeof CHeading, HeadingProps>(CHeading);

const IHeading = (props: HeadingProps, ref: Ref<Element>) => {
  const { children } = props;
  return (
    <IHeadingComponent ref={ref} {...props} styleConfig={HeadingConfig}>
      {children}
    </IHeadingComponent>
  );
};

export const Heading = forwardRef(IHeading);
