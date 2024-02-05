import React from "react";
import Hero from "./Hero.jsx";
import Text from "./Text.jsx";
import Market from "./Market.jsx";
import Slider from "./Slider.jsx";
import Join from "./Join.jsx";
function Home({ topCoins, setArrowStyle, resetArrowStyle, toSection }) {
  return (
    <>
      <Hero
        setArrowStyle={setArrowStyle}
        resetArrowStyle={resetArrowStyle}
        toSection={toSection}
      />

      <Text />
      <Market
        topCoins={topCoins}
        setArrowStyle={setArrowStyle}
        resetArrowStyle={resetArrowStyle}
      />
      <Slider toSection={toSection} />
      <Join setArrowStyle={setArrowStyle} resetArrowStyle={resetArrowStyle} />
    </>
  );
}

export default Home;
