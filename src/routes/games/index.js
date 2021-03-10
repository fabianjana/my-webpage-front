import {
  Link,
  useRouteMatch
} from "react-router-dom";

import './index.css';

function Games() {
	let { url } = useRouteMatch();

	return (
		<div>
			<Link exact to={`${url}/monopoly`}>Monopoly</Link>
			<Link exact to={`${url}/parchis`}>Parchis</Link>
		</div>
	);
}

export default Games;