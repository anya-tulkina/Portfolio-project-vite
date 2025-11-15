import styled from "styled-components";
import {Container} from "../../../Container.tsx";
import {SectionTitle} from "../../../SectionTitle.tsx";
import {Button} from "../../../button/Button.tsx";
import {Skills} from "./skillsNew/Skills.tsx";
import {FlexWrapper} from "../../../FlexWrapper.tsx";

const skills = ["React", "JS", "HTML", "CSS", "Redux"];

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <SectionTitle title={"About"} subtitle={"Who am i"} fontColor={"#111111"}/>
                <FlexWrapper justify={"space-between"} gap={"120px"}>
                    <InfoAboutMe>
                        <Description>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                            maiores alias consequatur aut perferendis doloribus asperiores repellat quia voluptas sit
                            aspernatur te natus accusan. maiores alias consequatur aut equatur aut
                            perferendi.</Description>
                        <Button img={"arrow"} text={"About me"} bgColor={"#000"} color={"#fff"}/>
                    </InfoAboutMe>
                    <Skills skills={skills}/>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    margin-top: 100px;
`

const InfoAboutMe = styled.div`
    margin-top: 20px;
`

const Description = styled.p`
    font-size: 17px;
    letter-spacing: 0.02em;
    font-size: 17px;
    line-height: 238%;

    margin-bottom: 60px;
`