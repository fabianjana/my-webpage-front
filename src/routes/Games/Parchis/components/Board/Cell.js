import { useDrop } from 'react-dnd';
import { boardStyle, pieceStyle } from './Constants';

import Piece from './Piece';

const Cell = ({cellId, state, setState}) => {
	const cell = boardStyle[cellId];

	const [{ isOver }, drop] = useDrop(() => ({
		accept: 'piece',
		collect: monitor => ({
			isOver: !!monitor.isOver()
		}),
		drop: monitor => {
			setState((prevState) => ({
				...prevState,
				pieces: {
					...prevState.pieces,
					[monitor.id]: cellId
				}
			}));
		},
	}), []);

	return (
		<div
			key={cellId}
			id={cellId}
			className={`${cell.cellClass} ${isOver ? "cell-highlight" : ""}`}
			ref={drop}>
			{cell.cellNumber ? <div className={cell.numberClass}>{cell.cellNumber}</div> : ''}
			<div className={cell.piecesClass}>
					{Object
						.keys(state.pieces)
						.filter(key => state.pieces[key] === cellId)
						.map(pieceId => (
						<Piece
							key={pieceId}
							id={pieceId}
							className={`${pieceStyle[pieceId]} ${state.selectedPiece === pieceId ? 'selected' : ''}`}
							state={state}
							setState={setState} />
					))}
					{/* {Object.entries(cell.spots).map(([, piece]) => (
						<Piece
							key={piece.id}
							id={piece.id}
							className={`${piece.pieceClass} ${state.selectedPiece === piece.id ? 'selected' : ''}`}
							state={state}
							setState={setState} />
					))} */}
			</div>
		</div>
	);
}

export default Cell;