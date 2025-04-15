"use client";
import Image from "next/image";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";

export default function UserMetaCard() {
  const { isOpen, openModal, closeModal } = useModal();
  
  return (
    <>
      <div className="p-5 rounded-2xl border-gray-800 lg:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
            <div className="w-20 h-20 overflow-hidden rounded-full border-gray-800">
              <Image
                width={80}
                height={80}
                src="/images/user/owner.jpg"
                alt="user"
              />
            </div>
            <div className="order-3 xl:order-2">
              <h4 className="mb-2 text-lg font-semibold text-center text-white/90 xl:text-left">
                Musharof Chowdhury
              </h4>
              <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                <p className="text-sm text-gray-400">
                  Team Manager
                </p>
                <div className="hidden h-3.5 w-px bg-gray-700 xl:block"></div>
                <p className="text-sm text-gray-400">
                  Arizona, United States
                </p>
              </div>
            </div>
            <div className="flex items-center order-2 gap-2 grow xl:order-3 xl:justify-end">
              <a href='https://www.facebook.com/PimjoHQ' target="_blank" rel="noreferrer" 
                className="flex h-11 w-11 items-center justify-center gap-2 rounded-full border-gray-700 bg-gray-800 text-sm font-medium text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                {/* SVG remains the same */}
              </a>

              {/* Other social media links follow the same pattern - keeping only dark mode styles */}
            </div>
          </div>
          <button
            onClick={openModal}
            className="flex w-full items-center justify-center gap-2 rounded-full border-gray-700 bg-gray-800 px-4 py-3 text-sm font-medium text-gray-400 hover:bg-white/[0.03] hover:text-gray-200 lg:inline-flex lg:w-auto"
          >
            {/* SVG and text remain the same */}
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-gray-900 p-4 lg:p-11">
          {/* Modal content remains the same, but with only dark mode styles */}
        </div>
      </Modal>
    </>
  );
}
