import React from "react";

export default function ClockIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15.75"
      height="15.75"
      viewBox="0 0 15.75 15.75"
      {...props}
    >
      <defs>
        <style>{".prefix__a{fill: #22282a}"}</style>
      </defs>
      <g transform="translate(-1.25 -1.25)">
        <path
          className=".prefix__a"
          d="M9.125,1.25A7.875,7.875,0,1,0,17,9.125,7.884,7.884,0,0,0,9.125,1.25Zm0,14.651A6.776,6.776,0,1,1,15.9,9.125,6.783,6.783,0,0,1,9.125,15.9Z"
        />
        <path
          className=".prefix__a"
          d="M14.975,11.168,12.349,9.856V5.8a.549.549,0,1,0-1.1,0v4.4a.55.55,0,0,0,.3.492l2.93,1.465a.543.543,0,0,0,.245.058.549.549,0,0,0,.246-1.041Z"
          transform="translate(-2.674 -1.07)"
        />
      </g>
    </svg>
  );
}
