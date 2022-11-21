import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

import { themeConfig } from '@lib/themes';

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={themeConfig.initialColorMode} storageKey="theme" type="cookie" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
