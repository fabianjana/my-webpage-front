import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { io } from 'socket.io-client';

import Cell from './Cell';
import './Board.css';

const Board = () => {
	const [state, setState] = useState({selectedPiece: "", pieces: {} });

	useEffect(() => {
		const socket = io(process.env.ENDPOINT, {
			withCredentials: true
		});

		socket.on('connect', () => {
			console.log(socket.id);
		});

		socket.emit('init parchis', (response) => {
			setState(response);
			console.log(response);
		});

		return () => socket.disconnect();
	}, []);

	return (
		<DndProvider backend={HTML5Backend}>
			<div className="board">
				<Cell
					cellId="homeBlue"
					state={state}
					setState={setState} />
				<PathBlock
					first={27}
					rotate="rotate-180"
					pathName="pathBlue"
					state={state}
					setState={setState} />
				<Cell
					cellId="homeYellow"
					state={state}
					setState={setState} />
				<PathBlock
					first={44}
					rotate="rotate-90"
					pathName="pathRed"
					state={state}
					setState={setState} />
				<CenterBlock
					state={state}
					setState={setState} />
				<PathBlock
					first={10}
					rotate="rotate-270"
					pathName="pathYellow"
					state={state}
					setState={setState} />
				<Cell
					cellId="homeRed"
					state={state}
					setState={setState} />
				<PathBlock
					first={61}
					pathName="pathGreen"
					state={state}
					setState={setState} />
				<Cell
					cellId="homeGreen"
					state={state}
					setState={setState} />
			</div>
		</DndProvider>
	);
}

const PathBlock = ({first, pathName, rotate, state, setState}) => {
	let firstIterator = first;
	let lastIterator = (first + 14) % 68;
	const cellList = [];
	for (let i = 6; i >= 0; i--) {
		cellList.push(
			<Cell
				key={`cell${firstIterator++}`}
				cellId={`cell${firstIterator}`}
				state={state}
				setState={setState} />);
		cellList.push(i === 0 ? 
			<Cell
				key={`cell${firstIterator++}`}
				cellId={`cell${firstIterator}`}
				state={state}
				setState={setState} /> :
			<Cell
				key={`${pathName}${i}`}
				cellId={`${pathName}${i}`}
				state={state}
				setState={setState} />);
		cellList.push(
			<Cell
				key={`cell${lastIterator--}`}
				cellId={`cell${lastIterator}`}
				state={state}
				setState={setState} />);
	}

	return (
		<div className={`block-path ${rotate || ""}`}>
			{cellList}
		</div>
	);
}


const CenterBlock = ({state, setState}) => (
	<div className="block-center">
		<CornerBlock
			first={8}
			state={state}
			setState={setState} />
		<CornerBlock
			rotate="rotate-270"
			first={25}
			state={state}
			setState={setState} />
		<CornerBlock
			rotate="rotate-180"
			first={42}
			state={state}
			setState={setState} />
		<CornerBlock
			rotate="rotate-90"
			first={59}
			state={state}
			setState={setState} />
		<div className="block-side">
			<Cell
				cellId="pathGreen7"
				state={state}
				setState={setState} />
		</div>
		<div className="block-side rotate-270">
			<Cell
				cellId="pathYellow7"
				state={state}
				setState={setState} />
		</div>
		<div className="block-side rotate-180">
			<Cell
				cellId="pathBlue7"
				state={state}
				setState={setState} />
		</div>
		<div className="block-side rotate-90">
			<Cell
				cellId="pathRed7"
				state={state}
				setState={setState} />
		</div>
		<div className="block-inner">
			<Cell
				cellId="finishGreen"
				state={state}
				setState={setState} />
			<Cell
				cellId="finishYellow"
				state={state}
				setState={setState} />
			<Cell
				cellId="finishBlue"
				state={state}
				setState={setState} />
			<Cell
				cellId="finishRed"
				state={state}
				setState={setState} />
		</div>
	</div>
);

const CornerBlock = ({first, rotate, state, setState}) => (
	<div className={`block-corner ${rotate || ""}`}>
		<Cell
			cellId={`cell${first}`}
			state={state}
			setState={setState} />
		<Cell
			cellId={`cell${first + 1}`}
			state={state}
			setState={setState} />
	</div>
);

export default Board;