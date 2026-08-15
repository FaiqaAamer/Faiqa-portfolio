import React, { useState } from "react";
import "./GameGrid.css";
import grid from "../../assets/GameGrid/Grid.png";

// Import all game images
import TTT from "../../assets/GameGrid/TTT.png";
import Snake from "../../assets/GameGrid/Snake.png";
import WaM from "../../assets/GameGrid/WaM.png";
import GtN from "../../assets/GameGrid/GtN.png";
import SH from "../../assets/GameGrid/SH.png";
import MC from "../../assets/GameGrid/MC.png";
import Quiz from "../../assets/GameGrid/Quiz.png";
import RPS from "../../assets/GameGrid/RPS.png";

const games = [
  { title: "Tic Tac Toe", thumbnail: TTT, about: "A classic two-player Tic Tac Toe game played on a 3x3 grid. There are 8 winning patterns in this game. One player is represented by X and other is by O.", github: "https://github.com/FaiqaAamer/Mini-games-hub/tree/main/TicTacToe", style: { top: "130px", left: "285px", backgroundColor: "rgba(255, 235, 205, 0.7)" } },
  { title: "Snake", thumbnail: Snake, about: "A classic snake game where the player controls a snake that moves around the grid, eats apples to grow longer, and avoids colliding with walls or itself. The goal is to achieve the highest score possible before the snake crashes!", github: "https://github.com/FaiqaAamer/Mini-games-hub/tree/main/SnakeGame", style: { top: "215px", left: "371px", backgroundColor: "rgba(173, 216, 230, 0.7)" } },
  { title: "Whack-a-Mole", thumbnail: WaM, about: "A fun JavaScript mini‑game where the player tries to click on moles popping out of holes before they disappear. Each hit increases the score, and the game ends after a set time limit.", github: "https://github.com/FaiqaAamer/Mini-games-hub/tree/main/WhackaMole", style: { top: "431px", left: "674px", backgroundColor: "rgba(240, 128, 128, 0.3)" } },
  { title: "Guess Number", thumbnail: GtN, about: "A fun JavaScript mini‑game where the player tries to guess a randomly generated number between 1 and 100. Each guess gives feedback - too high, too low, or correct - and tracks the number of attempts.", github: "https://github.com/FaiqaAamer/Mini-games-hub/tree/main/GuessTheNumber", style: { top: "345px", left: "243px", backgroundColor: "rgba(152, 251, 152, 0.3)" } },
  { title: "Hangman", thumbnail: SH, about: "A classic word‑guessing game where the player tries to guess a hidden word by selecting letters from an on‑screen keyboard. Each wrong guess draws part of the hangman figure. Player should guess the word before the figure is complete!", github: "https://github.com/FaiqaAamer/Mini-games-hub/tree/main/SimpleHangman", style: { top: "171px", left: "630px", backgroundColor: "rgba(255, 182, 193, 0.3)" } },
  { title: "Memory Card", thumbnail: MC, about: "A simple single-player Memory Card game with multiple difficulty levels. Easy level has 6 pairs of cards, Medium level has 9 pairs of cards and Hard level has 12 pairs of cards", github: "https://github.com/FaiqaAamer/Mini-games-hub/tree/main/MemoryCard", style: { top: "474px", left: "415px", backgroundColor: "rgba(255, 255, 224, 0.48)" } },
  { title: "Quiz", thumbnail: Quiz, about: "A simple coding‑based quiz game where players answer multiple‑choice questions. Each question tests your programming knowledge, and your score is shown at the end.", github: "https://github.com/FaiqaAamer/Mini-games-hub/tree/main/QuizApp", style: { top: "345px", left: "501px", backgroundColor: "rgba(221, 160, 221, 0.3)" } },
  { title: "Rock Paper Scissors", thumbnail: RPS, about: "A simple Player vs Computer Rock Paper Scissors game.This is an infinite game. User chooses an option and the computer option is chosed automatically", github: "https://github.com/FaiqaAamer/Mini-games-hub/tree/main/RockPaperScissors", style: { top: "301px", left: "717px", backgroundColor: "rgba(135, 206, 250, 0.3)" } },
];

function GameGrid() {
  const [selectedGame, setSelectedGame] = useState(null);

  const openModal = (game) => setSelectedGame(game);
  const closeModal = () => setSelectedGame(null);

  return (
    <div className="game-grid" style={{ backgroundImage: `url(${grid})` }}>
      {games.map((game, index) => (
        <div
          key={index}
          className="grid-cell"
          style={game.style}
          onClick={() => openModal(game)}
        >
          <span>{game.title}</span>
        </div>
      ))}

      {selectedGame && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedGame.title}</h2>
            <img
              src={selectedGame.thumbnail}
              alt={selectedGame.title}
              className="modal-img"
            />
            <p>{selectedGame.about}</p>
            <div className="modal-actions">
              <a
                href={selectedGame.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                🔗 GitHub Repo
              </a>
              <button className="close-btn" onClick={closeModal}>
                ✖ Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameGrid;
