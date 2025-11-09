import styled from "styled-components";

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <Text>This is sample project description random things are here in description This is sample project
                    lorem ipsum generator for dummy content</Text>
                <Name>Anya Tyulkina</Name>
            </Slide>
            <Pagination>
                <span> </span>
                <span> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    border: 1px solid red;
    max-width: 500px;
`

const Slide = styled.div`
    text-align: center;
`

const Name = styled.span`

`
const Text = styled.p`

`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 5px;
        border-radius: 5px;
        background-color: #abc0f4;
    }

    span:nth-child(2) {
        width: 15px;
        background-color: #6286e1;
    }
`