import React from 'react';
import './FormContainer.css';
import SignUpForm from './SignUpForm';


class FormContainer extends React.Component {

    render() {


        return (
            <div className='overlay'>
                <section className='form-container'>
                <SignUpForm />
                </section>
            </div>
        )
    }
}


export default FormContainer;