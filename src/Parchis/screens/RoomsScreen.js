import { useState, useEffect } from 'react';

import './RoomsScreen.scss';

const RoomsScreen = () => {
	const [fade, setFade] = useState({in: true, out: false});

	useEffect(() => {
		setTimeout(() => {
			setFade({in: false, out: false});
		}, 0);
	},[]);

	return (
		<div className={`rooms-screen${fade.in ? " fade-in" : ""}`}>
			<div className="greetings">
				<p>Hello shocker!</p>
				<button>Don't like your nick?</button>
			</div>
			<h2>Room list</h2>
			<div className="room-list">
				<div>Room 1</div>
				<div>Room 2</div>
				<div>Room 1</div>
				<div>Room 2</div>
				<div>Room 1</div>
				<div>Room 2</div>
				<div>Room 1</div>
				<div>Room 2</div>
				<div>Room 1</div>
				<div>Room 2</div>
			</div>
			<div className="join-button">
				<button>Join</button>
			</div>
		</div>
	);
}

export default RoomsScreen;