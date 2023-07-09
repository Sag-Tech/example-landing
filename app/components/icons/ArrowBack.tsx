type Props = {
  className: string;
};

function ArrowBack({ className }: Props) {
  return (
    <svg className={className} width={24} height={24} fill="none">
      <path
        stroke="currentColor"
        d="m8 8-3.293 3.293a1 1 0 0 0 0 1.414L8 16m-3-4h14"
      />
    </svg>
  );
}

export default ArrowBack;
