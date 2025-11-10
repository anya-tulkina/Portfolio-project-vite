import {Icon} from "../../../icon/icon.tsx";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    title: string,
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={"120px"} />
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    max-width: 400px;
    margin: 5px;
    background-color: #e4bbbb;
    text-align: center;
    box-shadow: 1px 1px 2px #888787;
    border-radius: 5%;
`

const SkillTitle = styled.h3`
    margin: 0;
    font-size: 25px;
    text-transform: uppercase;
    font-family: Josefin Sans;
    font-size: 16px;
`

const SkillText = styled.p`
    font-family: Poppins;
    font-size: 14px;
`