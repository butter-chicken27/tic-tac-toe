import minimax from "./minimax.js";

function best_move(board){
    let move;
    let best = 100;
    for(let index = 0; index < board.length; index++){
        if(board[index] === 0){
            board[index] = -1;
            const value = minimax(board, 1, 0);
            board[index] = 0;
            if(value < best){
                best = value;
                move = index;
            }
        }
    }
    return move;
}

export default best_move;