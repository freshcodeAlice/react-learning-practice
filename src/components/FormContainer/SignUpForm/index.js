import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <h2 class="header"> Sign Up for Free</h2>
                <div className="input-container">
                    <input className="form-input" type="text" placeholder="First Name"/>
                    <input className="form-input" type="text" placeholder="Last Name"/>
                </div>
                <input className="form-input" type="email" placeholder="Email Address" />
                <input className="form-input" type="password" placeholder="Set a Password"/>
                <button className="submit-button"> Get started</button>
            </>
        )
    }
}

export default SignUpForm;