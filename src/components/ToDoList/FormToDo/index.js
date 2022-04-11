import React from "react";
// import './style.css';
import styles from './FormToDo.module.css';
import cx from "classnames";

class FormToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            isValid: true
        }
    }


    changeInput = (event) => {
        const {name, value} = event.target;

        if (value.includes(' ')) {
            this.setState({
                isValid: false
            })
        }

        this.setState({
            [name]: value
        });
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

        const inputClassName = cx(styles.inputNormal, {
            [styles.invalidInput]: !this.state.isValid
        });

        return(
            <form onSubmit={this.submitHandler} className={styles.container}>
                <input type="text" name="todo" value={this.state.todo} onChange={this.changeInput} className={inputClassName}/>
                <button type="submit">Add ToDo</button>
            </form>
        )
    }
}

export default FormToDo;


// function cx(objectStyles) {
// return Object.entries(objectStyles)
// .filter(([className, condition]) => condition)
// .map(([className, condition]) => className)
// .join(' ')
// }
// [[key, value], [key, value], [key, value]] => [key1, key2, key3] => "key1 key2 key3"

/*
{
    имяКласса: Условие, при котором этот класс нам нужен
}

*/
