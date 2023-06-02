import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../store/store';
import Layout from '../src/components/Layout';
import Script from 'next/script';
import 'rsuite/dist/rsuite-no-reset.min.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      {/* <!-- Google tag (Universal Analytics) --> */}
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-204814967-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-204814967-1');
        `}
      </Script> */}
      {/* <!-- Google tag (Google Analytics 4) --> */}
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CQN7XT9KSE"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CQN7XT9KSE');
        `}
      </Script> */}

      <Provider store={store}>
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} key={router.pathname} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
