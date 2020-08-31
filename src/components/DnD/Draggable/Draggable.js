import React from 'react';
import { Draggable } from './Draggable.styled'

const DraggableComponent = ({ children, id, isRemovePersonFromCol }) => {
  let targetId;
  let colId;

  const drag = (e) => {
    e.dataTransfer.setData('transfer', e.target.id);
    targetId = e.target.id;
    colId = e.target.closest('.droppable').id;
  };

  const noAllowDrop = (e) => {
    // e.stopPropagation();
    console.log(targetId,colId);
    isRemovePersonFromCol(targetId, colId);
  };

  return (
    <Draggable id={id} draggable="true" onDragStart={drag} onDragOver={noAllowDrop}>
      {children}
    </Draggable>
  )
}

export default DraggableComponent;