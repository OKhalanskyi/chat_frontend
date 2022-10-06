import React from 'react';
import {Page} from "../utils/styles";
import SignInForm from "../components/forms/SignInForm";

const SignInPage = () => {
    return (
        <Page display="flex" alignItems="center" justifyContent="center">
            <SignInForm/>
        </Page>
    );
};

export default SignInPage;