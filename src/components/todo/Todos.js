import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoInfo from './TodoInfo';

class Todos extends Component {
    constructor(props) {
        super(props);

        this.handleTodoAdding = this.handleTodoAdding.bind(this);
        this.handleTodoClicked = this.handleTodoClicked.bind(this);
        this.handleTodoRemoving = this.handleTodoRemoving.bind(this);

        this.state = {
            lastId: 0,
            todos: []
        };
    }

    handleTodoAdding(todoText) {
        let todos = this.state.todos.slice();
        let newId = this.state.lastId + 1;

        todos.push({
            id: newId,
            content: todoText,
            status: 1
        });

        this.setState({
            lastId: newId,
            todos
        });
    }

    handleTodoClicked(todo) {
        let todos = this.state.todos.slice();

        let updatedTodo = todos.find(todoItem => todoItem.id === todo.id);

        updatedTodo.status = updatedTodo.status > 0 ? -1 : 1;
        console.log(updatedTodo);

        this.setState({
            todos
        });
    }

    handleTodoRemoving(todo) {
        let todos = this.state.todos.slice();
        let removeIndex = todos.findIndex(todoItem => todoItem.id === todo.id);
        
        todos.splice(removeIndex, 1);

        this.setState({
            todos
        });
    }

    render() {
        return (
            <div className="Todos">
                <TodoInput onTodoAdding={this.handleTodoAdding}></TodoInput>

                <TodoList
                    todos={this.state.todos}
                    onTodoClicked={this.handleTodoClicked}
                    onTodoRemoving={this.handleTodoRemoving}
                ></TodoList>

                <TodoInfo todos={this.state.todos}></TodoInfo>
            </div>
        );
    }
}

export default Todos;