import * as React from "react";

function EmailIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14.739}
      height={11.653}
      viewBox="0 0 14.739 11.653"
      {...props}
    >
      <defs>
        <style>
          {
            ".prefix__a{fill:none;stroke:#22282a;stroke-linecap:round;stroke-linejoin:round;strokeWidth:1.2px}"
          }
        </style>
      </defs>
      <path
        className="prefix__a"
        d="M2.143.6h10.453a1.31 1.31 0 011.307 1.307v7.84a1.31 1.31 0 01-1.307 1.307H2.143A1.31 1.31 0 01.836 9.746V1.907A1.31 1.31 0 012.143.6z"
      />
      <path className="prefix__a" d="M13.902 1.917l-6.533 4.61-6.533-4.61" />
    </svg>
  );
}

export default EmailIcon;
