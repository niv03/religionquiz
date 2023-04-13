import java.util.Random;
import java.util.Scanner;

public class SnakesAndLadders {
   public static void main(String[] args) {
      // Define the game board
      int[] ladders = {4, 14, 33, 42, 50, 66, 80};
      int[] snakes = {17, 28, 45, 58, 76, 88, 99};
      int[] ladderEnds = {14, 34, 48, 63, 67, 86, 99};
      int[] snakeEnds = {7, 22, 13, 37, 31, 48, 79};
      int[] positions = {1, 1};
      int currentPlayer = 0;
      boolean gameOver = false;

      Scanner scanner = new Scanner(System.in);
      Random random = new Random();

      // Game loop
      while (!gameOver) {
         // Print the board
         printBoard(positions);

         // Roll the dice and move the player's token
         System.out.printf("Player %d, press enter to roll the dice\n", currentPlayer + 1);
         scanner.nextLine();
         int diceRoll = random.nextInt(6) + 1;
         System.out.printf("You rolled a %d\n", diceRoll);
         positions[currentPlayer] += diceRoll;

         // Check if the player landed on a ladder or a snake
         int newPosition = checkForLadderOrSnake(positions[currentPlayer], ladders, snakes, ladderEnds, snakeEnds);
         if (newPosition != positions[currentPlayer]) {
            System.out.printf("You landed on a %s, moving to square %d\n", newPosition > positions[currentPlayer] ? "ladder" : "snake", newPosition);
            positions[currentPlayer] = newPosition;
         }

         // Check if the player has won
         if (positions[currentPlayer] == 100) {
            System.out.printf("Player %d has won!\n", currentPlayer + 1);
            gameOver = true;
         }

         // Switch to the next player
         currentPlayer = (currentPlayer + 1) % 2;
      }
   }

   // Prints the game board with the current positions of the players
   public static void printBoard(int[] positions) {
      int[][] board = new int[10][10];
      int count = 1;
      for (int i = 9; i >= 0; i--) {
         if (i % 2 == 0) {
            for (int j = 0; j < 10; j++) {
               board[i][j] = count;
               count++;
            }
         } else {
            for (int j = 9; j >= 0; j--) {
               board[i][j] = count;
               count++;
            }
         }
      }

      System.out.println("Current board:");
      for (int i = 9; i >= 0; i--) {
         for (int j = 0; j < 10; j++) {
            if (positions[0] == board[i][j] && positions[1] == board[i][j]) {
               System.out.print("X");
            } else if (positions[0] == board[i][j]) {
               System.out.print("1");
            } else if (positions[1] == board[i][j]) {
               System.out
