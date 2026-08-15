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
  { title: "Tic Tac Toe", thumbnail: TTT, about: "Classic 3x3 board game.", github: "https://github.com/FaiqaAamer/tictactoe", style: { top: "130px", left: "285px", backgroundColor: "rgba(255, 235, 205, 0.7)" } },
  { title: "Snake", thumbnail: Snake, about: "Retro snake game.", github: "https://github.com/FaiqaAamer/snake", style: { top: "215px", left: "371px", backgroundColor: "rgba(173, 216, 230, 0.7)" } },
  { title: "Whack-a-Mole", thumbnail: WaM, about: "Click the moles before they disappear!", github: "https://github.com/FaiqaAamer/whackamole", style: { top: "431px", left: "674px", backgroundColor: "rgba(240, 128, 128, 0.3)" } },
  { title: "Guess Number", thumbnail: GtN, about: "Try to guess the hidden number.", github: "https://github.com/FaiqaAamer/guess-number", style: { top: "345px", left: "243px", backgroundColor: "rgba(152, 251, 152, 0.3)" } },
  { title: "Hangman", thumbnail: SH, about: "Word guessing game.", github: "https://github.com/FaiqaAamer/hangman", style: { top: "171px", left: "630px", backgroundColor: "rgba(255, 182, 193, 0.3)" } },
  { title: "Memory Card", thumbnail: MC, about: "Flip cards to find pairs.", github: "https://github.com/FaiqaAamer/memory-card", style: { top: "474px", left: "415px", backgroundColor: "rgba(255, 255, 224, 0.48)" } },
  { title: "Quiz", thumbnail: Quiz, about: "Multiple-choice quiz game.", github: "https://github.com/FaiqaAamer/quiz", style: { top: "345px", left: "501px", backgroundColor: "rgba(221, 160, 221, 0.3)" } },
  { title: "Rock Paper Scissors", thumbnail: RPS, about: "Play against the computer.", github: "https://github.com/FaiqaAamer/rock-paper-scissors", style: { top: "301px", left: "717px", backgroundColor: "rgba(135, 206, 250, 0.3)" } },
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
      )}
    </div>
  );
}

export default GameGrid;
