import styled from "styled-components";
import {ProjectType} from "../Works.tsx";
import {FlexWrapper} from "../../../../FlexWrapper.tsx";

export const Work = (props: { project: Array<ProjectType> }) => {

    if (!props.project) return null

    return (
        <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"} gap={"10px"}>
            {
                props.project.map((item) => {
                       return <StyledProject key={item.id}>
                            <Image src={item.src} alt="Project-1"/>
                            <Title>{item.title}</Title>
                            <Text>{item.text}</Text>
                        </StyledProject>
                })
            }
        </FlexWrapper>
    );
};

const StyledProject = styled.div`
    background-color: #a7b3a5;
    max-width: 400px;
    margin-bottom: 10px;
    border-radius: 5%;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
`

const Title = styled.h3`

`

const Text = styled.p`
   
`

