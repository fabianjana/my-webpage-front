import { useState, useEffect } from 'react';

import { ChangeNick } from '../components';
import { CreateRoom } from '../components';
import './RoomsScreen.scss';

const RoomsScreen = ({socket, playerInfo, setPlayerInfo}) => {
	const [fade, setFade] = useState({in: true, out: false});
	const [roomList, setRoomList] = useState([]);
	const [createRoomModal, setCreateRoomModal] = useState(false);
	const [changeNickModal, setChangeNickModal] = useState(false);

	useEffect(() => {
		fetchRooms();

		socket.on('room created', () => {
			console.log('someone created a room')
			fetchRooms();
		});

		setTimeout(() => {
			setFade({in: false, out: false});
		}, 0);
	},[socket]);

	const fetchRooms = async () => {
		const response = await fetch('/api/parchis/rooms');
		const rooms = await response.json();
		setRoomList(rooms);
		console.log(rooms)
	}

	const handleNickChange = (nick) => {
		setPlayerInfo({...playerInfo, nick: nick});
		setChangeNickModal(false);
	}

	return (
		<div className={`rooms-screen${fade.in ? " fade-in" : ""}`}>
			<div className="greetings">
				<p>Hello {playerInfo.nick}!</p>
				<button
					type="button"
					onClick={() => setChangeNickModal(true)}>Don't like your nick?</button>
			</div>
			<h2>Room list</h2>
			<div className="room-list">
				{roomList.length === 0 && <div className="empty-room-list">Seems that nobody is playing...</div>}
				{roomList.map((room) => 
					<div><span>#{room.id}</span>{room.title}</div>
				)}
			</div>
			<div className="buttons">
				<button
					type="button"
					onClick={() => setCreateRoomModal(true)}>Create Room</button>
			</div>
			{changeNickModal &&
				<div className="modal">
						<ChangeNick
							socket={socket}
							label="Type your new nick"
							initialState={playerInfo.nick}
							buttonText="Change Nick"
							cancel={true}
							closeAction={setChangeNickModal}
							handleNickChange={handleNickChange} />
				</div>}
			{createRoomModal &&
				<div className="modal">
						<CreateRoom socket={socket} setModal={setCreateRoomModal} />
				</div>}
		</div>
	);
}

export default RoomsScreen;