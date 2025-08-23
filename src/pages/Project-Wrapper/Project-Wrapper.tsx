import { Outlet } from 'react-router';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { Wrapper } from 'shared/ui';

const ProjectWrapper = () => {

	return (
		<Wrapper
			children={<Outlet/>}
			footer={<Footer/>}
			header={<Header/>}
		/>
	);
};

export default ProjectWrapper;