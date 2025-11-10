import {SectionTitle} from "../../../SectionTitle.tsx";
import {Skill} from "./Skill.tsx";
import {FlexWrapper} from "../../../FlexWrapper.tsx";
import styled from "styled-components";

const skilsList = [
    {iconId: "redux", title: "redux", description:  "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"},
    {iconId: "react", title: "react", description:  "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"},
    {iconId: "vite", title: "vite", description:  "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"},
    {iconId: "sass", title: "sass", description:  "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"},
    {iconId: "git-hub", title: "github", description:  "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"},
    {iconId: "npm", title: "npm", description:  "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
]
export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <FlexWrapper justify="space-around" wrap="wrap">

                {
                    skilsList.map((skill, index) => {
                        return (
                            <Skill key={index} iconId={skill.iconId}
                                   description={skill.description}
                                   title={skill.title}/>
                        )
                    })
                }
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #dfaaaa;
`