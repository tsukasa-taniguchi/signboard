import React from 'react'
import { v4 as uuid } from 'uuid'

export const TaskAddInput = ({
  taskList,
  setTaskList,
  inputTextRef,
  taskCardId,

  taskCardsList,
  setTaskCardsList,
  count,
  setCount,
}) => {
  const handleSubmit = (e) => {
    const taskId = uuid()
    e.preventDefault()

    if (inputTextRef.current.value === '') {
      console.log(inputTextRef.current.value)
      return
    }

    if (!taskList[taskCardId]) {
      taskList[taskCardId] = []
    }
    console.log(count)

    taskList[taskCardId].push({
      id: taskId,
      count: count,
      taskCardId: taskCardId,
      text: inputTextRef.current.value,
      draggableId: `task-${taskId}`,
    })

    count = ++count
    setCount(count)
    console.log(count)

    setTaskList({ ...taskList })
    inputTextRef.current.value = ''
    console.log('taskList', taskList)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputTextRef}
          type="text"
          placeholder="add a task"
          className="taskAddInput"
        />
      </form>
    </div>
  )
}
