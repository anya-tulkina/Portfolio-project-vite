import styled from "styled-components";

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                <Name>@ivan ivanow</Name>
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
    max-width: 500px;
`

const Slide = styled.div`
    text-align: center;
`

const Name = styled.span`
    display: inline-block;
    padding-bottom: 35px;
`
const Text = styled.p`
    padding-bottom: 15px;
`

const Pagination = styled.div`
    
    padding-bottom: 50px;
    
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 5px;
        border-radius: 5px;
        background-color: #fff;
    }

    span:nth-child(2) {
        width: 15px;
        background-color: #ff6161;
    }
`