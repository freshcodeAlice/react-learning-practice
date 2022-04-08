import React from 'react';
import './FormContainer.css';
import SignUpForm from './SignUpForm';


class FormContainer extends React.Component {

    render() {


        return (
            <div className='overlay'>
                <section className='form-container'>
                <div className='control-buttons'>
                    <button className='button-on'>Sign Up</button>
                    <button className='button-off'>Log In</button>
                </div>
                        <SignUpForm />
                </section>
            </div>
        )
    }
}


export default FormContainer;