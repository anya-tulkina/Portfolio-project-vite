import styled from "styled-components";
import {Container} from "../../../Container.tsx";
import {SectionTitle} from "../../../SectionTitle.tsx";
import {FlexWrapper} from "../../../FlexWrapper.tsx";

export const Quote = () => {
    return (
        <StyledQuote>
            <Container>
                <FlexWrapper direction={"column"} align={"center"} gap={"80px"}>
                    <SectionTitle>Quote of the day</SectionTitle>
                    <WrapperQuote>
                        <TextQuote>“Success is not final; failure is not fatal: it is the courage to continue that
                            counts.”</TextQuote>
                        <AutoQuote>-Winston Churchill</AutoQuote>
                    </WrapperQuote>
                </FlexWrapper>
            </Container>
        </StyledQuote>
    );
};

const StyledQuote = styled.section`
    background-color: #0D0D0D;
    margin-top: 200px;
    margin-bottom: 120px;
    width: 100%;

    ${SectionTitle} {
        font-family: "Jost", sans-serif;;
        color: #EAEAEA;
        font-size: 120px;
        line-height: 150%;
        border: none;
        letter-spacing: 0.04em;

        margin-top: 100px;
        
        position: relative;
        
        &::before {
            content: "";
            display: inline-block;
            background-color: #EAEAEA;
            width: 220px;
            height: 4px;
            
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
        }
    }
`

const WrapperQuote = styled.blockquote`
    color: #EAEAEA;
    font-size: 34px;
    line-height: 174%;
    max-width: 740px;

    margin-bottom: 50px;
    
`

const TextQuote = styled.p`
    margin-bottom: 50px;
`

const AutoQuote = styled.cite`
    color: #999999;
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    line-height: 180%;
`