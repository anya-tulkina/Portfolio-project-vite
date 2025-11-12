import {Icon} from "../../../icon/Icon.tsx";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    title: string,
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
                <Icon iconId={props.iconId} width={"60px"} height={"80"} viewBox={"0 0 120 120"}/>
            {/*<SkillTitle>{props.title}</SkillTitle>*/}
            {/*<SkillText>{props.description}</SkillText>*/}
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    max-width: 300px;
    height: 100%;
`
//
// const SkillTitle = styled.h3`
//     text-transform: uppercase;
//     font-size: calc((100vw - 360px) / (1920 - 360) * (20 - 16) + 16px);
// `
//
// const SkillText = styled.p`
// `