const videoIndicator = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="video-indicator"
    style={{
      position: "absolute",
      width: "50px",
      height: "50px",
      top: "40%",
      left: "40%",
      pointerEvents: "none",
    }}>
    <polygon
      points="5 3 19 12 5 21 5 3"
      style={{ fill: "#9d888ca8", stroke: "none" }}
    />
  </svg>
);

export default videoIndicator;
