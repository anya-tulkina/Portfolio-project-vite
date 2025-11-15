import styled from "styled-components";

type SectionTitlePropsType = {
    title?: string
    subtitle?: string
    bgColor?: string
    fontColor?: string
    fontColorTitle?: string
    borderColor?: string
}

export const SectionTitle  = (props: SectionTitlePropsType) => {
    return (
        <StyledSectionTitle>
            <TextTitle fontColorTitle={props.fontColorTitle}>{props.title}</TextTitle>
            <SubTitle borderColor={props.borderColor} fontColor={props.fontColor} bgColor={props.bgColor}>{props.subtitle}</SubTitle>
        </StyledSectionTitle>
    )
}

const StyledSectionTitle = styled.div`
    display: inline-block;
    position: relative;
    z-index: 0;
    
    span {
        display: inline-block;

        position: absolute;
        z-index: 1;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`
const TextTitle = styled.h2<SectionTitlePropsType>`
    font-family: "Jost", sans-serif;
    font-size: 120px;
    font-weight: 300;
    color: ${props => props.fontColorTitle || "#F8F8F8"};
    line-height: 150%;
    letter-spacing: -0.04em;
    text-transform: uppercase;
`

const SubTitle = styled.span<SectionTitlePropsType>`
    font-family: "Inconsolata", monospace;
    color: ${props => props.fontColor || "#111111"};
    background-color: ${props => props.bgColor || "#fff"};
    font-weight: 400;
    line-height: 126%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border: 1px solid ${props => props.borderColor || "#F8F8F8"};
    
    padding: 0 12px;
`