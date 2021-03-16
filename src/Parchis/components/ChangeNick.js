import { useState } from 'react';

const ChangeNick = ({socket, label, initialState, buttonText, handleNickChange}) => {
	const [value, setValue] = useState(initialState);
	const [error, setError] = useState('')

	const requestChangeNick = (event) => {
		socket.emit('change nick', value, (response) => {
			const nick = response.data;
			setError(response.error);
			console.log(response.error);
			if (!response.error) handleNickChange(nick);
		});
		event.preventDefault();
	};

	return(
		<form onSubmit={requestChangeNick} autoComplete="off">
			<label htmlFor="nick">{label}</label>
			<input
				id="nick"
				type="text"
				value={value}
				onChange={(event) => setValue(event.target.value)}
				autoCorrect="off"
				autoCapitalize="off"
				spellCheck="false"
				autoFocus />
			<button>{buttonText}</button>
			{error &&  <div className="error">{error}</div>}
		</form>
	);
}

export default ChangeNick;