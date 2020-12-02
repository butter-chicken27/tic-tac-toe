import check_win from "./check_win.js";
import game_over from "./game_over.js";

function minimax(board, max_min, level){
    const result = check_win(board);
    if(result === 1)
        return (10 - level);
    else if(result === -1)
        return (-10 + level);
    if(game_over(board) === 1)
        return 0;
    if(max_min === 1){
        let best = -100;
        for(let i = 0; i < board.length; i++){
            if(board[i] === 0){
                board[i] = 1;
                let value = minimax(board, 0, level + 1);
                board[i] = 0;
                if(value > best)
                    best = value;
            }
        }
        return best;
    }
    else if(max_min === 0){
        let best = 100;
        for(let i = 0; i < board.length; i++){
            if(board[i] === 0){
                board[i] = -1;
                let value = minimax(board, 1, level + 1);
                board[i] = 0;
                if(value < best)
                    best = value;
            }
        }
        return best;
    }
}
export default minimax;