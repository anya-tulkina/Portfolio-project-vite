import styled from "styled-components";
import {SectionTitle} from "../../../SectionTitle.tsx";
import {Button} from "../../../button/Button.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <StyledForm>
                <Field placeholder={"name"}/>
                <Field placeholder={"subject"}/>
                <Field placeholder={"message"} as={"textarea"}/>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: #ccf4be;
`
const StyledForm = styled.form`
    background-color: #ccf4be;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    gap: 10px;
    margin: 0 auto;
    
    button {
        align-self: center;
    }
`
const Field = styled.input`
    background-color: #ccf4be;
    border: 1px solid rgba(8, 25, 53, 0.92);
    border-radius: 10px;
`