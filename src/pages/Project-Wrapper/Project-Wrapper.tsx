import { Outlet } from 'react-router';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { Wrapper } from 'shared/ui';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export default function ProjectWrapper() {

	return (
		<Wrapper
			children={<Outlet/>}
			footer={<Footer/>}
			header={<Header/>}
		/>
	);
};