import styles from "./lib/styles.jsx";

const all = {
  flex: 1,
  justifyContent: "center",
  textAlign: "center",
  fontFamily: styles.fontFamily,
  fontSize: styles.fontSize,
  lineHeight: styles.lineHeight,
  fontWeight: "700",
  overflow: "hidden",
  position: "fixed",
  top: "5px",
  cursor: "default",
  userSelect: "none",
  zIndex: "-1",
};

const houseStyle = {
  borderRadius: 20,
  left: "345px",
  width: "30px",
  height: "30px",
  position: "fixed",
  background: styles.colors.bg,
  color: styles.colors.extra2,
};

const workStyle = {
  borderRadius: 20,
  left: "380px",
  background: styles.colors.bg,
  width: "30px",
  height: "30px",
  position: "fixed",
  color: styles.colors.extra3,
};

const projectStyle = {
  borderRadius: 20,
  left: "415px",
  background: styles.colors.bg,
  width: "30px",
  height: "30px",
  position: "fixed",
  color: styles.colors.extra4,
};

export const render = ({ output }) => {
  return (
    <div style={all}>
      <div>
        <div style={houseStyle}>
          <svg
            width="1em"
            height="2.4em"
            viewBox="0 0 16 16"
            class="bi bi-house-door-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z" />
            <path
              fill-rule="evenodd"
              d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
          </svg>
        </div>
        <div>
          <div style={workStyle}>
            <svg
              width="1em"
              height="2.5em"
              viewBox="0 0 16 16"
              class="bi bi-cup-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"
              />
            </svg>
          </div>
        </div>
        <div>
          <div style={projectStyle}>
            <svg
              width="1em"
              height="2.6em"
              viewBox="0 0 16 16"
              class="bi bi-heart-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default null;
