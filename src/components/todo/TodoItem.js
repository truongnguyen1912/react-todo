import React, {Component} from 'react';

class TodoItem extends Component {
    todoClassName(todo) {
        return 'text-content ' + (todo.status < 0 ? 'archived' : 'active');
    }

    render() {
        let todo = this.props.todo;

        return (
            <div className="Todo-item">
                <span onClick={() => this.props.onTodoClicked(todo)} className={this.todoClassName(todo)}>{todo.content}</span>
                <span onClick={() => this.props.onTodoRemoving(todo)} className="icon-remove">&times;</span>
            </div>
        );
    }
}

export default TodoItem;