import * as React from "react";

function EyeIcon(props) {
  return (
    <svg
      id="prefix__Icons"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      {...props}
    >
      <style>
        {
          ".prefix__st1{fill:none;stroke:#000;strokeWidth:2;stroke-linejoin:round;stroke-miterlimit:10}"
        }
      </style>
      <path
        className="prefix__st1"
        d="M29 16s-5.8 8-13 8-13-8-13-8 5.8-8 13-8 13 8 13 8z"
      />
      <circle className="prefix__st1" cx={16} cy={16} r={4} />
    </svg>
  );
}

export default EyeIcon;
