import React, {Component} from 'react';

import TodoItem from './TodoItem';

class TodoList extends Component {
    renderNoTodo() {
        return (
            <div>There is no todo.</div>
        );
    }

    renderTodoList(todos) {
        return todos.map(todo =>
                <TodoItem key={todo.id} todo={todo} onTodoClicked={this.props.onTodoClicked} onTodoRemoving={this.props.onTodoRemoving}></TodoItem>
            );
    }

    render() {
        const todos = this.props.todos.sort((todo1, todo2) => todo1.status < todo2.status);

        return (
            <div className="Todo-list">
                {todos.length ? this.renderTodoList(todos) : this.renderNoTodo()}
            </div>
        );
    }
}

export default TodoList;