"use client";
import { useBoardStore } from "@/store/BoardStore";
import { useEffect } from 'react';
import { DragDropContent, Droppable } from 'react-beautiful-dnd';

function Board() {
  const getBoard =  useBoardStore((state) => state.getBoard);

  useEffect(() => {
  // Get Board
    getBoard();
  }, [getBoard]);


  return (
    <div>
      <h1>Board</h1>
        {/* <DragDropContent>
          <Droppable droppableId="board" direction="horizontal" typw="column">
              {(provided) => (
                <div>  
                  


                </div>
              )}
    

          </Droppable>
        </DragDropContent> */}
    </div>
  )
}

export default Board
