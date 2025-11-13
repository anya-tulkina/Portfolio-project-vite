import styled from "styled-components";
import {Icon} from "../../icon/Icon.tsx";
import {theme} from "../../../style/Theme.tsx";
import {Container} from "../../Container.tsx";

const idSocialList = ["telegram", "instagram", "facebook"];

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterWrapper>
                    <WrapSocialLinks>
                        <TitleSocialMediaLinks>My social media links:</TitleSocialMediaLinks>
                        <SocialList>
                            {
                                idSocialList.map((item, index) => {
                                    return (
                                        <SocialItem key={index}>
                                            <SocialLink href={"#"}>
                                                <Icon width={"21px"} height={"21px"} viewBox={"0 0 30 30"}
                                                      iconId={item}/>
                                            </SocialLink>
                                        </SocialItem>
                                    )
                                })
                            }
                        </SocialList>
                    </WrapSocialLinks>
                    <WrapProjectLinks>
                        <ProjectText>More projects I’ve worked on</ProjectText>
                        <LinkProject>
                            <Icon iconId={"git-hub"} width={"21px"} height={"21px"}/>
                            <a href={"#"}> @<span>anya-tyulkina</span> on github</a>
                        </LinkProject>
                    </WrapProjectLinks>
                </FooterWrapper>
                <Copyright>© 2025 Anya Tyulkina, All Rights Reserved.</Copyright>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    min-height: 200px;
`

const FooterWrapper = styled.div`
    padding: 50px 100px;
    min-height: 150px;
    height: auto;

    display: flex;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
`
const WrapSocialLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const WrapProjectLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const TitleSocialMediaLinks = styled.span`
`

const ProjectText = styled.span`
`

const LinkProject = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 10px;
    
    
    span {
        color: darkcyan;
    }

    a {
        color: #fff;
    }
`

const SocialList = styled.ul`
    display: flex;
    justify-content: space-between;
    justify-items: flex-end;
    
`

const SocialItem = styled.li`
 align-items: flex-end;
`
const SocialLink = styled.a`
    svg {
        display: block; /* Убираем лишние отступы */
    }
`

const Copyright = styled.small`
    display: block;
    magin-bottom: auto;
`
