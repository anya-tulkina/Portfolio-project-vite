import styled from "styled-components";

type NavigationPropsType = {
    menu?: Array<string>
}

export const Menu = (props: NavigationPropsType) => {

    if (!props.menu || !Array.isArray(props.menu)) {
        return null; // или можно вернуть заглушку
    }

    return (
        <StyledMenu>
            <MenuList>
                {props.menu.map((item, index) => {
                    return <ManuItem key={index}>
                        <MenuLink href="">{item}</MenuLink>
                    </ManuItem>
                })}
            </MenuList>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    padding-right: 80px;
    width: 300px;
`

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 40px;

    max-height: 220px;
`
const ManuItem = styled.li`
`
const MenuLink = styled.a`
    font-family: "Rubik", sans-serif;
    letter-spacing: 0.08em;
    color: #8F8F8F;
    
    text-transform: uppercase;
    
    &:hover {
        color: #201F1F;
    }
`