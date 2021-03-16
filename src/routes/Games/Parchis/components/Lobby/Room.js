import React, { useState } from 'react';

import './Room.scss';
import './RoomPlayers.scss';
import './RoomChat.scss';

const Room = () => {
	return (
		<div className="RoomView">
			<RoomTitle />
			<RoomSettings />
			<RoomPlayers />
			<RoomSpectators />
			<RoomChat />
		</div>
	);
}

const RoomTitle = () => (
	<header>
		<h1>This is the room title.</h1>
		<p>Room #36</p>
	</header>
);

const RoomSettings = () => (
	<section>
		<h2>Settings</h2>
		<p>Mode: 4 players</p>
		<p>Spectators: 4</p>
	</section>
);

const RoomPlayers = () => (
	<section>
		<h2>Players <span>1/4</span></h2>
		<div className="player-list">
			<Player nick="Player 1" owner={true}/>
			<Player nick="Player 2" owner={false}/>
			<Player nick="Player 3" owner={false}/>
			<Player nick="Player 4" owner={false}/>
		</div>
	</section>
);

const Player = ({nick, owner}) => {
	const [empty, setEmpty] = useState(true);
	const [showPlayer, setShowPlayer] = useState(false);

	const handleClick = () => {
		// wait for animation to finish	
		if (showPlayer && empty) return;
		if (empty) {
			setShowPlayer(true);
		}
		else {
			setTimeout(() => {
				setShowPlayer(false);
			}, 200);
		}
		setEmpty(!empty);
	}

	return (
		<div className="player-wrapper">
			<div className="player">
				{showPlayer && <h3>{nick}</h3>}
				{showPlayer && owner && <p>Owner</p>}
			</div>
			<div
				className={`player-options ${empty ? 'empty' : ''}`}
				onClick={handleClick}>

			</div>
		</div>
	);
}

const RoomSpectators = () => (
	<section>
		<h2>Spectators</h2>
	</section>
);

const RoomChat = () => (
	<div className="RoomChat">
		<h2>Chat</h2>
		<div className="chatBox">
			<div className="messages">
				<p>
					<span className="colorRed">Player 1: </span>
					Hello world
				</p>
				<p>
					<span className="colorYellow">Player 2: </span>
					Hello world
				</p>
			</div>
			<input type="text" placeholder="Say hello!"/>
		</div>
	</div>
);

export default Room;