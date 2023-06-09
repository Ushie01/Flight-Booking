import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import store from './store';


const withRedux = (WrappedComponent: React.ComponentType<AppProps>) => {
	const WithRedux = ({...props}:  AppProps) => (
		<Provider store={store}>
			<WrappedComponent {...props} />
		</Provider>
	);

	return WithRedux;
};

export default withRedux;
