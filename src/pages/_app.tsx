import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react';
import Script from 'next/script';

import { OnboardProvider } from '@/context/OnboardContext';
import GlobalProvider from '@/context/GlobalContext';

import Body from '@/layouts/Body';
import theme from '@/theme/theme';

import loadLocale from '@/utils/load-locale';
import { nextRedirect } from '@/utils/next-redirect';

import '@/styles/global.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import '@fontsource/dm-mono/500.css';

import '@/connectors/onboard';
import '@/connectors/locale-init';

const MyApp = ({ Component, pageProps }): JSX.Element => {
  const { locale } = useRouter();
  const { ...props } = pageProps;

  useEffect(() => {
    loadLocale(locale);
  }, [locale]);

  return (
    <>
      <Script
        strategy='beforeInteractive'
        src='/scripts/gun/gun.min.js'
      ></Script>
      <Script
        strategy='beforeInteractive'
        src='/scripts/gun/axe.min.js'
      ></Script>
      <Script
        strategy='beforeInteractive'
        src='/scripts/gun/sea.min.js'
      ></Script>
      <I18nProvider i18n={i18n}>
        <ChakraProvider theme={theme}>
          <GlobalProvider>
            <OnboardProvider>
              <Body>
                <Component {...props} />
              </Body>
            </OnboardProvider>
          </GlobalProvider>
        </ChakraProvider>
      </I18nProvider>
    </>
  );
};

export default MyApp;
