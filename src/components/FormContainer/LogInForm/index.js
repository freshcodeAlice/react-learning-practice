import React from 'react';
import styles from '../FormContainer.module.scss';

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }


    inputHandler = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    submit = () => {
        this.props.sendData(this.state);
    }


    render() {
        return (
            <>
                <h2 className={styles.header}> Welcome Back!</h2>
                <input className={styles['form-input']} type="email" placeholder="Email Address" name="email" value={this.state.email} onChange={this.inputHandler}/>
                <input className={styles['form-input']} type="password" placeholder="Set a Password" name="password" value={this.state.password} onChange={this.inputHandler}/>
                <button className={styles['submit-button']} onClick={this.submit}> Log In</button>
            </>
        )
    }
}

export default LogInForm;