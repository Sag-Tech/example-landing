/* eslint-disable no-shadow */
import { useCallback, useEffect, useState } from "react";
import { hideDocumentScroll } from "~/helpers/document";

export enum ModalNamesEnum {
  "action" = "action",
  "action-success" = "action-success",
}
export type ModalNames = keyof typeof ModalNamesEnum;

export const useModals = () => {
  const [openingModalName, setOpeningModalName] = useState<ModalNames | null>(
    null
  );
  const [openedModalName, setOpenedModalName] = useState<ModalNames | null>(
    null
  );
  const [closingModalName, setClosingModalName] = useState<ModalNames | null>(
    null
  );

  useEffect(() => {
    if (openingModalName) {
      const name = openingModalName;

      setTimeout(() => {
        setOpenedModalName(name);
        setOpeningModalName(null);
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openingModalName]);

  useEffect(() => {
    if (closingModalName) {
      setTimeout(() => {
        setClosingModalName(null);

        if (!openedModalName && !openingModalName) {
          hideDocumentScroll(false);
        }
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closingModalName]);

  const closeModal = useCallback(() => {
    setClosingModalName(openedModalName);
    setOpenedModalName(null);
  }, [openedModalName, setClosingModalName, setOpenedModalName]);

  const openModal = useCallback(
    (modal: ModalNames) => {
      if (openedModalName) {
        setClosingModalName(openedModalName);
      } else {
        hideDocumentScroll(true);
      }

      setOpeningModalName(modal);
    },
    [openedModalName, setClosingModalName, setOpeningModalName]
  );

  return {
    closeModal,
    openModal,
    closingModalName,
    openedModalName,
    openingModalName,
    setOpeningModalName,
    setOpenedModalName,
    setClosingModalName,
  };
};
