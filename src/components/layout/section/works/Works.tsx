import styled from "styled-components";
import {SectionTitle} from "../../../SectionTitle.tsx";
import {Work} from "./work/Work.tsx";
import photoProject1 from "../../../../assets/images/proj-1.webp"
import photoProject2 from "../../../../assets/images/proj-4.webp"
import photoProject3 from "../../../../assets/images/proj-3.webp"
import {Container} from "../../../Container.tsx";

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
        text: "This is sample project description random things are here in description. his is sample project description random things are here in description. his is sample project description random things are here in description. his is sample project description random things are here in description. his is sample project description random things are here in description"
    },
    {
        id: 2,
        title: "React",
        src: photoProject2,
        text: "This is sample project description random things are here in description"
    },
    {
        id: 3,
        title: "Redux",
        src: photoProject3,
        text: "This is sample project description random things are here in description"
    },
    {
        id: 4,
        title: "Redux",
        src: photoProject3,
        text: "This is sample project description random things are here in description"
    },
    {
        id: 5,
        title: "Redux",
        src: photoProject3,
        text: "This is sample project description random things are here in description"
    },
    {
        id: 6,
        title: "Redux",
        src: photoProject3,
        text: "This is sample project description random things are here in description"
    }
] as Array<ProjectType>

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle title={"portfolio"} fontColor={"#111111"} subtitle={"Latest works"}/>
                {/*<SectionTitle>Latest works</SectionTitle>*/}
                <Work project={project}/>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    margin-top: 100px;
`
