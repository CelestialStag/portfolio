import { BoxProps, chakra } from '@chakra-ui/react';
import { ReactNode, Ref, forwardRef } from 'react';

export type SpanProps = Partial<BoxProps> & {
  children?: ReactNode;
};

const ISpanComponent = chakra<'span', SpanProps>('span');

const ISpan = (props: SpanProps, ref: Ref<HTMLSpanElement>) => {
  const { children } = props;
  return (
    <ISpanComponent ref={ref} display="inline-flex" fontFamily="Fira Sans" {...props}>
      {children}
    </ISpanComponent>
  );
};

export const Span = forwardRef(ISpan);
