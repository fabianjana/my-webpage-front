import { useState } from 'react';

import { ChangeNick } from '../components';
import './IntroScreen.scss';

const IntroScreen = ({socket, playerInfo, setPlayerInfo, setStep}) => {
	const [fade, setFade] = useState(false);

	const handleNickChange = (nick) => {
		setPlayerInfo({...playerInfo, nick: nick});
		setFade(true);
		setTimeout(() => {
			setStep(1);
		}, 300);
	}

	return (
		<div className={`intro-screen${fade ? " fade-out" : ""}`}>
			<ChangeNick
				socket={socket}
				label="Who are you?"
				initialState=""
				buttonText="Get Started"
				handleNickChange={handleNickChange} />
		</div>
	);
}

export default IntroScreen;