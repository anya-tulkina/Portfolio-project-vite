import styled from "styled-components";
import {ProjectType} from "../Works.tsx";
import {theme} from "../../../../../style/Theme.tsx";

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
    //display: grid;
    //grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
    //justify-content: space-between;
    
    column-count: 3;
    column-gap: 20px;
    width: 100%;
    max-width: 100%;


    @media (max-width: 1024px) {
        column-count: 2;
    }
`

const StyledProject = styled.div`
    background-color: ${theme.colors.primaryBg};
    border-radius: 10%;
    
    break-inside: avoid; /*предотвращает разрыв между колонками*/
    margin-bottom: 20px;
    max-width: 100%;

    //max-width: 350px;
    //height: fit-content;
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
`

const Title = styled.h4`
    text-transform: uppercase;
`

const Text = styled.p`
`

