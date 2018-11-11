import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllTasks } from './actions';
import App from './containers/App'

const middleware = [ thunk ];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)
store.dispatch(getAllTasks())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)