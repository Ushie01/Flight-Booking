import '@/styles/globals.css';
import type { AppProps } from 'next/app';
// import WithRedux from './../src/WithRedux';
import dotenv from 'dotenv';
import WithRedux from '@/src/withRedux';
dotenv.config();

const App = ({ Component, pageProps }: AppProps) => {
	const ComponentWithRedux = WithRedux(Component);

	return <ComponentWithRedux {...pageProps} />;
};

export default App;
