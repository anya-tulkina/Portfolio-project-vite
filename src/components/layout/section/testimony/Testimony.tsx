import styled from "styled-components";
import {SectionTitle} from "../../../SectionTitle.tsx";
import {FlexWrapper} from "../../../FlexWrapper.tsx";
import {Icon} from "../../../icon/icon.tsx";
import {Slider} from "../../../slider/Slider.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction="column" align={"center"}>
                <Icon iconId={"quote"} height={"50px"} />
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: #dad3f3;
`