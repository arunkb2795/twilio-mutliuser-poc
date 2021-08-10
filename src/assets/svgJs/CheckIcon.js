import * as React from "react";

function CheckIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      {...props}
    >
      <g data-name="Group 849" transform="translate(-538 -641)">
        <circle
          data-name="Ellipse 96"
          cx={9}
          cy={9}
          r={9}
          transform="translate(538 641)"
          fill="#685bc7"
        />
        <path
          data-name="check (1)"
          d="M551.387 647.5l-5.471 5.488-2.416-2.356"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
        />
      </g>
    </svg>
  );
}

export default CheckIcon;
