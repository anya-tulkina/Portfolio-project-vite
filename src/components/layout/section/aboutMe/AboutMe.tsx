import styled from "styled-components";
import {Container} from "../../../Container.tsx";
import {SectionTitle} from "../../../SectionTitle.tsx";
import {Button} from "../../../Button.tsx";
import {Skills} from "./skillsNew/Skills.tsx";
import {FlexWrapper} from "../../../FlexWrapper.tsx";

const skills = ["React", "JS", "HTML", "CSS", "Redux"];

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <SectionTitle title={"About"} subtitle={"Who am i"}/>
                <FlexWrapper justify={"space-between"} gap={"120px"}>
                    <InfoAboutMe>
                        <Description>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                            maiores alias consequatur aut perferendis doloribus asperiores repellat quia voluptas sit
                            aspernatur te natus accusan. maiores alias consequatur aut equatur aut
                            perferendi.</Description>
                            <Button elemType={"a"} img={"arrow"} text={"About me"}/>
                    </InfoAboutMe>
                    <Skills skills={skills}/>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    padding-top: 100px;
`

const InfoAboutMe = styled.div`
    margin-top: 20px;
`

const Description = styled.p`
    font-size: 17px;
    letter-spacing: 0.02em;
    line-height: 238%;
    color: #555555;

    margin-bottom: 60px;
`