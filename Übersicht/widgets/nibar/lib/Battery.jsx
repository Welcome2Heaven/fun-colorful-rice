import styles from "./styles.jsx";
const style = {
  color: styles.colors.extra2,
};

const render = ({ output }) => {
  let charging = output.charging;
  let percentage = output.percentage;
  return (
    <div>
      <div
        style={
          percentage < 10 || charging == false
            ? { color: styles.colors.red }
            : null
        }
      >
        <span style={style}>
          {charging ? "⚡ " : " "}
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default render;
