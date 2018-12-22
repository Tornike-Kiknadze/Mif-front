import React from "react";

const Dash = props => (
  <svg width={120} height={2} {...props}>
    <path
      d="M100 1H1"
      fill="none"
      stroke="#f2f2f0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      strokeDasharray="12 6 4 8 8 12"
    />
  </svg>
);

export default Dash;
