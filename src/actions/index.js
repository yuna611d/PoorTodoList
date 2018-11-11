import task from '../api/task'
import * as types from '../constants/ActionTypes'

const receiveTasks = tasks => ({
  type: types.RECEIVE_TASKS,
  tasks
})

export const getAllTasks = () => dispatch => {
  task.getTasks(tasks => {
    dispatch(receiveTasks(tasks))
  })
}