import {SectionTitle} from "../../../SectionTitle.tsx";
import {Skill} from "./Skill.tsx";
import {FlexWrapper} from "../../../FlexWrapper.tsx";
import styled from "styled-components";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <FlexWrapper justify="space-between" wrap="wrap">
                <Skill iconId={"redux"}
                       description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                       title={"redux"}/>
                <Skill iconId={"react"}
                       description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                       title={"react"}/>
                <Skill iconId={"vite"}
                       description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                       title={"vite"}/>
                <Skill iconId={"sass"}
                       description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                       title={"sass"}/>
                <Skill iconId={"git-hub"}
                       description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                       title={"git-hu"}/>
                <Skill iconId={"npm"}
                       description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                       title={"npm"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.div`
    background-color: #dfaaaa;
    min-height: 100vh; //на вусь экран
`