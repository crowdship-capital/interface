import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react';
import Script from 'next/script';

import type { AppProps } from 'next/app';

import { OnboardProvider } from '@/context/OnboardContext';
import GlobalProvider from '@/context/GlobalContext';

import theme from '@/theme/theme';

import loadLocale from '@/utils/load-locale';

import '@/styles/global.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import '@fontsource/dm-mono/500.css';

import '@/connectors/onboard';
import '@/connectors/locale-init';

type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType<{ withReward: boolean }>;
    withReward: boolean;
  };
};

const MyApp = ({
  Component,
  pageProps,
}: ComponentWithPageLayout): JSX.Element => {
  const { locale } = useRouter();

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
              {Component.PageLayout ? (
                <Component.PageLayout withReward={Component.withReward}>
                  <Component {...pageProps} />
                </Component.PageLayout>
              ) : (
                <Component {...pageProps} />
              )}
            </OnboardProvider>
          </GlobalProvider>
        </ChakraProvider>
      </I18nProvider>
    </>
  );
};

export default MyApp;
