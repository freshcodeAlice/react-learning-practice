import React from 'react';

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

    render() {
        const {firstName, lastName, email, password} = this.state;
        return (
            <>
                <h2 className="header"> Sign Up for Free</h2>
                <div className="input-container">
                    <input className="form-input" type="text" placeholder="First Name" name="firstName" onChange={this.inputHandler} value={firstName}/>
                    <input className="form-input" type="text" placeholder="Last Name" name="lastName" onChange={this.inputHandler} value={lastName}/>
                </div>
                <input className="form-input" type="email" placeholder="Email Address" name="email" onChange={this.inputHandler} value={email}/>
                <input className="form-input" type="password" placeholder="Set a Password" name="password" onChange={this.inputHandler} value={password}/>
                <button className="submit-button"> Get started</button>
            </>
        )
    }
}

export default SignUpForm;