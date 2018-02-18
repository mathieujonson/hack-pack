import React, { Component } from 'react'
import {connect} from 'react-redux'

const TodoItem = ({id, name, isComplete}) => (
    <li>
        <input type="checkbox" defaultChecked={isComplete} />
        {name}
    </li>
)

class TodoList extends Component {
    render() {
        return (
            <div className="todo-list">
                <ul>
                    {this.props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
                </ul>
            </div>
        )
    }
}

export default connect(
    (state) => ({todos: state.todos}),
    {}
)(TodoList)