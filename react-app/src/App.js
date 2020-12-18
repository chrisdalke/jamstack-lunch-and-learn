import './App.scss';
import Orange from './Orange';
import { Spinner, Intent, Tag } from '@blueprintjs/core';
import { useState, useEffect } from 'react';
import Toaster from './Toaster';
import confetti from 'canvas-confetti';

function App() {
  const [numFactsLeft, setNumFactsLeft] = useState(5);
  const [factsArray, setFactsArray] = useState([
    "Oranges are delicious",
    "Oranges are the largest citrus fruit in the world.",
    "Orange juice is the most popular fruit juice in America.",
    "There are over 600 varieties of oranges.",
    "Florida is the top orange producer in the United States.",
    "Spain has over 35 million orange trees.",
    "Brazil is the world leader in orange production, producing about half of the world’s orange juice and approximately 80% of the world’s orange concentrate.",
    "With a high resistance to disease, more oranges are killed by lightning than by plant diseases.",
    "Oranges are one of the most popular fruits around the world.",
    "They have a brightly colored outer rind covering the soft, juicy, pulpy fruit.",
    "There are now over 600 varieties of oranges worldwide.",
    "Oranges originated around 4000 B.C. in Southeast Asia, from which they spread to India.",
    "Oranges are unknown in the wild. They are a hybrid of the pomelo, or “Chinese grapefruit” (which is pale green or yellow), and the tangerine.",
    "The orange tree is an evergreen, flowering tree, with an average height of 9 to 10 m (30 to 33 ft).",
    "Its oval leaves, alternately arranged, are 4 to 10 cm (1.6 to 3.9 in) long and have crenulate margins.",
    "The flowers of an orange tree are white in color and have a wonderful fragrance.",
    "Ideal conditions for growing oranges are in sub-tropical areas that have good amounts of sunshine yet moderate to warm temperatures 15.5°C – 29°C (60°F – 84 °F).",
    "There are typically ten segments inside an orange.",
    "The color Orange is named after the Orange fruit. Before orange made its way from China to Europe, yellow-red was called simply that: yellow-red, or even just red.",
    "The orange blossom is used in perfume making, has been written about as an aphrodisiac and is the state flower of Florida.",
    "Orange peel can be used by gardeners to sprinkle over vegetables as a slug repellent.",
    "Oranges are actually modified berries, containing volatile oil glands in pits.",
  ]);
  const [fact, setFact] = useState({
    message: "",
    num: 0
  });
  const [isLoading, setLoading] = useState(true);

  const selectFact = () => {
    setFact({
      message: factsArray.random(),
      num: Math.floor(Math.random() * 1000) + 1
    })
  }

  useEffect(() => {
    setTimeout(function(){
      selectFact();
      setLoading(false);
    }, 1000);
  }, []);

  var count = 200;
  var defaults = {
    origin: { y: 0.5 },
    colors: ["#D9822B", "#F29D49", "#FFB366", "#F5F8FA", "#EBF1F5", "#E1E8ED"],
    zIndex: 10
  };

  function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }


  const onClick = () => {
    if (numFactsLeft > 0) {
      selectFact();
      //setNumFactsLeft(numFactsLeft - 1);
      /*Toaster.show({
        message: `${numFactsLeft-1} facts left today!`,
        intent: Intent.WARNING
      });*/
      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    } else {
      Toaster.show({
        message: "You have no more facts left today! Please come back later.",
        intent: Intent.DANGER
      });
    }
  };

  return (
    <div className="appContainer bp3-dark">
      <a className="backToHomeLink" href="https://www.factsaboutoranges.com/">Back to Home</a>
      <div className="orangeContainer">
        {isLoading ? (
          <>
          <Spinner />
          <h1>Loading facts...</h1>
          </>
        ) : (
          <>
          <Orange canClick={numFactsLeft > 0} onClick={onClick} />
          <div className="orangeFactContainer">
          <Tag large minimal>FACT #{fact.num}</Tag>
          <h1>{fact.message}</h1>
          </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
