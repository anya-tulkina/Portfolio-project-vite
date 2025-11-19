import styled from "styled-components";
import {Slide} from "./slide/Slide.tsx";
import imgAuthor from "../../assets/images/reviews.jpg";

const TestimonyList = [
    {
        id: 1,
        text: "“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”",
        author: "Lucas wolfer",
        image: imgAuthor,
        position: "ceo - raisins"
    },
    // {
    //     id: 2,
    //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //     author: "Lucas wolfer",
    //     image: imgAuthor,
    //     branch: "ceo - raisins"
    // },
    // {
    //     id: 3,
    //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //     author: "Lucas wolfer",
    //     image: imgAuthor,
    //     branch: "ceo - raisins"
    // },
    // {
    //     id: 4,
    //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //     author: "Lucas wolfer",
    //     image: imgAuthor,
    //     branch: "ceo - raisins"
    // }
]

export const Slider = () => {
    return (
        <StyledSlider>
            {
                TestimonyList.map((items) => {
                    return (
                        <Slide key={items.id} text={items.text} image={items.image} author={items.author} position={items.position}/>
                    )
                })
            }
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    margin-top: 55px;

    position: relative;
`
