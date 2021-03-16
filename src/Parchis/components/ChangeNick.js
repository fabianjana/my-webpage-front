import { useState } from 'react';

const ChangeNick = ({socket, label, initialState, buttonText, handleNickChange, cancel, closeAction}) => {
	const [value, setValue] = useState(initialState);
	const [error, setError] = useState('');

	const requestChangeNick = (event) => {
		socket.emit('change nick', value, (response) => {
			const nick = response.data;
			if (response.error) setError(response.error);
			else handleNickChange(nick);
		});
		event.preventDefault();
	};

	const onChange = (event) => {
		setValue(event.target.value);
		setError('');
	}

	return(
		<form onSubmit={requestChangeNick} autoComplete="off">
			<label htmlFor="nick">{label}</label>
			<input
				id="nick"
				type="text"
				value={value}
				onChange={onChange}
				autoCorrect="off"
				autoCapitalize="off"
				spellCheck="false"
				autoFocus />
			{cancel && <button type="button" onClick={() => closeAction(false)}>Close</button>}
			<button>{buttonText}</button>
			{error &&  <div className="error">{error}</div>}
		</form>
	);
}

export default ChangeNick;