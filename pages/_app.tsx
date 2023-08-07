import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import withRedux from './../src/WithRedux';
import dotenv from 'dotenv';
dotenv.config();

const App = ({ Component, pageProps }: AppProps) => {
	const ComponentWithRedux = withRedux(Component); 

	return <ComponentWithRedux {...pageProps} />; 
};

export default App;
