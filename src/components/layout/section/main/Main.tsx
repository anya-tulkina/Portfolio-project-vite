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
                    <Name>I'm Anna Tyulkina</Name>
                    <TextMain>I'm studying web dev</TextMain>
                    <Button>Get in touch</Button>
                </TitleMain>
                <WrapperMainPhoto>
                    <Photo src={mainPhoto} alt={"mainPhoto"}/>
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

const Name = styled.span`
    font-size: calc((100vw - 360px) / (1920 - 360) * (40 - 30) + 30px);

    margin-top: 50px;
`

const TextMain = styled.h1`
    font-size: calc((100vw - 360px) / (1920 - 360) * (60 - 30) + 30px);

    font-weight: 800;
    letter-spacing: 2px;
    vertical-align: middle;

    margin-bottom: 100px;
`

const TitleMain = styled.div`
    display: flex;
    flex-direction: column;
    height: 40%;
    color: #ffff;

    position: absolute;
    top: 40%;
    z-index: 1;

    button {
        margin-top: auto;
        align-items: flex-end;
        min-height: 80px;
    }

    span:first-of-type {
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

const WrapperMainPhoto = styled.div`
    width: 50%;
    height: 100%;
    position: absolute;

    display: flex;
    align-items: flex-end;
    justify-self: flex-end;

    z-index: -1;
    opacity: 0.6;
`

const Photo = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`