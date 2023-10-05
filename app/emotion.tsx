'use client';
import { CacheProvider } from '@emotion/react';
import {
  useEmotionCache,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import { useServerInsertedHTML } from 'next/navigation';
import { useLocalStorage } from '@mantine/hooks';

//* This file template created via:
//* https://stackoverflow.com/questions/74328955/how-to-use-mantine-ui-with-next-13
//***********************************
//! Essentially functions as _app.tsx
//***********************************

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });

  // const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  // console.log(`Color Scheme within emotion.tsx: ${colorScheme}`);
  const toggleColorScheme = () => {
    const nextColorScheme = colorScheme === 'dark' ? 'light' : 'dark';
    setColorScheme(nextColorScheme);
    // setCookie('mantine-color-scheme', nextColorScheme, {
    //   maxAge: 60 * 60 * 24 * 30,
    // });
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: colorScheme,
        }}
      >
        <CacheProvider value={cache}>{children}</CacheProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

// RootStyleRegistry.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await NextApp.getInitialProps(appContext);
//   return {
//     ...appProps,
//     colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'light',
//   };
// };
