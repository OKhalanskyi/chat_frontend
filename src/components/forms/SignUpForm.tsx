import React from 'react';
import {Button, InputContainer, InputField, InputLabel} from "../../utils/styles";
import styles from './index.module.scss'
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {CreateUserParams} from "../../utils/types";
import {getAuthUser, postRegisterUser} from "../../utils/api";

const SignUpForm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<CreateUserParams>()

    const onSubmit = async (data:CreateUserParams) => {
        console.log(data)
        try {
            await postRegisterUser(data)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <form className={styles} onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField type="email" id="email" {...register('email', {required:"email is req"})}/>
            </InputContainer>
            <section className={styles.namesFieldsRow}>
                <InputContainer>
                    <InputLabel htmlFor="firstname">First name</InputLabel>
                    <InputField type="text" id="firstname" {...register('firstName', {required:true})}/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="lastname">Last name</InputLabel>
                    <InputField type="text" id="lastname" {...register('lastName', {required:true})}/>
                </InputContainer>
            </section>
            <InputContainer>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputField type="password" id="password" {...register('password', {required:true})}/>
            </InputContainer>
            <Button className={styles.authBtn}>Create My Account</Button>
            <div className={styles.footerText}>
                <span>Already have an account?</span>
                <Link to="/login">
                    <span>Sign In</span>
                </Link>
            </div>
        </form>
    );
};

export default SignUpForm;