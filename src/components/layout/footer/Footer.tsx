import styled from "styled-components";
import {Icon} from "../../icon/icon.tsx";
import {FlexWrapper} from "../../FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column" align={"center"}>
                <Name>Anya Tyulkina</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink href={"#"}>
                            <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={"#"}>
                            <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={"#"}>
                            <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"vk"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
            </FlexWrapper>
            <Copyright>© 2023 Anya Tyulkina, All Rights Reserved.</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 20px;
    background-color: #e6b677;
`
const Name = styled.span`
    font-size: 20px;
    font-weight: bold;
`

const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`

const Copyright = styled.small`

`
