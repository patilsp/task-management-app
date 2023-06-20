"use client";

import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";
import { useEffect, useState } from "react";

import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/24/solid";
import getUrl from "@/lib/getUrl";
import { useBoardStore } from "@/store/BoardStore";

type Props = {
  todo: Todo;
  index: number;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

function TodoCard({
  todo,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}: Props) {
  const deleteTask = useBoardStore((state) => state.deleteTask);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (todo.image) {
      const fetchImage = async () => {
        const url = await getUrl(todo.image!);
        if (url) {
          setImageUrl(url.toString());
        }
      };

      fetchImage();
    }
  }, [todo]);
  return (   
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-md flex-col rounded-xl bg-gray-800 p-3 text-white shadow-lg" 
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}  
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-4 w-4 rounded-full border border-purple-500"></div>
            <div className="text-md font-normal">{todo.title}</div>
          </div>
          <div className="flex items-center space-x-4">
            
            <div className="cursor-pointer text-gray-500 hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <div className="cursor-pointer text-gray-500 hover:text-gray-300">
            <button
              onClick={() => deleteTask(index, todo, id)}
              className="text-red-500 hover:text-red-600"
            >
              <XCircleIcon className="h-8 w-8" />
            </button>
            </div>
          </div>
        </div>
        {/* Add image here... */}
        {imageUrl && (
                <div className="h-full w-full rounded-b-md">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={150}
                    className="w-full rounded-b-md object-contain"
                  />
                </div>
              )}
      </div>
    </div>
  );
}

export default TodoCard;
