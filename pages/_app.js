import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

const PreviewControls = dynamic(
  () => import('../components/preview-controls'),
  { ssr: false }
);

export default function MyApp({ Component: Page, pageProps, router }) {
  Page = Page.withLayout ? Page.withLayout(Page) : Page;
  return (
    <>
      <Head>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        {pageProps.noIndex && (
          <meta key="robots" name="robots" content="noindex" />
        )}
      </Head>
      <Page {...pageProps} />
      <PreviewControls />
    </>
  );
}
