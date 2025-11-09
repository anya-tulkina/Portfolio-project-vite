import styled from "styled-components";
import {ProjectType} from "../Works.tsx";
import {FlexWrapper} from "../../../../FlexWrapper.tsx";

export const Work = (props: { project: Array<ProjectType> }) => {

    if (!props.project) return null

    return (
        <FlexWrapper justify={"space-around"} align={"center"}>
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
    background-color: #c1caae;
    max-width: 400px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Title = styled.h3`

`

const Text = styled.p`
   
`

