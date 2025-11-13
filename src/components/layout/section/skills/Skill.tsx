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
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
`