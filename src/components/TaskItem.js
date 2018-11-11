import React from 'react'
import PropTypes from 'prop-types'

const TaskItem = ({ task }) => (
    <li><input type="checkbox" name="taskCompleted" value={task.id} />{task.title}</li>
)

TaskItem.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
}

export default TaskItem
