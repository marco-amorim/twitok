import { Redirect, Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing';
import MyClips from '../pages/MyClips';
import Timeline from '../pages/Timeline';
import TopClips from '../pages/TopClips';

const Routes = () => {
	return (
		<Switch>
			<Route component={Landing} path="/" exact />
			<Route component={Timeline} path="/timeline" />
			<Route component={TopClips} path="/topclips" />
			<Route component={MyClips} path="/myclips" />
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
