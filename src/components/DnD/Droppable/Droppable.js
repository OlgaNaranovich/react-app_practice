import React, {useRef, useState} from 'react';
import { projectList } from '../../../store/distribution/teamList';
import { TitleH4 } from '../../../UI/TitleH4.styled';
import { Droppable,TitleWrapper, IconWrapper } from './Droppable.styled';
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Draggable from '../Draggable/Draggable';
import {Item} from '../../../pages/Staff/DnD/DnD.styled';

const DroppableComponent = (props) => {
  const {id, currentState, isTeamCol, isAddPersonToCol, isRemovePersonFromCol } = props;
  const [isOpen, setIsOpen] = useState(false);

  const droppableRef = useRef(null);
  const colItem = projectList.filter(project => project.id === id)[0];


  const toggleProjectItem = (e) => {
    if (droppableRef.current.id !== 'main' ) setIsOpen(!isOpen);
  }

  const drop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('transfer');
    isAddPersonToCol(data, id);
  }

  const allowDrop = (e) => {
    e.preventDefault();
  }

  return (
    <Droppable
      id={id}
      className={'droppable'}
      ref={droppableRef}
      onDrop={drop}
      onDragOver={allowDrop}
      isTeamCol={isTeamCol}
      isOpen={isOpen}>
      <TitleWrapper headerColor={colItem.headerColor} isTeamCol={isTeamCol} onClick={toggleProjectItem}>
        <TitleH4>{colItem.name}
          {!isTeamCol && <IconWrapper><FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} /></IconWrapper>}
        </TitleH4>
      </TitleWrapper>
      {(id === 'main' || isOpen) && currentState[id].map(item => (
        <Draggable key={item.id} id={item.id} isRemovePersonFromCol={isRemovePersonFromCol}>
          <Item>
            <h5>{item.name} {item.lastName}</h5>
            <span>Position: {item.position}</span>
          </Item>
        </Draggable>
      ))}
    </Droppable>
  )
}

export default DroppableComponent;