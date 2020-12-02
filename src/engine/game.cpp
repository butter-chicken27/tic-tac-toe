#include <iostream>

using namespace std;

//check if any moves are left
int check_game_over(int board[], int size)
{
    for (int i = 0; i < size; i++)
        if (board[i] == 0)
            return 0; //game not over
    return 1;         //game over
}

//X_win return 1, O_win return -1, else 0
int check_win(int board[], int size)
{
    //check rows
    for (int i = 0; i < 9; i += 3)
    {
        if (board[i] == 1 && board[i + 1] == 1 && board[i + 2] == 1)
            return 1;
        if (board[i] == -1 && board[i + 1] == -1 && board[i + 2] == -1)
            return -1;
    }
    //check columns
    for (int i = 0; i < 3; i++)
    {
        if (board[i] == 1 && board[i + 3] == 1 && board[i + 6] == 1)
            return 1;
        if (board[i] == -1 && board[i + 3] == -1 && board[i + 6] == -1)
            return -1;
    }
    //checking diagonal wins
    if (board[0] == 1 && board[4] == 1 && board[8] == 1)
        return 1;
    if (board[2] == 1 && board[4] == 1 && board[6] == 1)
        return 1;
    if (board[0] == -1 && board[4] == -1 && board[8] == -1)
        return -1;
    if (board[2] == -1 && board[4] == -1 && board[6] == -1)
        return -1;
    return 0;
}

int minimax(int board[], int size, int max_min, int level)
{
    int result = check_win(board, size);
    if (result == 1)
    {
        return 10;
    }
    else if (result == -1)
    {
        return -10;
    }
    if (check_game_over(board, size) == 1)
    {
        return 0;
    }
    if (max_min == 1)
    {
        int best = -100;
        for (int i = 0; i < size; i++)
        {
            if (board[i] == 0)
            {
                board[i] = 1;
                int value = minimax(board, size, 0, level + 1);
                board[i] = 0;
                if (value > best)
                {
                    best = value;
                }
            }
        }
        return best;
    }
    if (max_min == 0)
    {
        int best = 100;
        for (int i = 0; i < size; i++)
        {
            if (board[i] == 0)
            {
                board[i] = -1;
                int value = minimax(board, size, 1, level + 1);
                board[i] = 0;
                if (value < best)
                {
                    best = value;
                }
            }
        }
        return best;
    }
}

int best_move(int board[], int size)
{
    int move;
    int best = 100;
    for (int i = 0; i < size; i++)
    {
        if (board[i] == 0)
        {
            board[i] = -1;
            int value = minimax(board, size, 1, 0);
            board[i] = 0;
            if (value < best)
            {
                best = value;
                move = i;
            }
        }
    }
    return move;
}

int main(void)
{
    int result = 0;
    int board[9];
    for (int i = 0; i < 9; i++)
        board[i] = 0;
    int player_move;
    cout << "Make your move: ";
    cin >> player_move;
    board[player_move] = 1;
    while (check_game_over(board, 9) == 0)
    {
        int move = best_move(board, 9);
        board[move] = -1;
        cout << "The machine plays move " << move << endl;
        if (check_win(board, 9) != 0)
        {
            result = -1;
            cout << "The machine wins" << endl;
            break;
        }
        cin >> player_move;
        board[player_move] = 1;
        if (check_win(board, 9) != 0)
        {
            result = -1;
            cout << "I am stoopid" << endl;
            break;
        }
    }
    if (result == 0)
        cout << "That's a draw folks" << endl;
}