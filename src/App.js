import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink
} from 'react-router-dom';

import Index from './routes/index';
import Games from './routes/games';
import Monopoly from './routes/games/monopoly';
import Parchis from './routes/games/parchis';


function App() {
	return (
		<Router>
			<nav>
				<NavLink exact to="/" activeClassName="active">Home</NavLink>
				<NavLink exact to="/games" activeClassName="active">Games</NavLink>
			</nav>

			<Switch>
				<Route path="/games/monopoly" component={Monopoly} />
				<Route path="/games/parchis" component={Parchis} />
				<Route path="/games" component={Games} />
				<Route path="/" component={Index} />
			</Switch>
		</Router>
	);
}


export default App;
