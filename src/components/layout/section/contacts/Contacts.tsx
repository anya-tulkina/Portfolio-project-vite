import styled from "styled-components";
import {SectionTitle} from "../../../SectionTitle.tsx";
import {Button} from "../../../button/Button.tsx";
import {Container} from "../../../Container.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledContactsForm>
                    <StyledForm>
                        <Field placeholder={"name"}/>
                        <Field placeholder={"subject"}/>
                        <Field placeholder={"message"} as={"textarea"}/>
                        <Button type={"submit"}>Send message</Button>
                    </StyledForm>
                </StyledContactsForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    max-height: 20%;
    height: 100%;
`

const StyledContactsForm = styled.div`
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    width: 100%;
    gap: 10px;

    margin: 0 auto;
    padding-bottom: 50px;

    textarea {
        min-height: 150px;
    }

    button {
        padding: 10px 20px;
        color: white;
        text-transform: uppercase;
    }
`
const Field = styled.input`
    border: 1px solid rgba(205, 204, 204, 0.55);

    background-color: rgba(69, 82, 99, 0.2);
`