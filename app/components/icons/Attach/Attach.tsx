import type { SVGProps } from "~/components/icons/types";

function Attach({ styles }: SVGProps) {
  return (
    <svg
      width={10}
      height={14}
      xmlns="http://www.w3.org/2000/svg"
      className={styles}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 4.846C0 2.17 2.239 0 5 0s5 2.17 5 4.846v5.026a.547.547 0 0 1-.556.538.547.547 0 0 1-.555-.538V4.846c0-2.082-1.741-3.77-3.889-3.77-2.148 0-3.889 1.688-3.889 3.77v5.744c0 1.288 1.078 2.333 2.408 2.333 1.33 0 2.407-1.045 2.407-2.333V5.564c0-.496-.415-.897-.926-.897-.511 0-.926.401-.926.897v4.308a.547.547 0 0 1-.555.538.547.547 0 0 1-.556-.538V5.564c0-1.09.912-1.974 2.037-1.974s2.037.884 2.037 1.974v5.026c0 1.883-1.575 3.41-3.518 3.41C1.575 14 0 12.473 0 10.59V4.846Z"
      />
    </svg>
  );
}

export default Attach;
