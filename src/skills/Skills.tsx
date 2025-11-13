import {SectionTitle} from "../components/SectionTitle.tsx";
import {Skill} from "./Skill.tsx";
import styled from "styled-components";
import {Container} from "../components/Container.tsx";

const skillList = [
    {
        iconId: "react",
        title: "react",
        description: "This is sample project description random things are here in description"
    },
    {
        iconId: "js",
        title: "js",
        description: "This is sample project description random things are here in description"
    },
    {
        iconId: "redux",
        title: "redux",
        description: "This is sample project description random things are here in description"
    },
    {
        iconId: "git-hub",
        title: "github",
        description: "This is sample project description random things are here in description"
    },
    {
        iconId: "html",
        title: "html",
        description: "This is sample project description random things are here in description"
    },
    {
        iconId: "css",
        title: "css",
        description: "This is sample project description random things are here in description"
    },
    {
        iconId: "sass",
        title: "sass",
        description: "This is sample project description random things are here in description"
    },
    {
        iconId: "npm",
        title: "npm",
        description: "This is sample project description random things are here in description"
    },
    {
        iconId: "vite",
        title: "vite",
        description: "This is sample project description random things are here in description"
    },
    {
        iconId: "vs",
        title: "vs",
        description: "This is sample project description random things are here in description"
    },
    {
        iconId: "babel",
        title: "babel",
        description: "This is sample project description random things are here in description"
    },
    {
        iconId: "man",
        title: "man",
        description: "This is sample project description random things are here in description"
    }
]

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <WrapperSkills>
                    {
                        skillList.map((skill, index) => {
                            return (
                                <Skill key={index} iconId={skill.iconId}
                                       description={skill.description}
                                       title={skill.title}/>
                            )
                        })
                    }
                </WrapperSkills>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    
`

const WrapperSkills = styled.div`
    display: grid;
    grid-template-columns: repeat(6, minmax(120px, auto));
    justify-content: space-between;
    justify-items: center;

    padding-bottom: 20px;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(120px, auto));
    }
`