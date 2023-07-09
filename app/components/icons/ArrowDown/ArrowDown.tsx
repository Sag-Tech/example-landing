import React from "react";
import type { SVGProps } from "~/components/icons/types";

function ArrowDown({ styles }: SVGProps) {
  return (
    <svg className={styles}>
      <g>
        <path d="M.707 2.243A1 1 0 1 1 2.121.829l2.122 2.12a1 1 0 0 1-1.415 1.415L.708 2.243Z" />
        <path d="M4.95.829a1 1 0 1 1 1.414 1.414L4.243 4.364A1 1 0 1 1 2.828 2.95L4.95.829Z" />
      </g>
    </svg>
  );
}

export default ArrowDown;
