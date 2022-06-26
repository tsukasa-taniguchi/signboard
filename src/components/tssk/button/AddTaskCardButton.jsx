import React from 'react'
import { v4 as uuid } from 'uuid'

export const AddTaskCardButton = ({
  taskCardsList,
  setTaskCardsList,
  taskList,
  setTaskList,
}) => {
  const addTaskCard = () => {
    const taskCardId = uuid()
    taskCardsList.push({
      id: taskCardId,
      draggableId: `item${taskCardId}`,
    })
    setTaskCardsList([...taskCardsList])
    console.log('addTaskCard', taskCardsList)

    taskList[taskCardId] = []
    setTaskList({ ...taskList })
  }

  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  )
}
