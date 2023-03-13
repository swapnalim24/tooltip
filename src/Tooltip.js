import React, { useState } from "react";

const Tooltip = ({ position, children, content }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const getPositionStyles = () => {
    switch (position) {
      case "top":
        return { top: "-40px", left: "50%", transform: "translateX(-50%)" };
      case "bottom":
        return { bottom: "-40px", left: "50%", transform: "translateX(-50%)" };
      case "right":
        return { top: "50%", right: "-70px", transform: "translateY(-50%)" };
      case "left":
        return { top: "50%", left: "-70px", transform: "translateY(-50%)" };
      default:
        return {};
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: "inline-block" }}
      >
        {children}
      </div>
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "#333",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "5px",
            ...getPositionStyles()
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
