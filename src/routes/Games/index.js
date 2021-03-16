import {
  Link,
  useRouteMatch
} from "react-router-dom";

import './index.css';

function Games() {
	let { url } = useRouteMatch();

	return (
		<div>
			<Link to={`${url}/monopoly`}>Monopoly</Link>
			<Link to={`${url}/parchis`}>Parchis</Link>
		</div>
	);
}

export default Games;