"use client";
import { FC, useLayoutEffect, useRef } from "react";

export type PopupProps = {
  open: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  className?: string;
};

export const Popup: FC<PopupProps> = ({
  open,
  closeModal,
  className,
  children,
}) => {
  const ref = useRef<HTMLDialogElement>(null);

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDialogElement, MouseEvent>,
  ) => {
    if (!ref.current) return;

    const rectangle = ref.current.getBoundingClientRect();

    const isInDialog =
      rectangle.top <= event.clientY &&
      event.clientY <= rectangle.top + rectangle.height &&
      rectangle.left <= event.clientX &&
      event.clientX <= rectangle.left + rectangle.width;

    if (!isInDialog) {
      closeModal();
    }
  };

  // navigation for open and close modal
  useLayoutEffect(() => {
    if (!ref.current) return;
    open ? ref.current.showModal() : ref.current.close();
  }, [open, ref]);

  return (
    <>
      <dialog ref={ref} onClick={handleBackdropClick} className={className}>
        {children}
      </dialog>
    </>
  );
};
