import React from "react";
import { render } from "react-dom";
import Alert from "../src/Alert";
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
const alertContainer = (
  <div style={alertContainerStyle}>
    <img heigh="150px" width="150px" src="./images/icon-140.png" />
    <Button
      href="www.google.com"
      icon
      labelPosition="left"
      style={{ backgroundColor: "forestgreen", color: "white" }}
    >
      <Icon name="hand point left outline" />
      Back to Platform
    </Button>
  </div>
);
const handleClick = data => console.log(data);

const App = () => (
  <Alert onClick={handleClick} alertContainer={alertContainer} />
);
render(<App />, document.getElementById("root"));
