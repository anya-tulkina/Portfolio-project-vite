import styled from "styled-components";
import {Container} from "../../Container.tsx";
import {theme} from "../../../style/Theme.tsx";
import {Icon} from "../../icon/Icon.tsx";
import {FlexWrapper} from "../../FlexWrapper.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper align={"center"}>
                    <Icon iconId={"logo"} width={"220px"} height={"35px"} viewBox={"0 0 220 30"}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>

    )
}


const StyledHeader = styled.header`
    background: ${theme.colors.primaryBg};
    padding: 30px 0;
`