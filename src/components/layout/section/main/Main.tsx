import mainPhoto from "../../../../assets/images/main-photo.webp"
import styled from "styled-components";
import {FlexWrapper} from "../../../FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi everyone</span>
                    <Name>I am Anna Tyulkina</Name>
                    <MainTittle>A Web Developer</MainTittle>
                </div>
                <Photo src={mainPhoto} alt="main photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
`

const StyledMain = styled.div`
    background-color: #cbdca8;
`
const MainTittle = styled.h1`
`

const Name = styled.h2`
`