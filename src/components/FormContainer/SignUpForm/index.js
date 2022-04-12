import React from 'react';
import styles from '../FormContainer.module.scss';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
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
        const {firstName, lastName, email, password} = this.state;
        return (
            <>
                <h2  className={styles.header}> Sign Up for Free</h2>
                <div className={styles['input-container']}>
                    <input className={styles['form-input']} type="text" placeholder="First Name" name="firstName" onChange={this.inputHandler} value={firstName}/>
                    <input className={styles['form-input']} type="text" placeholder="Last Name" name="lastName" onChange={this.inputHandler} value={lastName}/>
                </div>
                <input className={styles['form-input']} type="email" placeholder="Email Address" name="email" onChange={this.inputHandler} value={email}/>
                <input className={styles['form-input']} type="password" placeholder="Set a Password" name="password" onChange={this.inputHandler} value={password}/>
                <button className={styles['submit-button']} onClick={this.submit}> Get started</button>
            </>
        )
    }
}

export default SignUpForm;