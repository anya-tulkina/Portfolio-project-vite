import styled from "styled-components";
import {StyledRealSkill} from "./skill/StyledRealSkill.tsx";

type SkillsTypeProps = {
    skills: string[];
}

export const Skills = (props: SkillsTypeProps) => {
    return (
        <StyledSkills>
            {
                props.skills.map((skill, index) => {
                    return (
                        <Skill key={index}>
                            <SkillList>
                                <SkillItem>{skill}</SkillItem>
                            </SkillList>
                            <ProgressSkill>
                                <StyledRealSkill/>
                            </ProgressSkill>
                        </Skill>
                    )
                })
            }
        </StyledSkills>
    );
};

const StyledSkills = styled.div`
    max-width: 100vh;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 34px;
`

const Skill = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const SkillList = styled.ul`

`

const SkillItem = styled.li`
    color: #000000;
    letter-spacing: 0.15em;
    text-transform: uppercase;
`

const ProgressSkill = styled.div`
    width: 100%;
    background-color: rgba(30, 30, 30, 0.37);
`

