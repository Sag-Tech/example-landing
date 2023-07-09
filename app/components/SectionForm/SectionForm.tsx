import SectionContainer from "~/components/layout/Section/SectionContainer";
import ActionForm from "../forms/ActionForm";

type Props = {
  title?: string;
  id: string;
};

function SectionForm({ id, title }: Props) {
  return (
    <SectionContainer
      isCenter
      title={title}
      titleAnimated
      className="overflow-hidden"
    >
      <div className="block mx-auto max-w-[520px] dpb:max-w-[460px]">
        <ActionForm id={id} animated />
      </div>
    </SectionContainer>
  );
}

export default SectionForm;
