import styles from "./lib/styles.jsx";

const style = {
  background: styles.colors.bg,
  cursor: "default",
  userSelect: "none",
  zIndex: "-1",
  borderRadius: 14,
  width: "30px",
  height: "30px",
  position: "fixed",
  overflow: "hidden",
  top: "5px",
  right: "40px",
  flex: 1,
  justifyContent: "center",
  textAlign: "center",
  fontFamily: styles.fontFamily,
  fontSize: styles.fontSize,
  lineHeight: styles.lineHeight,
  fontWeight: "700",
};

const myText = {
  color: styles.colors.extra5,
  marginTop: "3px",
  marginLeft: "-1px",
};

export const render = ({ output }) => {
  return (
    <div style={style}>
      <div style={myText}>
        <svg
          width="1em"
          height="1.9em"
          viewBox="0 0 16 16"
          class="bi bi-cloud-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
          />
        </svg>
      </div>
    </div>
  );
};

export default null;
