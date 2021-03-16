import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import Room from './Room';
import RoomList from './RoomList';
import SetNick from './SetNick';
import './index.scss';

const Lobby = () => {
	const [stage, setStage] = useState('nick');
	const [socket, setSocket] = useState(undefined);

	useEffect(() => {
		const socket = io();
		setSocket(socket);

		socket.on('connect', () => {
			console.log(`connected to lobby ${socket.id}`);

			socket.emit('create parchis player', 'nameless tee');
		});

		return () => {
			console.log('lobby dismounted');
			socket.disconnect();
		}
	}, []);

	if (!socket) return <div></div>;
	return (
		<div className="lobby">
			{stage === 'nick' && <SetNick socket={socket} />}
			{stage === 'roomlist' && <RoomList socket={socket} />}
			{stage === 'room' && <Room />}
		</div>
	);
}


export default Lobby;