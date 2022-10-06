import React from 'react';
import {Page} from "../utils/styles";
import SignUpForm from "../components/forms/SignUpForm";

const SignUpPage = () => {
    return (
        <Page display="flex" alignItems="center" justifyContent="center">
            <SignUpForm/>
        </Page>
    );
};

export default SignUpPage;