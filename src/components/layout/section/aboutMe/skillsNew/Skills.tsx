import styled from "styled-components";
import {StyledRealSkill} from "./skill/StyledRealSkill.tsx";
import {FlexWrapper} from "../../../../FlexWrapper.tsx";

type SkillsTypeProps = {
    skills: string[];
}

export const Skills = (props: SkillsTypeProps) => {
    return (
        <StyledSkills>
            <FlexWrapper direction={"column"} gap={"34px"}>
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
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.div`
    width: 100%;
`

const Skill = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const SkillList = styled.ul`

`

const SkillItem = styled.li`
    color: #2F2F2F;
    letter-spacing: 0.15em;
    text-transform: uppercase;
`

const ProgressSkill = styled.div`
    width: 100%;
    background-color: #DBDBDB;
`

