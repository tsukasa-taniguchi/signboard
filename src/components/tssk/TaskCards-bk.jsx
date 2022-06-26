import React, { useRef, useState } from 'react'
import { TaskCard } from './TaskCard'
import { AddTaskCardButton } from './button/AddTaskCardButton'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState({
    0: { id: '0', draggableId: 'item0', taskIdList: [] },
  })
  const inputTextRef = useRef(null)
  const [taskList, setTaskList] = useState([])

  const reorderA = (taskCardsList, startIndex, endIndex) => {
    const remove = taskCardsList.splice(startIndex, 1)
    taskCardsList.splice(endIndex, 0, remove[0])
  }
  const reorderB = (taskList, startIndex, endIndex) => {
    const remove = taskList.splice(startIndex, 1)
    taskList.splice(endIndex, 0, remove[0])
  }

  const handleDragEnd = (result) => {
    if (result.type === 'column') {
      reorderA(taskCardsList, result.source.index, result.destination.index)
      setTaskCardsList(taskCardsList)
      return
    }
    reorderB(taskList, result.source.index, result.destination.index)
    setTaskList(taskList)
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="taskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {Object.keys(taskCardsList).forEach((index) => {
              console.log('aa', taskCardsList[index])
              ;<TaskCard
                key={taskCardsList[index].id}
                index={index}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCardsList[index]}
                inputTextRef={inputTextRef}
                taskList={taskList}
                setTaskList={setTaskList}
              />
            })}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
