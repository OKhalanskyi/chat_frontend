import {InputContainer, InputField, InputLabel, Button, TextField} from "../../utils/styles";
import styles from './index.module.scss'

export const CreateConversationForm=()=>{
    return(
        <form className={styles.createConversationForm}>
            <section>
                <InputContainer backgroundColor="#161616">
                    <InputLabel>Recipent</InputLabel>
                    <InputField/>
                </InputContainer>
            </section>
            <section className={styles.message}>
                <InputContainer backgroundColor="#161616">
                    <InputLabel>Message</InputLabel>
                    <TextField/>
                </InputContainer>
            </section>
            <Button onClick={(e) => e.preventDefault()}>Create Conversation</Button>
        </form>
    )
}