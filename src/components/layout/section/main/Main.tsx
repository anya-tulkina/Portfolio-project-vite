import styled from "styled-components";
import photoBg from "../../../../assets/images/bgMain.webp"
import {Container} from "../../../Container.tsx";
import {Button} from "../../../Button.tsx";
import {theme} from "../../../../style/Theme.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <TitleMain>
                    <SmallText>hi! everyone</SmallText>
                    <TextMain>Anna{"\n"}Web Dev</TextMain>
                    <Button width={"250px"} height={"80px"} elemType="a" text={"Get in touch"}/>
                </TitleMain>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    max-width: 100%;
    overflow: hidden;

    background: url(${photoBg}) center no-repeat;
    background-position: 80% 100%;
    background-size: contain;
    background-color: ${theme.colors.primaryBg};

    button {
        background-color: transparent;
        font-size: 19px;
        line-height: 234.5%;
        padding: 18px 50px;
    }
`

const SmallText = styled.span``

const TextMain = styled.h1`
    //font-size: calc((100vw - 360px) / (1920 - 360) * (60 - 30) + 30px);

    font-size: 7rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    white-space: pre-wrap;

    margin: 50px 0 35px;
`

const TitleMain = styled.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;

    color: ${theme.colors.fontColor};

    span:first-child {
        text-transform: uppercase;
        letter-spacing: 0.24em;
        font-family: "Inconsolata", monospace;
        font-size: 1.5rem;

        background-color: #ECECEC2B;
        width: fit-content;

        padding: 0.24em;
    }
`