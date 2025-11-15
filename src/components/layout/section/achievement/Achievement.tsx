import styled from "styled-components";
import {Container} from "../../../Container.tsx";
import {SectionTitle} from "../../../SectionTitle.tsx";

const AchievementList = [
    {id: 1, title: "Interior design", text: "Breakthrough designer of the year 2020"},
    {id: 2, title: "Interior design", text: "Breakthrough designer of the year 2020"},
    {id: 3, title: "Interior design", text: "Breakthrough designer of the year 2020"},
    {id: 4, title: "Interior design", text: "Breakthrough designer of the year 2020"},
    {id: 5, title: "Interior design", text: "Breakthrough designer of the year 2020"},
    {id: 6, title: "Interior design", text: "Breakthrough designer of the year 2020"}
]

export const Achievement = () => {
    return (
        <StyledAchievement>
            <Container>
                <SectionTitle title={"achievement"} subtitle={"awards and recognition"} fontColor={"#111111"}/>
                {/*<SectionTitle>awards and recognition</SectionTitle>*/}
                <WrapperAchievement>
                    {
                        AchievementList.map((achievement, index) => {
                            return (
                                <AchievementItem key={index}>
                                    <TitleAchievement>{achievement.title}</TitleAchievement>
                                    <AchievementText>{achievement.text}</AchievementText>
                                </AchievementItem>
                            )
                        })
                    }
                </WrapperAchievement>
            </Container>
        </StyledAchievement>
    );
};

const StyledAchievement = styled.section`
    margin-bottom: 120px;
`

const WrapperAchievement = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 60px;
    row-gap: 50px;
    width: 100%;
    
    margin-top: 50px;
`
const AchievementItem = styled.article`
    
    position: relative;
    
    &::before {
        content: "";
        background-color: #E2E2E2;
        width: 355px;
        height: 1px;
        bottom: 0;
        
        position: absolute;
    }
`

const TitleAchievement = styled.h3`
    color: #111111;
    font-size: 22px;
    font-weight: 500;
`

const AchievementText = styled.p`
    color: #282828;
    font-size: 19px;
    font-weight: 300;
    line-height: 188%;
    letter-spacing: 0.02em;

    margin-bottom: 50px;
    
`