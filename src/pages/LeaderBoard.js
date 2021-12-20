import React from "react";
import Ranks from "./Ranks";
import PositionTable from "./PositionTable";
import "./LeaderBoard.css";

function LeaderBoard() {
  return (
    <div className="leaderboard-container">
      <h1 className="header">
        <p className="heading">Leaderboard</p>
        <p className="heading-line">
          <hr />
        </p>
      </h1>

      {/* -------------- Ranks box ----------------- */}
      <Ranks></Ranks>
      {/* --------------- Table ------------------- */}
      <PositionTable></PositionTable>
    </div>
  );
}

export default LeaderBoard;
