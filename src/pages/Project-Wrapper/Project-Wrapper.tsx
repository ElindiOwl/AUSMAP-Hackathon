import { Outlet } from 'react-router';
import { Header } from 'widgets/Header';
import { Wrapper } from 'shared/ui';
import { Footer } from 'widgets/Footer';


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