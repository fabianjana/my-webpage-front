import React, { useState } from 'react';

import './index.css';
import Board from './components/Board';
import Lobby from './components/Lobby';

const Parchis = () => {
	const [state, setState] = useState({
		room: undefined,
		roomList: [{
			game: {
				id: 1,
				members: [
					{nick: 'Player 1', roles: ['owner', 'player'], spot: 0},
					{nick: 'Spectator 1', roles: ['spectator'], spot: 4},
					{nick: 'Player 2', roles: ['player'], spot: 3},
				]
			}
		}]
	});

	return (
		<div className="parchis-container">
			<Lobby
				roomList={state.roomList}
				setState={setState} />
			{false && <Board />}
		</div>
	);
}

export default Parchis;