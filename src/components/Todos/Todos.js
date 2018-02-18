import React, { Component } from 'react'
import {connect} from 'react-redux'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {updateCurrent} from '../../reducers/todo'

class Todos extends Component {

    render() {
        return (
            <div className="todos-container">
                <TodoForm />
                <TodoList />
            </div>
        )
    }

}

export default connect(
    (state) => state,
    {updateCurrent}
)(Todos)
