const render = ({ output }) => {
  if (typeof output === "undefined") return null;
  return (
    <div>
      {" "}
      <svg
        width="1em"
        height=".8em"
        viewBox="0 0 16 16"
        class="bi bi-calendar-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
      </svg>
      &nbsp;
      {output.date}&nbsp;&nbsp;&nbsp;
      <svg
        width="1em"
        height=".8em"
        viewBox="0 0 16 16"
        class="bi bi-clock-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
        />
      </svg>
      &nbsp;
      {output.time}
    </div>
  );
};

export default render;
