import React from "react";
import FormToDo from "./FormToDo";
import List from './List';
import './style.css';


class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          toDos: []
        }
    }

    newToDo = (inputValue) => {
        const {toDos} = this.state;
        const copyArray = [...toDos];
        copyArray.push(inputValue);
        this.setState({
            toDos: copyArray
        })
    }


    render() {

        return(
            <>
                <FormToDo addToDo={this.newToDo}/>
                <List toDoArray={this.state.toDos}/>
            </>
        )
    }
}

export default ToDoList;