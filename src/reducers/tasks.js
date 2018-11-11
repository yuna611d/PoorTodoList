import { combineReducers } from 'redux'
import { RECEIVE_TASKS, ADD_TO_CART } from '../constants/ActionTypes'

const tasks = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TASKS:
      return {
        ...state,
        ...action.tasks.reduce((obj, task) => {
          obj[task.id] = task
          return obj
        }, {})
      }
    default:
      const { taskId } = action
      if (taskId) {
        return {
          ...state,
          [taskId]: tasks(state[taskId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TASKS:
      return action.tasks.map(task => task.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getTask = (state, id) => 
  state.byId[id]

export const getVisibleTasks = state => 
  state.visibleIds.map(id => getTask(state, id))
