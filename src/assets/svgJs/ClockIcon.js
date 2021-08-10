import * as React from "react";

function ClockIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14.2}
      height={14.2}
      viewBox="0 0 14.2 14.2"
      {...props}
    >
      <defs>
        <style>
          {
            ".prefix__a{fill:none;stroke:#22282a;stroke-linecap:round;stroke-linejoin:round;strokeWidth:1.2px}"
          }
        </style>
      </defs>
      <g transform="translate(-119.4 -648.889)">
        <circle
          className="prefix__a"
          cx={6.5}
          cy={6.5}
          r={6.5}
          transform="translate(120 649.489)"
        />
        <path className="prefix__a" d="M126.437 652.159v3.913l2.609 1.3" />
      </g>
    </svg>
  );
}

export default ClockIcon;
