import React from 'react'

export const TaskCardDeleteButton = ({
  taskCardId,
  taskCardsList,
  setTaskCardsList,
  taskList,
  setTaskList,
  taskCard,
}) => {
  const taskCradDeleteButton = (id) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id))
    delete taskList[id]
    setTaskList({ ...taskList })
    console.log(taskList)
  }

  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taskCradDeleteButton(taskCardId)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  )
}
