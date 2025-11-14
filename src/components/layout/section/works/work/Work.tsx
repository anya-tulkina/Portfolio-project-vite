import styled from "styled-components";
import {ProjectType} from "../Works.tsx";

export const Work = (props: { project: Array<ProjectType> }) => {

    if (!props.project) return null

    return (
        <GridWorkWrapper>
            {
                props.project.map((item) => {
                       return <StyledProject key={item.id}>
                            <Image src={item.src}/>
                            <Title>{item.title}</Title>
                        </StyledProject>
                })
            }
        </GridWorkWrapper>
    )
};

const GridWorkWrapper = styled.div`
    column-count: 2;
    column-gap: 60px;

    @media (max-width: 1024px) {
        column-count: 1;
    }
`

const StyledProject = styled.div`
    margin-bottom: 60px;
    text-align: end;
    
    span {
        position: relative;
        
        &::before {
            content: "";
            background-color: #2F2F2F;
        ;
            display: inline-block;
            
            height: 3px;
            width: 100%;
            
            position: absolute;
            bottom: -2px;
        }
    }
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    display: block;
`

const Title = styled.span`
    display: inline-block;
    margin-top: 20px;
    font-size: 26px;
    text-transform: lowercase;
    color: #2F2F2F;
`
