"use client";
import React from 'react';
import {
    DraggableProvidedDragHandleProps,
    DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";

type Props = {
    todo: Todo;
    index: number;
    id: TypedColumn;
    innerRef: (element: HTMLElement | null ) => void;
        draggableProps: DraggableProvidedDraggableProps;
        dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};


function TodoCard ({
    todo,
    index,
    id,
    innerRef,
    draggableProps,
    dragHandleProps,
}: Props) {
  return ( 
  <div
    className="space-y-2 rounded-md bg-white drop-shadow-sm"
    {...draggableProps}
    {...draggableProps}
    ref={innerRef}    
    >
      TodoCard
    </div>
  );
}

export default TodoCard;
