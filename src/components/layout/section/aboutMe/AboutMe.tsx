import styled from "styled-components";
import {Container} from "../../../Container.tsx";
import {SectionTitle} from "../../../SectionTitle.tsx";
import {Button} from "../../../button/Button.tsx";
import {Icon} from "../../../icon/Icon.tsx";
import {Skills} from "./skillsNew/Skills.tsx";
import {FlexWrapper} from "../../../FlexWrapper.tsx";

const skills = ["React", "JS", "HTML", "CSS", "Redux"];

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <SectionTitle>Who am i</SectionTitle>
                <FlexWrapper justify={"space-between"} gap={"120px"}>
                    <InfoAboutMe>
                        <Description>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                            maiores alias consequatur aut perferendis doloribus asperiores repellat quia voluptas sit
                            aspernatur te natus accusan. maiores alias consequatur aut equatur aut
                            perferendi.</Description>
                        <Button>
                            About me
                            <WrapperIcon>
                                <Icon iconId={"arrow"} height={"21"} width={"21"} viewBox={"0 0 30 30"}/>
                            </WrapperIcon>
                        </Button>
                    </InfoAboutMe>
                    <Skills skills={skills}/>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    min-height: 100%;
    position: relative;

    margin-top: 100px;

    ${SectionTitle} {
        display: inline-block;
        left: 0;
        top: 0;
    }
`

const InfoAboutMe = styled.div`
    min-height: 100%;

    margin-top: 20px;

    button {
        background-color: #000;
        color: #fff;
        width: 190px;
        height: 60px;
        font-size: 17px;

        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 24px;
    }
`

const Description = styled.p`
    font-size: 17px;
    letter-spacing: 0.02em;
    font-size: 17px;
    line-height: 238%;

    margin-bottom: 60px;
`

const WrapperIcon = styled.div`
    display: flex;
    align-items: center;

`

