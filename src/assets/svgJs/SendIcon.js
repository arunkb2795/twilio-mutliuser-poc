import * as React from "react";

function SendIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M15.997.525a.561.561 0 00-.029-.149.47.47 0 00-.019-.051.534.534 0 00-.109-.164.544.544 0 00-.164-.109l-.052-.019a.545.545 0 00-.146-.028h-.045a.571.571 0 00-.172.029L.374 5.239a.558.558 0 00-.042 1.038l6.5 2.889 2.889 6.5a.56.56 0 00.511.331h.022a.558.558 0 00.5-.373L15.971.741A.575.575 0 0016 .568c0-.014-.003-.028-.003-.043zM13.32 1.891L7.134 8.077 2.072 5.828zm-3.147 12.037L7.924 8.866 14.11 2.68z" />
    </svg>
  );
}

export default SendIcon;