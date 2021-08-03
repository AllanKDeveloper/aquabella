import { ParallaxProvider } from 'react-scroll-parallax';
import { GlobalStyle } from '../styles/global';

export default function App({ Component, pageProps }) {
	return (
		<ParallaxProvider>
			<GlobalStyle />
			<Component {...pageProps} />
		</ParallaxProvider>
	);
}
