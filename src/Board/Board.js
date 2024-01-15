import React from "react";
import "./Board.css";

const Board = ({ parts, boardWidth, boardHeight }) => {
  const shelves = [];

  parts.sort((a, b) => b.height - a.height || b.width - a.width);

  parts.forEach((part) => {
    let placed = false;

    for (let i = 0; i < shelves.length; i++) {
      const shelf = shelves[i];

      if (shelf.width - shelf.usedWidth >= part.width) {
        part.x = shelf.usedWidth;
        part.y = shelf.y;
        shelf.usedWidth += part.width;
        placed = true;
        break;
      }
    }

    if (!placed) {
      part.x = 0;
      part.y = shelves.reduce(
        (maxHeight, shelf) => Math.max(maxHeight, shelf.y + shelf.height),
        0
      );
      shelves.push({
        usedWidth: part.width,
        y: part.y,
        height: part.height,
        width: boardWidth,
      });
    }
  });

  return (
    <div className="board" style={{ width: boardWidth, height: boardHeight }}>
      {parts.map((part, index) => (
        <div
          key={index}
          className="part"
          style={{
            width: part.width,
            height: part.height,
            top: part.y,
            left: part.x,
          }}
        >
          {part.quantity}
        </div>
      ))}
    </div>
  );
};

export default Board;
