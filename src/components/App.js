import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [index, setIndex] = useState(0)
  const [eatenSushis, setEatenSushis] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushi) => setSushis(sushi))
  }, [])

  const fourSushi = sushis.slice(index, index + 4)

  function moreSushi() {
    setIndex(index + 4)
    if (index >= 96) {
      return setIndex(0)
    }
  }

  function eatSushi(sushi) {
    if (!eatenSushis.includes(sushi.id) && wallet >= sushi.price) {
      return (
        setWallet(wallet - sushi.price),
        setEatenSushis([...eatenSushis, sushi.id])
      )
    }
  }


  return (
    <div className="app">
      <SushiContainer
        sushis={fourSushi}
        moreSushi={moreSushi}
        eatSushi={eatSushi}
        eatenSushis={eatenSushis}
      />
      <Table
        wallet={wallet}
        plates={eatenSushis}

      />
    </div>
  );
}

export default App;
