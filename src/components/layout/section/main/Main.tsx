import styled from "styled-components";
import mainPhoto from "../../../../assets/images/IMG_0572.webp"
import {Container} from "../../../Container.tsx";
import {Button} from "../../../button/Button.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <TitleMain>
                    <SmallText>hi! everyone</SmallText>
                    <TextMain>Anna{"\n"}Web Dev</TextMain>
                    <LinkButton>
                        <Button text={"Get in touch"} />
                    </LinkButton>
                </TitleMain>
                <WrapperMainPhoto>
                    <Photo srcSet={""} src={mainPhoto} alt={"mainPhoto"}/>
                </WrapperMainPhoto>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    position: relative;
    z-index: 0;
    overflow: hidden;

    background-color: #000000;
`

const SmallText = styled.span``


const TextMain = styled.h1`
    //font-size: calc((100vw - 360px) / (1920 - 360) * (60 - 30) + 30px);
    
    font-size: 7rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    white-space: pre-wrap;

    margin-bottom: 100px;
`

const TitleMain = styled.div`
    display: flex;
    flex-direction: column;
    height: 40%;
    color: #ffff;

    position: absolute;
    top: 20%;
    z-index: 1;

    span:first-child {
        text-transform: uppercase;
        letter-spacing: 0.24em;
        font-family: "Inconsolata", monospace;
        font-size: 1.5rem;

        background-color: #6e6c6c;
        width: fit-content;

        display: inline-block;
        padding: 0.24em;
    }
`

const LinkButton = styled.a`
    display: block;
    margin-top: auto;
    width: fit-content;
    
    button {
        background-color: transparent;
        font-size: 19px;
        line-height: 234.5%;
        padding: 18px 50px;
    }
`

const WrapperMainPhoto = styled.div`
    width: 50%;
    height: 100%;
    position: absolute;

    display: flex;
    justify-self: flex-end;

    z-index: -1;
    opacity: 0.6;
`

const Photo = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`