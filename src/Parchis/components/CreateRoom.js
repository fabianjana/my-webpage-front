import { useState } from 'react';

const NewRoom = ({socket, setModal}) => {
	const [roomName, setRoomName] = useState('');
	const [error, setError] = useState('');

	const createNewRoom = (event) => {
		event.preventDefault();
		socket.emit('create parchis room', roomName, (response) => {
			if (response.error) setError(response.error);
			else setModal(false);
		});
	}

	const onChange = (event) => {
		setRoomName(event.target.value);
		setError('');
	}

	return(
		<form onSubmit={(event) => createNewRoom(event)} autoComplete="off">
			<label htmlFor="create-room">Enter a name for your room</label>
			<input
				id="create-room"
				placeholder="uwu"
				type="text"
				value={roomName}
				onChange={onChange}
				autoCorrect="off"
				autoCapitalize="off"
				spellCheck="false"
				autoFocus />
			<button type="button" onClick={() => setModal(false)}>Cancel</button>
			<button>Create!</button>
			{error &&  <div className="error">{error}</div>}
		</form>
	);
}

export default NewRoom;