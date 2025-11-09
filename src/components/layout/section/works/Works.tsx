import styled from "styled-components";
import {SectionTitle} from "../../../SectionTitle.tsx";
import {Navigation} from "../../../Navigatiom/Navigation.tsx";
import {Work} from "./work/Work.tsx";
import photoProject1 from "../../../../assets/images/proj-1.webp"
import photoProject2 from "../../../../assets/images/proj-4.webp"
import photoProject3 from "../../../../assets/images/proj-3.webp"

const navigationItems = ["All", "React", "SPA"]

export type ProjectType = {
    id: number
    title: string
    text: string
    src: string
}

const project = [
    {
        id: 1,
        title: "SPA",
        src: photoProject1,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        id: 2,
        title: "React",
        src: photoProject2,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        id: 3,
        title: "Redux",
        src: photoProject3,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    }
] as Array<ProjectType>

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Projects</SectionTitle>
            <Navigation navigation={navigationItems}/>
            <Work project={project}/>
        </StyledWorks>
    );
};

const StyledWorks = styled.div`
    background-color: #89b3ea;
    min-height: 100vh;
`
