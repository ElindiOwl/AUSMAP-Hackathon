import {MainPage} from 'pages/Main-Page';

export const meta = () => {
	return [
		{title: 'RRF template'},
		{content: 'Welcome to React Router!', name: 'description'},
	];
};

const Home = () => {
	return (
		<>
			<MainPage/>
		</>
	);
};

export default Home;