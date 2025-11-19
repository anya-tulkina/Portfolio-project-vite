import styled from "styled-components";
import {Container} from "../../../Container.tsx";
import {FlexWrapper} from "../../../FlexWrapper.tsx";
import {theme} from "../../../../style/Theme.tsx";
import {SectionTitle} from "../../../SectionTitle.tsx";
import quotes from "../../../../assets/images/quotes.svg"

export const Quote = () => {
    return (
        <StyledQuote>
            {/*<>*/}
            <Container>
                <FlexWrapper direction={"column"} align={"center"} gap={"80px"}>
                    {/*<WrapperStyledQuote>*/}
                    <SectionTitle marginTop={"100px"} borderColor={"none"} title={"Quote of the day"}/>
                    <WrapperQuote>
                        <TextQuote>“Success is not final; failure is not fatal: it is the courage to continue that
                            counts.”</TextQuote>
                        <AutoQuote>-Winston Churchill</AutoQuote>
                    </WrapperQuote>
                    {/*</WrapperStyledQuote>*/}
                </FlexWrapper>
            </Container>
        </StyledQuote>
    );
};

const StyledQuote = styled.section`
    color: #EAEAEA;

    background-color: ${theme.colors.primaryBg};

    position: relative;
    z-index: 0;

    h2 {

        &::before {
            content: "";
            background-color: #EAEAEA;
            width: 220px;
            height: 4px;

            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
        }
    }

    &::before {
        content: "";
        background-image: url("${quotes}");
        max-width: 385px;
        max-height: 320px;
        width: 100%;
        height: 100%;
        
        display: inline-block;
        margin-left: 70px;

        z-index: 1;
        position: absolute;


        top: 0;
        left: 0;
    }

    &::after {
        content: "";
        background-image: url("${quotes}");
        max-width: 385px;
        max-height: 320px;
        width: 100%;
        height: 100%;

        display: inline-block;
        margin-right: 60px;

        z-index: 1;
        position: absolute;


        bottom: 0;
        right: 0;
        transform: rotate(180deg);
    }
}

`

const WrapperQuote = styled.blockquote`
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
    line-height: 180%;
`