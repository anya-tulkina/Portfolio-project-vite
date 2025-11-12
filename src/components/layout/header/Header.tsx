import styled from "styled-components";
import {Container} from "../../Container.tsx";
import {HeaderMenu} from "./HeaderMenu.tsx";

const navigationItems = ["Home", "About", "Tech Task", "Projects", "Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <HeaderContainer>
                    <Name>Anya Tyulkina</Name>
                    <HeaderMenu navigation={navigationItems}/>
                </HeaderContainer>
            </Container>
        </StyledHeader>

    )
}


const StyledHeader = styled.header`
    background: rgba(28, 28, 28, 0.51);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 0 20px;
`

const Name = styled.span`
    font-family: "Malayalam MN";
`
