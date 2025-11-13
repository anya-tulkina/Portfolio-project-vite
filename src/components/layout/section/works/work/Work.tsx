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
    width: 100%;
    max-width: 100%;

    @media (max-width: 1024px) {
        column-count: 1;
    }
`

const StyledProject = styled.div`
    text-align: end;
    span {
        position: relative;
        
        &::before {
            content: "";
            background-color: #000;
            display: inline-block;
            height: 1px;
            width: 100%;
            
            position: absolute;
            bottom: 0;
        }
    }
   padding-bottom: 10px;
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    display: block;
`

const Title = styled.span`
    text-align: end;
`
