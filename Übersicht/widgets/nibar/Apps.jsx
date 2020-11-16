import styles from "./lib/styles.jsx";

const style = {
  background: styles.colors.bg,
  cursor: "default",
  userSelect: "none",
  zIndex: "-1",
  borderRadius: 30,
  width: "442px",
  height: "30px",
  position: "fixed",
  overflow: "hidden",
  top: "865px",
  left: "34.7%",
  flex: 1,
  flexDirection: "row",
  color: styles.colors.bg,
  fontFamily: styles.fontFamily,
  fontSize: styles.fontSize,
  lineHeight: 2.4,
  fontWeight: "700",
  display: "block",
  userSelect: "none",
};

const mail = {
  marginLeft: "14px",
  color: styles.colors.extra2,
};

const spotify = {
  marginLeft: "16px",
  color: styles.colors.extra3,
};

const discord = {
  marginLeft: "16px",
  color: styles.colors.extra,
};

const chrome = {
  marginLeft: "16px",
  color: styles.colors.extra4,
};

const notion = {
  marginLeft: "15px",
  color: styles.colors.extra5,
};

const terminal = {
  marginLeft: "15px",
  color: styles.colors.extra6,
};

export const refreshFrequency = 1000000;

export const render = ({ output }) => {
  return (
    <div style={style}>
      <span style={mail}>
        <svg
          width="1em"
          height=".85em"
          viewBox="0 0 16 16"
          class="bi bi-envelope-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
          />
        </svg>{" "}
        MAIL
      </span>
      <span style={spotify}>
        <svg
          width="1em"
          height=".85em"
          viewBox="0 0 16 16"
          class="bi bi-music-note-beamed"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
          <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
          <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
        </svg>{" "}
        SPOTIFY
      </span>
      <span style={discord}>
        <svg
          width="1em"
          height=".85em"
          viewBox="0 0 16 16"
          class="bi bi-chat-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
        </svg>{" "}
        DISCORD
      </span>
      <span style={chrome}>
        <svg
          width="1em"
          height=".85em"
          viewBox="0 0 16 16"
          class="bi bi-star-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>{" "}
        CHROME
      </span>
      <span style={notion}>
        <svg
          width="1em"
          height=".85em"
          viewBox="0 0 16 16"
          class="bi bi-file-earmark-medical-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zm-3 2a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L5 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L7 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317V5.5zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"
          />
        </svg>{" "}
        NOTION
      </span>
      <span style={terminal}>
        <svg
          width="1em"
          height=".85em"
          viewBox="0 0 16 16"
          class="bi bi-terminal-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-6.354-.354L4.793 6.5 3.146 4.854a.5.5 0 1 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708z"
          />
        </svg>{" "}
        TERMINAL
      </span>
    </div>
  );
};

export default null;
