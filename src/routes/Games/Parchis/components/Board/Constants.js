const board =  {
	homeBlue: {
		cellClass: "cell cell-blue",
		piecesClass: "home-pieces"
	},
	homeRed: {
		cellClass: "cell cell-red",
		piecesClass: "home-pieces"
	},
	homeGreen: {
		cellClass: "cell cell-green",
		piecesClass: "home-pieces"
	},
	homeYellow: {
		cellClass: "cell cell-yellow",
		piecesClass: "home-pieces"
	},
}

const leftNumbers = [];
for (let i=0, a=1, b=18, c=35, d=52; i<8; i++, a++, b++, c++, d++) {
	leftNumbers.push(a,b,c,d);
}
const safeNumbers = [12,17,29,34,46,51,63,68];
const startNumbers = [5,22,39,56];
for (let i=1; i<69; i++) {
		board[`cell${i}`] = {
			cellClass:
				[8,9,25,26,42,43,59,60].includes(i) ? "cell cell-normal cell-corner" :
				safeNumbers.includes(i) ? "cell cell-safe cell-circle" :
				i === 5 ? "cell cell-green cell-circle" :
				i === 22 ? "cell cell-yellow cell-circle" : 
				i === 39 ? "cell cell-blue cell-circle" : 
				i === 56 ? "cell cell-red cell-circle" : "cell cell-normal",
			cellNumber: [...safeNumbers,...startNumbers].includes(i) ? false : i,
			numberClass: leftNumbers.includes(i) ? "number-left" : "number-right",
			piecesClass:
				[9,26,43,60].includes(i) ? "corner-pieces-rotated" : 
				[8,25,42,59].includes(i) ? "corner-pieces" : "pieces"
		}
}

for (let i=1; i<8; i++){
	board[`pathBlue${i}`] = {
		cellClass: i===7 ? "cell cell-blue cell-side" : "cell cell-blue",
		piecesClass: "pieces"
	}
}

for (let i=1; i<8; i++){
	board[`pathRed${i}`] = {
		cellClass: i===7 ? "cell cell-red cell-side" : "cell cell-red",
		piecesClass: "pieces"
	}
}

for (let i=1; i<8; i++){
	board[`pathGreen${i}`] = {
		cellClass: i===7 ? "cell cell-green cell-side" : "cell cell-green",
		piecesClass: "pieces"
	}
}

for (let i=1; i<8; i++){
	board[`pathYellow${i}`] = {
		cellClass: i===7 ? "cell cell-yellow cell-side" : "cell cell-yellow",
		piecesClass: "pieces"
	}
}

board['finishBlue'] = {
	cellClass: "cell cell-blue cell-inner rotate-180",
	piecesClass: "finish-pieces"
};

board['finishRed'] = {
	cellClass: "cell cell-red cell-inner rotate-90",
	piecesClass: "finish-pieces"
}

board['finishGreen'] = {
	cellClass: "cell cell-green cell-inner",
	piecesClass: "finish-pieces"
}

board['finishYellow'] = {
	cellClass: "cell cell-yellow cell-inner rotate-270",
	piecesClass: "finish-pieces"
}


const pieceStyle = {}

for (let i = 0; i < 4; i++) {
	pieceStyle[`blue${i}`] = "piece piece-blue";
	pieceStyle[`red${i}`] = "piece piece-red";
	pieceStyle[`green${i}`] = "piece piece-green";
	pieceStyle[`yellow${i}`] = "piece piece-yellow";
}

const boardStyle = board;

export { boardStyle, pieceStyle };