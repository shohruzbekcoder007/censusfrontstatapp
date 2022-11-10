import styled from 'styled-components';
import { Link } from "react-router-dom"

export const Header = styled.header`
    width: 1140px;
    height: 100.45px;
    margin: 0 auto;
    margin-top: 27px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1140px) {
        width: 100%;
      }
`

export const HeaderLogos = styled.div`
    display: flex;
    gap: 13px;
`

export const HeaderLogo = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
`

export const HeaderNavLinks = styled.nav`

`

export const ActiveLink = styled(Link)`
    padding: 0 12px;
    font-weight: ${props => props.theme.text.heading3.font_weight};
    font-size: ${props => props.theme.text.heading3.font_size};
    color: ${props => props.theme.color.main_color};
    text-decoration: none;
`

export const UnActiveLink = styled(Link)`
    padding: 0 12px;
    font-weight: ${props => props.theme.text.heading3.font_weight};
    font-size: ${props => props.theme.text.heading3.font_size};
    color: ${props => props.theme.color.black};
    text-decoration: none;
    :hover {
        color: ${props => props.theme.color.main_color};
    }
`