function check_win(board){
    for(index = 0; index < 9; index += 3){
        if(board[index] == 1 && board[index+1] == 1 && board[index+2] == 1)
            return 1;
        if(board[index] == -1 && board[index+1] == -1 && board[index+2] == -1)
            return -1;
    }
    for(index = 0; index < 3; index++){
        if(board[index] == 1 && board[index+3] == 1 && board[index+6] == 1)
            return 1;
        if(board[index] == -1 && board[index+3] == -1 && board[index+6] == -1)
            return -1;
    }
    if(board[0] == 1 && board[4] == 1 && board[8] == 1)
        return 1;
    if(board[2] == 1 && board[4] == 1 && board[6] == 1)
        return 1;
    if(board[0] == -1 && board[4] == -1 && board[8] == -1)
        return -1;
    if(board[2] == -1 && board[4] == -1 && board[6] == -1)
        return -1;
    return 0;
}
export default check_win;