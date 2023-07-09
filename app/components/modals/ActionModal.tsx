import ActionForm from "../forms/ActionForm";
import Modal from "../modal/Modal";

function ActionModal() {
  return (
    <Modal className="max-w-[460px]" title="Get in touch">
      <ActionForm id="modal-form" />
    </Modal>
  );
}

export default ActionModal;
