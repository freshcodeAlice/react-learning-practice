import React from "react";
import './style.css';

class FormToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }


    changeInput = (event) => {
        const {name, value} = event.target;
    this.setState({
        [name]: value
    })
    }

    submitHandler = (event) => {
        event.preventDefault();
        const {props, state} = this;
        props.addToDo(state.todo); 
        this.setState({
            todo: ''
        })
    }

    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <input type="text" name="todo" value={this.state.todo} onChange={this.changeInput}/>
                <button type="submit">Add ToDo</button>
            </form>
        )
    }
}

export default FormToDo;