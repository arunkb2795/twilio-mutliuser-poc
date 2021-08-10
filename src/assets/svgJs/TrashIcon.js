import * as React from "react";

function TrashIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={15.3}
      height={16.856}
      viewBox="0 0 15.3 16.856"
      {...props}
    >
      <defs>
        <style>
          {
            ".prefix__t{fill:none;stroke:#22282a;stroke-linecap:round;stroke-linejoin:round;strokeWidth:1.3px}"
          }
        </style>
      </defs>
      <g>
        <path
          className="prefix__t"
          d="M.65 3.761h14M13.094 3.761V14.65a1.556 1.556 0 01-1.555 1.556H3.761a1.556 1.556 0 01-1.555-1.556V3.761m2.333 0V2.206A1.556 1.556 0 016.094.65h3.112a1.556 1.556 0 011.555 1.556v1.555M6.094 7.65v4.667M9.206 7.65v4.667"
        />
      </g>
    </svg>
  );
}

export default TrashIcon;
