import React, { useState } from 'react'
import { TaskCard } from './TaskCard'
import { AddTaskCardButton } from './button/AddTaskCardButton'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export const TaskCards = () => {
  const [count, setCount] = useState(0)
  const [taskCardsList, setTaskCardsList] = useState([
    { id: 'aa0', draggableId: 'item0' },
  ])
  const [taskList, setTaskList] = useState({})

  const reorderA = (
    taskCardsList,
    startIndex,
    endIndex,
    startTaskCardKey,
    endTaskCardKey
  ) => {
    const remove = taskCardsList.splice(startIndex, 1)
    taskCardsList.splice(endIndex, 0, remove[0])
  }
  const reorderB = (
    taskList,
    startIndex,
    endIndex,
    startTaskCardKey,
    endTaskCardKey
  ) => {
    //const remove = taskList[startTaskCardKey].splice(startIndex, 1)

    if (endIndex == null) {
      return
    }
    //-----------------------------------------------------
    // 削除データ
    //-----------------------------------------------------
    const sIndex = taskList[startTaskCardKey].findIndex(
      (element) => element.count == startIndex
    )
    const remove = taskList[startTaskCardKey].splice(sIndex, 1)

    //-----------------------------------------------------
    // 削除データ
    //-----------------------------------------------------
    const eIndex = taskList[endTaskCardKey].findIndex(
      (element) => element.count == endIndex
    )
    if (eIndex == -1) {
      taskList[endTaskCardKey].push(remove[0])
      return
    }
    taskList[endTaskCardKey].splice(eIndex, 0, remove[0])
  }

  const handleDragEnd = (result) => {
    if (result.type === 'column') {
      reorderA(taskCardsList, result.source.index, result.destination.index)
      setTaskCardsList(taskCardsList)
      return
    }

    reorderB(
      taskList,
      result.source.index,
      result.destination ? result.destination.index : null,
      result.source.droppableId,
      result.destination ? result.destination.droppableId : null
    )
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
            {Object.keys(taskCardsList).map((taskCard, index) => (
              <TaskCard
                key={taskCardsList[taskCard].id}
                index={index}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCardsList[taskCard]}
                taskList={taskList}
                setTaskList={setTaskList}
                count={count}
                setCount={setCount}
              />
            ))}
            {/*
            {taskCardKeyList.map((taskCardKey, index) => {
              const taskCard = taskCardsList[taskCardKey]
              console.log(taskCard)

              return (
                <TaskCard
                  key={taskCard.id}
                  index={index}
                  taskCardsList={taskCardsList}
                  setTaskCardsList={setTaskCardsList}
                  taskCard={taskCard}
                  inputTextRef={inputTextRef}
                  taskList={taskList}
                  setTaskList={setTaskList}
                />
              )
            })}
            */}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
