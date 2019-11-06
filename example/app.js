import React from "react";
import { render } from "react-dom";
import SeasonalBackground from "../src/index";
import { Button, Icon } from "semantic-ui-react";

const alertContainerStyle = {
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "33px",
  background: "rgba(0, 0, 0, 0.69)",
  border: "3px groove honeydew",
  borderRadius: "13px",
  boxShadow: "3px 3px 6px grey",
  color: "white"
};
const App = () => (
  <SeasonalBackground
    background='https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-company-profile-corporate-culture-brochure-cross-page-design-background-material-image_131621.jpg'
    droplet='https://cdn.pixabay.com/photo/2012/04/26/12/37/dollar-42338_960_720.png'
    season='winter'
    // innerContent={<h1>Hello World!</h1>}
    development
  />
);
render(<App />, document.getElementById("root"));
