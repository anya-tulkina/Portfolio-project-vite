import styled from "styled-components";
import {SectionTitle} from "../../../SectionTitle.tsx";
import {FlexWrapper} from "../../../FlexWrapper.tsx";
import {Slider} from "../../../slider/Slider.tsx";
import {Container} from "../../../Container.tsx";
import bgImg from "../../../../assets/images/bgAchievement.jpg"
import {theme} from "../../../../style/Theme.tsx";
import arrow from "../../../../assets/images/arrowPagination.svg";
// import {Icon} from "../../../icon/Icon.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <WrapperTestimony>
                <Container>
                    <FlexWrapper direction="column" align={"center"} justify={"center"}>
                        <WrapperSlider>
                            <PaginationPrev/>
                            <SectionTitle marginTop={"110px"} borderColor={"#333333"} fontColorTitle={"#333333"}
                                          title={"testimonials"} fontColor={"#FFF"} bgColor={"#111111"}
                                          subtitle={"what clients says"}/>
                            <Slider/>
                            <PaginationNext/>
                        </WrapperSlider>
                    </FlexWrapper>
                </Container>
            </WrapperTestimony>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    color: ${theme.colors.fontColor};
`

const WrapperTestimony = styled.div`

    background-image: url(${bgImg});
    background-position: 100% 10%;
    background-size: cover;
    z-index: 0;
    position: relative;

    &::before {
        content: "";
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;

        z-index: -1;
        position: absolute;
    }

    //@media screen and (min-resolution: 2dppx) {
    //    background-image: url("/src/assets/images/bgImage.jpg");
    //    background-color: rgba(0, 0, 0, 0.41);
    //    background-position: 100% 10%;
    //}
`

const WrapperSlider = styled.div`
    position: relative;
`

const PaginationButton = styled.button`
    background-image: url("${arrow}");
    background-repeat: no-repeat;
    width: 25px;
    height: 50px;
    position: absolute;
    z-index: 3;
    top: 50%;
    transform: translateY(-50%);
`;

const PaginationPrev = styled(PaginationButton)`
    left: 0;
    transform: translateY(-50%) rotate(180deg);
`;

const PaginationNext = styled(PaginationButton)`
    right: 0;
`;

