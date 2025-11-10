import styled from "styled-components";
import {Navigation} from "../../Navigation/Navigation.tsx";

const navigationItems = ["Home", "About", "Tech Task", "Projects","Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Name>Anya Tyulkina</Name>
            <Navigation navigation={navigationItems}/>
        </StyledHeader>
    )
}


const StyledHeader = styled.header`
    background-color: #e08f8f;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Name = styled.span`
    margin-left: 1rem;
`