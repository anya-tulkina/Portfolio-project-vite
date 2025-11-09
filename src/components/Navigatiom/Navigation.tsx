import styled from "styled-components";

type NavigationPropsType = {
    navigation?: Array<string>
}

export const Navigation = (props: NavigationPropsType) => {

    if (!props.navigation || !Array.isArray(props.navigation)) {
        return null; // или можно вернуть заглушку
    }

    return (
        <Nav>
            <ul>
                {props.navigation.map((item, index) => {
                        return <li key={index}>
                            <a href="">{item}</a>
                        </li>
                    })}
            </ul>
        </Nav>
    );
};

const Nav = styled.nav`
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
`