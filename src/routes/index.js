import { Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import MyClips from '../pages/MyClips';
import Timeline from '../pages/Timeline';
import TopClips from '../pages/TopClips';

const Routes = () => {
	return (
		<>
			<Route component={Landing} path="/" exact />
			<Route component={Timeline} path="/timeline" exact />
			<Route component={TopClips} path="/topclips" exact />
			<Route component={MyClips} path="/myclips" exact />
		</>
	);
};

export default Routes;
