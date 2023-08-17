import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushis, moreSushi, eatSushi, eatenSushis }) {
  const renderSushis = sushis.map((sushi) => {
    return <Sushi
      key={sushi.id}
      sushi={sushi}
      eatSushi={eatSushi}
      eatenSushis={eatenSushis}
    />
  })


  return (
    <div className="belt">
      {renderSushis}
      <MoreButton
        moreSushi={moreSushi}

      />
    </div>
  );
}

export default SushiContainer;
