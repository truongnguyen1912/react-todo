import React, {Component} from 'react';

class TodoInput extends Component {
    constructor(props) {
        super(props);

        this.handleKeyPressed = this.handleKeyPressed.bind(this);
    }

    componentDidMount() {
        this.todoInput.focus();
    }

    handleKeyPressed(event) {
        if (event.key === 'Enter') {
            this.props.onTodoAdding(this.todoInput.value);

            this.todoInput.value = '';
        }
    }

    render() {
        return (
            <div className="Todo-input">
                <input
                    placeholder="Input new todo"
                    onKeyPress={this.handleKeyPressed}
                    ref={input => this.todoInput = input}
                />
            </div>
        );
    }
}

export default TodoInput;