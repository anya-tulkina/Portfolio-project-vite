import styled from "styled-components";
import {Container} from "../../../Container.tsx";
import {Button} from "../../../Button.tsx";
import {Menu} from "../../../Navigation/Menu.tsx";
import {theme} from "../../../../style/Theme.tsx";
import {FlexWrapper} from "../../../FlexWrapper.tsx";

const menu = ["home", "about", "Services", "Portfolio", "blogs", "Contact"]

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper justify={"space-between"} wrap={"wrap"} gap={"20px"}>
                    <Subscribe>
                        <TextSubscribe>Subscribe to newsletter to get some updates related with branding, designs and
                            more.</TextSubscribe>
                        <FormSubscribe>
                            <Field placeholder={"write your email address"}/>
                            <Button height={"40px"} width={"300px"} elemType={"a"} text={"subscribe it"} color={"#fff"}
                                    bgColor={"#000"}/>
                        </FormSubscribe>
                    </Subscribe>
                    <Menu menu={menu}/>
                    <LinkContacts>
                        <TextContact>Just feel free to contact if you wanna collaborate with me, or simply have a
                            conversation.</TextContact>
                        <Email>templatesjungle@gmail.com</Email>
                    </LinkContacts>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`

    padding: 160px 0 100px;
    font-size: 17px;

    & p {
        color: #494949;
        line-height: 225%;
        letter-spacing: 0.02em;
    }
`

const Subscribe = styled.div`
    max-width: 300px;
    margin-right: 140px;
`

const TextSubscribe = styled.p`
`

const FormSubscribe = styled.form`
    button {
        width: 100%;
    }
`

const Field = styled.input`
    min-height: 50px;
    margin: 40px 0 14px;

    &::placeholder {
        font-family: "Manrope";
        font-weight: 400;
        font-size: 17px;
        letter-spacing: 0.02em;
        text-transform: capitalize;
        padding-left: 24px;
    }
`

const LinkContacts = styled.div`
    max-width: 400px;
`

const TextContact = styled.p`
    margin-bottom: 30px;
`

const Email = styled.a`
    line-height: 183%;
    letter-spacing: 0.01em;
    color: ${theme.colors.fontColorSecondary};
    font-size: 30px;
    padding-bottom: 5px;

    position: relative;

    &::before {
        content: "";
        display: inline-block;
        background-color: ${theme.colors.fontColorSecondary};
        width: 100%;
        height: 2px;

        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
    }
`
