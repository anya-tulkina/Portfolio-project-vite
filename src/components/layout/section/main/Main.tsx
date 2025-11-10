import mainPhoto from "../../../../assets/images/IMG_0556-Photoroom.png"
import styled from "styled-components";
import {FlexWrapper} from "../../../FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                <div>
                    <span>Hi everyone</span>
                    <Name>I am Anna Tyulkina</Name>
                    <MainTittle>I am studying web dev</MainTittle>
                </div>
                <Photo src={mainPhoto} alt="main photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const Photo = styled.img`
    max-height: 400px;
    object-fit: cover;
    background-color: #d7fdfd;
    border-radius: 40%;
`

const StyledMain = styled.div`
    background-color: #d7fdfd;
    
    @media screen and (max-width: 650px) {
        img {
            max-width: 50%;
        }
        
        h1, 
        h2,
        span {
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 550px) {
        img {
            max-width: 50%;
        }

        h1,
        h2,
        span {
            font-size: 1rem;
        }
    }
`
const MainTittle = styled.h1`
`

const Name = styled.h2`
`