"use client";

import { Dialog } from "@headlessui/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-[9999]">
      <div className="modal-backdrop" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="modal-content w-full max-w-md p-6">
          {title && (
            <Dialog.Title className="text-xl font-semibold text-white mb-4">
              {title}
            </Dialog.Title>
          )}
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}