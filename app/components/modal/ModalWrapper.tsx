/* eslint-disable jsx-a11y/click-events-have-key-events */
import cn from "classnames";
import { useContext, useMemo } from "react";
import { useEscapeKey } from "~/hooks/useEscapeKey";
import { ModalNames, ModalNamesEnum } from "~/hooks/useModals";
import { ModalContext } from "~/root";
import ActionModal from "~/components/modals/ActionModal";
import SuccessModal from "~/components/modals/SuccessModal";

const modals = {
  [ModalNamesEnum.action]: ActionModal,
  [ModalNamesEnum["action-success"]]: SuccessModal,
};

function ModalWrapper() {
  const { openedModalName, closingModalName, openingModalName, closeModal } =
    useContext(ModalContext);

  const isWrapperShow = useMemo(
    () => openedModalName || closingModalName || openingModalName,
    [openedModalName, closingModalName, openingModalName]
  );

  useEscapeKey(closeModal);

  return (
    <div
      className={cn("fixed overflow-hidden h-full left-0 right-0 z-[100]", [
        isWrapperShow ? "top-0" : "top-full",
      ])}
    >
      <div
        className={cn(
          "absolute -left-[0px] -top-[0px] -right-[0px] -bottom-[0px] bg-blue/60 z-1 transition-opacity duration-500",
          [openedModalName || openingModalName ? "opacity-1" : "opacity-0"]
        )}
      />
      <div className="relative h-full w-full overflow-y-scroll z-2">
        {Object.keys(modals).map(modalName => {
          const Component = modals[modalName as ModalNames];
          const isClosing = closingModalName === modalName;
          const isOpened = openedModalName === modalName;
          const isOpening = openingModalName === modalName;

          return (
            (isOpened || isClosing || isOpening) && (
              <div
                role="none"
                key={modalName}
                className={cn(
                  "absolute flex items-center justify-center min-h-screen w-full top-0 left-0 p-5 transition-transform duration-600",
                  [isOpened ? "translate-t-0" : "translate-y-full"]
                )}
                onClick={() => closeModal()}
                onTouchEnd={() => closeModal()}
              >
                <div
                  className="inline-flex justify-center"
                  role="none"
                  onClick={e => e.stopPropagation()}
                  onTouchEnd={e => e.stopPropagation()}
                >
                  <Component />
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default ModalWrapper;
