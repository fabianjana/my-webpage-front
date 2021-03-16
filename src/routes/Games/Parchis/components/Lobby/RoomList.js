import React, { useState, useEffect } from 'react';

import './RoomList.scss';


const RoomList = ({socket}) => {
	const [roomList, setRoomList] = useState([]);

	const fetchRooms = async () => {
		const response = await fetch('/api/parchis/rooms');
		const rooms = await response.json();
		setRoomList(rooms);
		console.log(rooms);
	}

	useEffect(() => {
		fetchRooms();
	}, []);

	return (
		<div className="room-list-view">
			<header>
				<h1>This is the room title.</h1>
				<p>Room #36</p>
			</header>
			<section>
				{!roomList && <div className="empty-room-list" />}
				{roomList.map((room) => 
					<div className="room-entry">
						<div className="room-entry-id">{room.id}</div>
						<div className="room-entry-title">{room.title}</div>
					</div>
				)}
			</section>
			<NewRoom
				socket={socket} />
		</div>
	);
}

const NewRoom = ({socket}) => {
	const [roomName, setRoomName] = useState("");

	const createNewRoom = (event) => {
		event.preventDefault();
		socket.emit('create room', roomName, (response) => {
			if (response.ok) {
				console.log(response.msg);
			}
		});
	}

	return(
		<form onSubmit={(event) => createNewRoom(event)}>
			<input
				type="text"
				value={roomName}
				onChange={(event) => setRoomName(event.target.value)}/>
			<button type="submit">Create room</button>
		</form>
	);
}

export default RoomList;