import { Draggable, Droppable } from "react-beautiful-dnd";
import React, { useEffect } from "react";

import { PlusCircleIcon } from "@heroicons/react/24/solid";
import TodoCard from "./TodoCard";
import { useBoardStore } from "@/store/BoardStore";
import { useModalStore } from "@/store/ModalStore";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};

const idToColumnText: {
  [key in TypedColumn]: string;
} = {
  todo: "New Request",
  inprogress: "In Progress",
  done: "Completed",
};

function Column({ id, todos, index }: Props) {
  const [openModal] = useModalStore((state) => [state.openModal]);
  const [searchString, setNewTaskType] = useBoardStore((state) => [
    state.searchString,
    state.setNewTaskType,
  ]);

  const handleAddTask = () => {
    setNewTaskType(id);
    openModal();
  };
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {/* render droppable todos in the column */}
          <Droppable droppableId={index.toString()} type="card">
            
            
            {(provided, snapshot) => (
              <div
                className={`bg-var(--bg-blur) rounded-2xl p-2 shadow-sm ${
                  snapshot.isDraggingOver ? "bg-green-400" : "glass-card"
                }`}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
              <div className="flex justify-between ">
                <div className="flex justify-start">
                <h2 className="flex justify-between p-3 text-xl font-bold">
                <span className="">{idToColumnText[id]}</span>
                  
                  <span className="ml-2 h-7 w-7 rounded-full bg-gray-300 px-2.5 py-1 text-sm font-bold uppercase text-gray-700">
                    {!searchString
                      ? todos.length
                      : todos.filter((todo) =>
                          todo.title
                            .toLocaleLowerCase()
                            .includes(searchString.toLocaleLowerCase())
                        ).length}
                  </span>
                </h2>

                </div>

                <div className="flex items-end justify-end p-2">
                    <button
                      onClick={handleAddTask}
                      className="text-green-500 hover:text-green-600"
                    >
                      <PlusCircleIcon className="h-10 w-10" />
                    </button>
                  </div>

                </div>               
                <div className="space-y-2">
                  {todos.map((todo, index) => {
                    if (
                      searchString &&
                      !todo.title
                        .toLowerCase()
                        .includes(searchString.toLowerCase())
                    ) {
                      return null;
                    } else {
                      return (
                        <Draggable
                          key={todo.$id}
                          draggableId={todo.$id}
                          index={index}
                        >
                          {(provided) => (
                            <TodoCard
                              todo={todo}
                              index={index}
                              id={id}
                              innerRef={provided.innerRef}
                              draggableProps={provided.draggableProps}
                              dragHandleProps={provided.dragHandleProps}
                            />
                          )}
                        </Draggable>
                      );
                    }
                  })}

                  {provided.placeholder}


  

                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default Column;
