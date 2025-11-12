import styled from "styled-components";
import {Icon} from "../../icon/Icon.tsx";
import {FlexWrapper} from "../../FlexWrapper.tsx";
import {theme} from "../../../style/Theme.tsx";

const idSocialList = ["instagram", "telegram", "vk"]

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <span>My social media links:</span>
                <SocialList>
                    {
                        idSocialList.map((item, index) => {
                            return (
                                <SocialItem key={index}>
                                    <SocialLink href={"#"}>
                                        <Icon width={"21px"} height={"21px"} viewBox={"0 0 21 21"} iconId={item}/>
                                    </SocialLink>
                                </SocialItem>
                            )
                        })
                    }
                </SocialList>
                <LinkProject>
                    <span>More projects I’ve worked on</span>
                    <Icon iconId={"git-hub"} width={"21px"} height={"21px"}/>
                    <div>
                        <a href={"#"}> @anya-tulkina on github</a>
                    </div>
                </LinkProject>
            </FlexWrapper>
            <Copyright>© 2023 Anya Tyulkina, All Rights Reserved.</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    height: 100%;
    background-color: ${theme.colors.primaryBg};
    padding: 10px;
`
const LinkProject = styled.span`
    padding: 20px 0;
`

const SocialList = styled.ul`
    display: flex;
    gap: 40px;

    padding: 20px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`

const Copyright = styled.small`

`
