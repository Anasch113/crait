import React from "react";
import Hero from "./Hero.jsx";
import Text from "./Text.jsx";

import Join from "./Join.jsx";
function Home({ setArrowStyle, resetArrowStyle}) {
  return (
    <>
      <Hero
        setArrowStyle={setArrowStyle}
        resetArrowStyle={resetArrowStyle}
      />

      <Text />
      <Join setArrowStyle={setArrowStyle} resetArrowStyle={resetArrowStyle} />
    </>
  );
}

export default Home;
