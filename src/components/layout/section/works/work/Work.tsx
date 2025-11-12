import styled from "styled-components";
import {ProjectType} from "../Works.tsx";

export const Work = (props: { project: Array<ProjectType> }) => {

    if (!props.project) return null

    return (

        <GridWorkWrapper>
            {
                props.project.map((item) => {
                    return <StyledProject key={item.id}>
                        <Image src={item.src} alt="Project-1"/>
                        <TextProject>
                            <Title>{item.title}</Title>
                            <Text>{item.text}</Text>
                        </TextProject>
                    </StyledProject>
                })
            }
        </GridWorkWrapper>
    );
};


const GridWorkWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    justify-content: center;
    justify-items: center;
    row-gap: 20px;
`

const StyledProject = styled.div`
    background-color: #a7b3a5;
    max-width: 300px;
    width: 100%;
    height: fit-content;  /*вытягивает столбец по контенту*/
    border-radius: 5%;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
`

const TextProject = styled.div`
    padding: 25px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    flex-grow: 1;
`

const Title = styled.h4`
    text-transform: uppercase;
`

const Text = styled.p`
`

