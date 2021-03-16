import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import IntroScreen from './screens/IntroScreen';
import RoomsScreen from './screens/RoomsScreen';
import LobbyScreen from './screens/LobbyScreen';
import './Parchis.scss';

const Parchis = () => {
	const [socket, setSocket] = useState(null);
	const [socketStatus, setSocketStatus] = useState({connected: false, message: 'Socket not initialized'});
	const [step, setStep] = useState(0);
	const [playerInfo, setPlayerInfo] = useState({});

	useEffect(() => {
		const socket = io();
		setSocket(socket);

		return () => socket.disconnect();
	}, []);

	useEffect(() => {
		if (!socket) return setSocketStatus({connected: false, message: 'Socket not initialized'});

		socket.on('connect', () => {
			console.log(`connected to lobby ${socket.id}`);
			socket.emit('create parchis player');
			setSocketStatus({connected: socket.connected, message: 'Socket connected'})
		});

		socket.on('disconnect', () => {
			console.log('disconnected from lobby');
			setSocketStatus({connected: socket.connected, message: 'Socket disconnected'})
		});
	}, [socket]);


	const screenSwitcher = (stepper) => {
		switch (stepper) {
			case 0:
				return <IntroScreen socket={socket} playerInfo={playerInfo} setPlayerInfo={setPlayerInfo} setStep={setStep} />;
			case 1:
				return <RoomsScreen socket={socket} playerInfo={playerInfo} setPlayerInfo={setPlayerInfo} />;
			case 2:
				return <LobbyScreen />;
			default:
				return <div>{socketStatus.message}</div>;
		}
	}

	return (
		<div className="parchis-container">
			{screenSwitcher(socketStatus.connected && step)}
		</div>
	);
}

export default Parchis;