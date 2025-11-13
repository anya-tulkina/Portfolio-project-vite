import styled from "styled-components";
import {SectionTitle} from "../../../SectionTitle.tsx";
import {FlexWrapper} from "../../../FlexWrapper.tsx";
import {Icon} from "../../../icon/Icon.tsx";
import {Slider} from "../../../slider/Slider.tsx";
import {Container} from "../../../Container.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction="column" align={"center"}>
                    <Icon iconId={"quote"} height={"60px"} width={"60px"}/>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    height: 100%;
`