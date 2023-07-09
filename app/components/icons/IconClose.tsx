import cn from "classnames";

type Props = {
  className?: string;
  onClick?: () => void;
};

function IconClose({ onClick, className }: Props) {
  return (
    <svg
      onClick={onClick}
      className={cn(
        className,
        "cursor-pointer text-dark/60 hover:text-red transition-colors duration-300"
      )}
      width={16}
      height={16}
      fill="none"
    >
      <path
        d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM10.4657 4.26022L8 6.727L5.5357 4.26022C5.18423 3.90875 4.61438 3.90875 4.26291 4.26022C3.91144 4.6117 3.91144 5.18154 4.26291 5.53302L6.728 8.001L4.26291 10.47C3.91144 10.8215 3.91144 11.3913 4.26291 11.7428C4.61438 12.0943 5.18423 12.0943 5.5357 11.7428L8 9.275L10.4657 11.7428C10.8172 12.0943 11.387 12.0943 11.7385 11.7428C12.09 11.3913 12.09 10.8215 11.7385 10.47L9.272 8.001L11.7385 5.53302C12.09 5.18154 12.09 4.6117 11.7385 4.26022C11.387 3.90875 10.8172 3.90875 10.4657 4.26022Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default IconClose;
