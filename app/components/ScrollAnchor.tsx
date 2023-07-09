type Props = {
  id: string;
};

export default function ScrollAnchor({ id }: Props) {
  return (
    <span
      id={id}
      className="absolute left-0 -top-[64px] dp:-top-[112px] dpb:-top-[120px]"
    />
  );
}
