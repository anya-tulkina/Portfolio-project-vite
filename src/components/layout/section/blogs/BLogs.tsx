import styled from "styled-components";
import {Container} from "../../../Container.tsx";
import {SectionTitle} from "../../../SectionTitle.tsx";
import photoNews1 from "../../../../assets/images/news-1.png";
import photoNews2 from "../../../../assets/images/news-2.png";
import photoNews3 from "../../../../assets/images/news-3.png";
import {Button} from "../../../Button.tsx";
import {theme} from "../../../../style/Theme.tsx";


const NewsList = [
    {
        id: 1,
        title: "Graphic Design ",
        time: "July 1, 2021",
        text: "Graphic Designing Useful Tips & Best Practices",
        image: photoNews1
    },
    {
        id: 2,
        title: "Graphic Design ",
        time: "July 1, 2021",
        text: "basic typography rules for ui designing",
        image: photoNews2
    },
    {
        id: 3,
        title: "Graphic Design ",
        time: "July 1, 2021",
        text: "top 10 graphic designs review in 2021",
        image: photoNews3
    },
]

export const BLogs = () => {
    return (
        <StyledBLogs>
            <Container>
                <SectionTitle title={"blogs"} subtitle={"latest news"}/>
                <WrapperNews>
                    {
                        NewsList.map((item) => {
                            return (
                                <WrapperImage key={item.id}>
                                    <ImageNews src={item.image}/>
                                    <WrapperTitle>
                                        <TitleNews>{item.title}</TitleNews>
                                        <Separator>/</Separator>
                                        <TimeNews dateTime={item.time}>{item.time}</TimeNews>
                                        <TextNews>{item.text}</TextNews>
                                    </WrapperTitle>
                                </WrapperImage>
                            )
                        })
                    }
                </WrapperNews>
                <Button elemType={"a"} img={"arrow-black"} bgColor={"none"} text={"view all blogs"} color={"#111"}/>
            </Container>
        </StyledBLogs>
    );
};

const StyledBLogs = styled.section`
    padding-bottom: 200px;

    & a {
        margin: 0 auto;
    }
`

const WrapperNews = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 46px;

    padding: 60px 0 60px;
`


const WrapperImage = styled.article`
    position: relative;
    z-index: 0;

    &:hover {
        &::before {
            content: "";
            background-color: rgba(0, 0, 0, 0.3);
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            position: absolute;
            z-index: 1;
        }
    }

`

const WrapperTitle = styled.div`
    color: ${theme.colors.fontColor};
    width: 100%;

    position: absolute;
    z-index: 1;

    bottom: 0;
    padding: 50px;
    margin-right: 2px;

    background-image: linear-gradient(rgba(243, 243, 243, 0), rgba(46, 46, 46, 0.47));

`

const ImageNews = styled.img`
`

const TitleNews = styled.span`
    font-weight: 600;
`

const TimeNews = styled.time``

const TextNews = styled.h3`
    font-weight: 700;
    font-size: 26px;
    text-transform: capitalize;
`

const Separator = styled.span`
    margin: 0 10px;
`