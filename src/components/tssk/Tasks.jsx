import React from 'react'
import { Task } from './Task'
import { Droppable } from 'react-beautiful-dnd'

export const Tasks = ({
  taskCardId,
  taskList,
  setTaskList,
  count,
  setCount,
}) => {
  return (
    <div>
      {taskList[taskCardId] && (
        <Droppable droppableId={taskCardId} type="task">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList[taskCardId].map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={task.count}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
    </div>
  )
}
