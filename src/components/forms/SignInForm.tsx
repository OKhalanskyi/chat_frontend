import React from 'react';
import styles from "./index.module.scss";
import {Button, InputContainer, InputField, InputLabel} from "../../utils/styles";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {LoginUserParams} from "../../utils/types";
import {getAuthUser, postLoginUser} from "../../utils/api";

const SignInForm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<LoginUserParams>()
    const navigate = useNavigate()

    const onSubmit = async (data:LoginUserParams) => {
        try {
            await postLoginUser(data)
            navigate("/conversations")
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <form className={styles} onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField type="email" id="email" {...register('email', {required:true})}/>
            </InputContainer>
            <InputContainer className={styles.emailPasswordFields}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputField type="password" id="password" {...register('password', {required:true})}/>
            </InputContainer>
            <Button className={styles.authBtn}>Sign In</Button>
            <div className={styles.footerText}>
                <span>Don't have an account?</span>
                <Link to="/registration">
                    <span>Sign Up</span>
                </Link>
            </div>
        </form>
    );
};

export default SignInForm;