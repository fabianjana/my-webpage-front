import { useDrag } from 'react-dnd';

const Piece = ({id, className, state, setState}) => {

	const [{isDragging}, drag] = useDrag(() => ({
		type: 'piece',
		item: {id},
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
			item: monitor.getItem()
		}),
	}));

	return (
		<div
			ref={drag}
			style={{
				opacity: isDragging ? 0 : 1,
				transform: 'translate(0,0)',
				cursor: isDragging ? 'grabbing' : 'grab'
			}}
			className={className}
			id={id}
			onDragStart={() => setState({...state, selectedPiece:""})}
			onClick={() => setState({...state, selectedPiece:id})} />
	);
}

export default Piece;
