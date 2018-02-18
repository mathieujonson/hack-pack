import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updateCurrent} from '../../reducers/todo'

class TodoForm extends Component {

    handleInputChange = (event) => {
        const value = event.target.value
        this.props.updateCurrent(value)
    }

    render() {
        return (
            <form>
                <input type="text"
                       onChange={this.handleInputChange}
                       value={this.props.currentTodo}/>
            </form>
        )
    }
}

export default connect(
    (state) => ({currentTodo: state.currentTodo}),
    {updateCurrent}
)(TodoForm)