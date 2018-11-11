import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getVisibleTasks } from '../reducers/tasks'
import TaskItem from '../components/TaskItem'
import TaskList from '../components/TaskList'

const TaskListContainer = ({ tasks }) => (
    <TaskList title="Group Name will be inserted">
      {tasks.map(task =>
        <TaskItem
          key={task.id}
          task={task} />
      )}
    </TaskList>
)

TaskListContainer.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  tasks: getVisibleTasks(state.tasks)
})

export default connect(
  mapStateToProps
)(TaskListContainer)
