import styled from "styled-components";
import {Container} from "../../../Container.tsx";
import {SectionTitle} from "../../../SectionTitle.tsx";


const NewsList = [
    {
        id: 1,
        title: "Graphic Design",
        time: "July 1, 2021",
        text: "Graphic Designing Useful Tips & Best Practices",
        image: "../../../../assets/images/project-1.jpg",
    },
    {
        id: 2,
        title: "Graphic Design",
        time: "July 1, 2021",
        text: "basic typography rules for ui designing",
        image: "../../../../assets/images/project-1.jpg"
    },
    {
        id: 3,
        title: "Graphic Design",
        time: "July 1, 2021",
        text: "top 10 graphic designs review in 2021",
        image: "../../../../assets/images/project-1.jpg"
    },
]

export const BLogs = () => {
    return (
        <StyledBLogs>
            <Container>
                <SectionTitle>latest news</SectionTitle>
                {
                    NewsList.map((item, index) => {
                        return (
                            <div key={index}>
                                <img src={item.image}/>
                                <h3>{item.title}</h3>
                                <time>{item.time}</time>
                                <p>{item.text}</p>
                            </div>
                        )
                    })
                }
            </Container>
        </StyledBLogs>
    );
};

const StyledBLogs = styled.section``

