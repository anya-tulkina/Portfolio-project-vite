import styled from "styled-components";
import {SectionTitle} from "../../../SectionTitle.tsx";
import {FlexWrapper} from "../../../FlexWrapper.tsx";
import {Icon} from "../../../icon/Icon.tsx";
import {Slider} from "../../../slider/Slider.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction="column" align={"center"}>
                <Icon iconId={"quote"} height={"60px"} width={"60px"} />
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    height: 100%;
    padding: 20px;
`