import React, {Component} from 'react';

class TodoInfo extends Component {
    render() {
        return (
            <div className="Todo-info">
                <div>Total: {this.props.todos.length}</div>
                <div>Active: {this.props.todos.filter(todo => todo.status > 0).length}</div>
                <div>Archived: {this.props.todos.filter(todo => todo.status < 0).length}</div>
            </div>
        );
    }
}

export default TodoInfo;