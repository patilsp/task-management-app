"use client";

import { Dialog, Transition } from "@headlessui/react";
import { FormEvent, Fragment, useRef, useState } from "react";

import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/solid";
import TaskTypeRadioGroup from "./TaskTypeRadioGroup";
import { useBoardStore } from "@/store/BoardStore";
import { useModalStore } from "@/store/ModalStore";

function Modal() {
  const imagePickerRef = useRef<HTMLInputElement>(null);

  const [isOpen, closeModal] = useModalStore((state) => [
    state.isOpen,
    state.closeModal,
  ]);

  const [addTask, newTaskType, image, setImage, newTaskInput, setNewTaskInput] =
    useBoardStore((state) => [
      state.addTask,
      state.newTaskType,
      state.image,
      state.setImage,
      state.newTaskInput,
      state.setNewTaskInput,
    ]);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTaskInput) return;

    // submission logic
    addTask(newTaskInput, newTaskType, image);

    // resetting states
    setImage(null);
    closeModal();
  };

  return (
    // Use the `Transition` component at the root level
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="form"
        onSubmit={handleSubmit}
        className="relative z-10"
        onClose={closeModal}
      >
        {/*
          Use one Transition.Child to apply one transition to the backdrop...
        */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        {/*
          ...and another Transition.Child to apply a separate transition
          to the contents.
        */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
          
              <Dialog.Panel className="mt-10 w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="pb-2 text-lg font-medium leading-6 text-gray-900"
                >
                  Add a Task
                </Dialog.Title>

                <div className="mt-2 ">
                  <input
                    type="text"
                    value={newTaskInput}
                    onChange={(e) => setNewTaskInput(e.target.value)}
                    placeholder="Enter a task here..."
                    className="w-full rounded-md border border-gray-300 p-5 outline-none"
                  />
                </div>
               
                {/* <TaskTypeRadioGroup /> */}
                <TaskTypeRadioGroup />

                {/* Upload Image Button */}
                <div className="mt-2">
                  <button
                    type="button"
                    className="w-full rounded-md border border-gray-300 p-5 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={(e) => {
                      imagePickerRef.current?.click();
                    }}
                  >
                    <PhotoIcon className="mr-2 inline-block h-6 w-6" />
                    Upload Image
                  </button>
                  {image && (
                    <Image
                      src={URL.createObjectURL(image)}
                      alt={"Uploaded Image"}
                      height={200}
                      width={200}
                      className="mt-2 h-44 w-full cursor-not-allowed object-cover transition-all duration-150 hover:grayscale"
                      onClick={() => {
                        setImage(null);
                      }}
                    />
                  )}

                  <input
                    type="file"
                    ref={imagePickerRef}
                    hidden
                    onChange={(e) => {
                      // check e is an image
                      if (!e.target.files![0].type.startsWith("image/")) return;
                      setImage(e.target.files![0]);
                    }}
                  />

                  <div className="mt-4 text-center">
                    <button
                      type="submit"
                      disabled={!newTaskInput}
                      className="addTask"
                    >
                      Add Task
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
