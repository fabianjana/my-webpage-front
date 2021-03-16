import { Link, useRouteMatch } from "react-router-dom";

import './Games.scss';

const Games = () => {
	const { url } = useRouteMatch();

	return (
		<div>
			<Link to={`${url}/monopoly`}>Monopoly</Link>
			<Link to={`${url}/parchis`}>Parchis</Link>
		</div>
	);
}

export default Games;