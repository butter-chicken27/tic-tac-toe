function game_over(board){
    for(let i = 0; i < 9; i++){
        if(board[i] === 0)
            return 0;
    }
    return 1;
}
export default game_over;