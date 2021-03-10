import { io } from 'socket.io-client';

const ENDPOINT = 'http://localhost:3001/'

function Chat() {
	const [response, setResponse] = useState('');
	
	useEffect(() => {
		const socket = io(ENDPOINT, {
			withCredentials: true
		});
		socket.on('connect', () => {
			console.log(socket.id);
		});
	});

	return (
		<div className="App">
		</div>
	);
}

export default Chat;