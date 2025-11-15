import styled from "styled-components";
import {SectionTitle} from "../../../SectionTitle.tsx";
import {FlexWrapper} from "../../../FlexWrapper.tsx";
import {Slider} from "../../../slider/Slider.tsx";
import {Container} from "../../../Container.tsx";
import bgImg from "../../../../assets/images/9cb987300e07f4bec262f4a21d4dc1ccdbf44c51.jpg"

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <FlexWrapper direction="column" align={"center"}>
                    <SectionTitle borderColor={"#333333"} fontColorTitle={"#333333"} title={"testimonials"} fontColor={"#FFF"} bgColor={"#111111"} subtitle={"what clients says"}/>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    color: #fff;
    background-image: url(${bgImg});
    background-size: cover;
    z-index: -2;

    position: relative;

    &::before {
        content: "";
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;

        z-index: -1;
        position: absolute;
    }
    
`