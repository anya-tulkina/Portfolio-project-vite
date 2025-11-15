import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";

type ButtonPropsType = {
    text?: string
    img?: string
    bgColor?: string
    color?: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <StyledButton bgColor={props.bgColor} color={props.color}>
            {props.text}
            {props.img &&
                <WrapperIcon>
                    <Icon iconId={props.img} height={"21"} width={"21"} viewBox={"0 0 30 30"}/>
                </WrapperIcon>
            }
        </StyledButton>
    )
}


const StyledButton = styled.button<ButtonPropsType>`

    font-family: "Manrope", monospace;
    font-weight: 600;
    background-color: ${props => props.bgColor || "transparent"};
    font-size: 17px;
    color: ${props => props.color || "#ffffff"};
    border: 1px solid #ffffff;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    padding: 20px 40px;
`

const WrapperIcon = styled.div`
    display: flex;
    align-items: center;
`