import React, { useRef } from 'react'
import { TaskCardTitle } from './TaskCardTitle'
import { TaskCardDeleteButton } from './TaskCardDeleteButton'
import { Tasks } from './Tasks'
import { TaskAddInput } from './input/TaskAddInput'
import { Draggable } from 'react-beautiful-dnd'

export const TaskCard = ({
  index,
  taskCardsList,
  setTaskCardsList,
  taskCard,
  taskList,
  setTaskList,
  count,
  setCount,
}) => {
  const inputTextRef = useRef(null)

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className="taskCard"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            className="taskCardTitleAndTaskCardDeleteButtonArea"
            {...provided.dragHandleProps}
          >
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCardId={taskCard.id}
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskList={taskList}
              setTaskList={setTaskList}
              taskCard={taskCard}
            />
          </div>
          <TaskAddInput
            taskList={taskList}
            setTaskList={setTaskList}
            inputTextRef={inputTextRef}
            taskCardId={taskCard.id}
            taskCardsList={taskCardsList}
            setTaskCardsList={setTaskCardsList}
            count={count}
            setCount={setCount}
          />
          <Tasks
            taskCardId={taskCard.id}
            taskList={taskList}
            setTaskList={setTaskList}
            count={count}
            setCount={setCount}
          />
        </div>
      )}
    </Draggable>
  )
}
