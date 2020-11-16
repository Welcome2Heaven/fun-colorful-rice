import DateTime from "./lib/DateTime.jsx";
import Battery from "./lib/Battery.jsx";
import Error from "./lib/Error.jsx";
import parse from "./lib/parse.jsx";
import styles from "./lib/styles.jsx";

const style = {
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "20px",
  borderRadius: 30,
  position: "fixed",
  overflow: "hidden",
  right: "86px",
  top: "10px",
  color: styles.colors.extra3,
  fontFamily: styles.fontFamily,
  fontSize: styles.fontSize,
  lineHeight: styles.lineHeight,
  fontWeight: styles.fontWeight,
};

const style2 = {
  fontSize: "18px",
  color: styles.colors.dim,
};

export const refreshFrequency = 10000;

export const command = "./nibar/scripts/status.sh";

export const render = ({ output }) => {
  const data = parse(output);
  if (typeof data === "undefined") {
    return (
      <div style={style}>
        <Error msg="Error: unknown script output" side="right" />
      </div>
    );
  }
  return (
    <div style={style}>
      <span style={style2}></span>
      <Battery output={data.battery} />
      <DateTime output={data.datetime} />
    </div>
  );
};

export default null;
