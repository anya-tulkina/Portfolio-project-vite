import styled from "styled-components";
import {Navigation} from "../../Navigatiom/Navigation.tsx";
import {Logo} from "../../logo/Logo.tsx";

const navigationItems = ["Home", "About", "Tech Task", "Projects","Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Navigation navigation={navigationItems}/>
        </StyledHeader>
    )
}


const StyledHeader = styled.header`
    background-color: #e08f8f;
    display: flex;
    justify-content: space-between;
`