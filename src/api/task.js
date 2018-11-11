import _tasks from './task_list.json'

const TIMEOUT = 100

export default {
  getTasks: (cb, timeout) => setTimeout(() => cb(_tasks), timeout || TIMEOUT)
}
