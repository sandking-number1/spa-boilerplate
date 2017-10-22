import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {FORM_NAME} from './constants'
import {inputText, inputPassword} from '../../utils/forms/components';

class Form extends PureComponent {

    render() {
        const {handleSubmit, pristine, submitting} = this.props;

        return ( <form onSubmit={handleSubmit}>

            <Field
                name="username"
                component={inputText}
                placeholder="Username"
            />

            <Field
                name="password"
                component={inputPassword}
                placeholder="Password"
            />

            <button
                type="submit"
                disabled={pristine || submitting}
                className="btn btn-primary ">
                Login
            </button>

        </form> );
    }
}

const validate = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Required'
    }

    if (!values.password) {
        errors.password = 'Required'
    }

    return errors;
};

Form = connect()(reduxForm({
    form: FORM_NAME,
    validate,
})(Form));

export default Form;