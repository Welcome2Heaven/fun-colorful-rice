import styles from "./styles.jsx";
import run from "uebersicht";

const containerStyle = {
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "0",
  userSelect: "none",
};

const desktopStyle = {
  width: "15px",
  height: "18px",
  alignItems: "center",
  paddingLeft: "7px",
  margin: "0px 0 0 0",
  userSelect: "none",
};

const renderSpace = (index, focused, visible, windows) => {
  let contentStyle = JSON.parse(JSON.stringify(desktopStyle));
  let hasWindows = windows.length > 0;
  if (focused == 1) {
    contentStyle.color = "#ae7753";
    contentStyle.fontWeight = "750";
  } else if (visible == 1) {
    contentStyle.color = styles.colors.fg;
  }
  return (
    <div style={contentStyle}>
      {index}
      {focused ? <span>&nbsp;</span> : null}
    </div>
  );
};

const render = ({ output }) => {
  if (typeof output === "undefined") return null;

  const spaces = [];

  output.forEach(function (space) {
    spaces.push(
      renderSpace(space.index, space.focused, space.visible, space.windows)
    );
  });

  return <div style={containerStyle}>{spaces}</div>;
};

export default render;
