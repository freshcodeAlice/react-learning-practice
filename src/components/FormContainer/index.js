import React from 'react';
import './FormContainer.css';
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';
import 'animate.css';


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

    getDataFromForm = (data) => {
        console.log(data);
    }

    shouldComponentUpdate (nextProps, nextState) {
        if(this.state.view === nextState.view) {
            return false
        }
        return true
    }

    render() {
        const {view} = this.state;
        const renderForm = view ? <SignUpForm sendData={this.getDataFromForm} /> : <LogInForm  sendData={this.getDataFromForm}/>;
        return (
            <div className='overlay'>
                <section className='form-container animate__animated animate__fadeIn'>
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