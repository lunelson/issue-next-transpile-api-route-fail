import '../styles/globals.css';
import { AppProvider } from '@rasahq/react-tabula/app';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider value={{ foo: 'bar' }}>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
