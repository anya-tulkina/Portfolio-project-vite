import styled from "styled-components";
import {theme} from "../../../../../style/Theme.tsx";

type WorkPropsType = {
    title: string
    src: string
}

export const Work = (props: WorkPropsType) => {

    return (
        <GridWorkWrapper>
            <StyledProject>
                <Image src={props.src}/>
                <Title>{props.title}</Title>
            </StyledProject>
        </GridWorkWrapper>
    )
};


const GridWorkWrapper = styled.div`
    margin-top: 40px;
`

const StyledProject = styled.figure`
    display: inline-block;
    margin-bottom: 60px;
    text-align: right;
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
    color: ${theme.colors.fontColorSecondary};
    position: relative;

    &::before {
        content: "";
        background-color: ${theme.colors.fontColorSecondary};;
        display: inline-block;

        height: 3px;
        width: 100%;

        position: absolute;
        bottom: -2px;
    }
`