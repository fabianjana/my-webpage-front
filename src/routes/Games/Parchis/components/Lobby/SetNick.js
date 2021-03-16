import React, { useState } from 'react';

const SetNick = ({socket}) => {
	const [nick, setNick] = useState('');

	const changeNick = (event) => {
		socket.emit('change nick', nick);
		setNick('');
		event.preventDefault();
	};

	return(
		<form onSubmit={(event) => changeNick(event)}>
			<input
				type="text"
				value={nick}
				onChange={(event) => setNick(event.target.value)}/>
			<button type="submit">OK</button>
		</form>
	);
}

export default SetNick;