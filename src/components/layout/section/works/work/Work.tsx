import styled from "styled-components";
import {ProjectType} from "../Works.tsx";
import {Button} from "../../../../button/Button.tsx";
// import {Button} from "../../../../button/Button.tsx";
// import {Icon} from "../../../../icon/Icon.tsx";

export const Work = (props: { project: Array<ProjectType> }) => {

    if (!props.project) return null

    return (
        <GridWorkWrapper>
            {
                props.project.map((item) => (
                        <StyledProject key={item.id}>
                            <Image src={item.src}/>
                            <Title>{item.title}</Title>
                        </StyledProject>
                ))
            }
            <Button img={"arrow"} text={"view all portfolio"} bgColor={"#000"} color={"#fff"} />
        </GridWorkWrapper>
    )
};



const GridWorkWrapper = styled.div`
    column-count: 2;
    column-gap: 60px;
    
    margin-top: 40px;
    
    @media (max-width: 1024px) {
        column-count: 1;
    }
`

const StyledProject = styled.figure`
    display: inline-block;
    margin-bottom: 60px;
    text-align: end;
    break-inside: avoid;
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    display: block;
`

const Title = styled.figcaption`
    display: inline-block;
    margin-top: 20px;
    font-size: 26px;
    text-transform: lowercase;
    color: #2F2F2F;
    position: relative;

    &::before {
        content: "";
        background-color: #2F2F2F;;
        display: inline-block;

        height: 3px;
        width: 100%;

        position: absolute;
        bottom: -2px;
    }
`
//
// const WrapperIcon = styled.div`
//     display: flex;
//     align-items: center;
// `