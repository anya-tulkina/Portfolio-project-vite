import mainPhoto from "../../../../assets/images/IMG_0556-Photoroom.png"
import styled from "styled-components";
import {FlexWrapper} from "../../../FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                <div>
                    <Name>I'm Anna Tyulkina</Name>
                    <MainTittle>I'm studying web dev</MainTittle>
                </div>
                <Photo src={mainPhoto} alt="main photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    
    @media screen and (max-width: 650px) {
        img {
            max-width: 50%;
        }
    }

    @media screen and (max-width: 550px) {
        img {
            max-width: 50%;
        }
    }
`
const MainTittle = styled.h1`
    font-size: calc((100vw - 360px) / (1920 - 360) * (60 - 30) + 30px);
    
`

const Name = styled.h2`
    font-size: calc((100vw - 360px) / (1920 - 360) * (40 - 30) + 30px);
    
`

const Photo = styled.img`
    max-height: 400px;
    object-fit: cover;
    border-radius: 40%;
`