import React from 'react';
import './FormContainer.css';
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';


class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: true
        }
    }

    toggleView = (event) => {
        if(event.target.name === 'signup') {
            this.setState({
                view: true
            }); 
        } else if (event.target.name === 'login') {
        this.setState({
            view: false
        });
    }
    }

    shouldComponentUpdate (nextProps, nextState) {
        if(this.state.view === nextState.view) {
            return false
        }
        return true
    }

    render() {
        const {view} = this.state;
        const renderForm = view ? <SignUpForm /> : <LogInForm />;
        return (
            <div className='overlay'>
                <section className='form-container'>
                <div className='control-buttons'>
                    <button className={view ? 'button-on' : 'button-off'} onClick={this.toggleView} name="signup">Sign Up</button>
                    <button className={view ? 'button-off' : 'button-on'} onClick={this.toggleView} name="login">Log In</button>
                </div>
                    {renderForm}
                </section>
            </div>
        )
    }
}


export default FormContainer;