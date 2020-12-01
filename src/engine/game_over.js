function game_over(board){
    for(value in board)
        if(value == 0)
            return 0;
    return 1;
}
export default game_over;