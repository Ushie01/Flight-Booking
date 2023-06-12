import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import withRedux from '@/src/withRedux';
import dotenv from 'dotenv';
dotenv.config();

const App = ({ Component, pageProps }: AppProps) => {
	const ComponentWithRedux = withRedux(Component); // Wrap Component with withRedux

	return <ComponentWithRedux {...pageProps} />; // Render the wrapped component
};

export default App;
