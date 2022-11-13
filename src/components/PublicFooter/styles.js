import styled from "styled-components"
import { Link } from "react-router-dom"

export const PublicFooterWrapper = styled.footer`
    width: 100%;
    background-color: ${props => props.theme.color.black};
    padding: 30px 0;
`

export const PublicFooterContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width: 1070px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }
`
export const PublicFooterLogo = styled.div`
    display: inline-block;
`;

export const PublicFooterBox = styled.div`
    padding-top: 20px;
    a {
        text-decoration: none;
    }
    /* @media (max-width: 1070px) { */

        /* padding-left: 10px; */
        /* padding-right: 10px; */
        /* :last-child {
            width: 100%;
        } */
    /* } */
`

export const PublicFooterLink = styled(Link)`
    display: block;
    padding-bottom: 16px;
    color: ${props => props.theme.color.white};
    font-size: 2em;
    font-weight: ${props => props.theme.text.caption.font_weight};
    font-size: ${props => props.theme.text.caption.font_size};
    text-decoration: none;
    transition: all .3s;
    :hover {
        text-decoration: underline;
    }
    :last-child {
        padding-bottom: 0;
    }
`

export const PublicFooterAddress = styled.div`
    display: flex;
    gap: 8px;
    align-items: flex-start;
    margin-bottom: 16px;
    ::last-child {
        margin-bottom: 0;
    }
    img {
        margin-top: 6px;
        display: inline-block;
    }
    a {
        display: inline-block;
        color: ${props =>  props.theme.color.white};
        // font-family: ${props =>  props.theme.text.font_family};
        font-style: ${props =>  props.theme.text.font_style};
        line-height: ${props =>  props.theme.text.line_height};
        font-weight: ${props =>  props.theme.text.paragraph.font_weight};
        font-size: ${props =>  props.theme.text.paragraph.font_size};
        text-decoration: none;
        transition: all .3s;
        :hover {
            text-decoration: underline;
        }
    }
`

export const PublicFooterMessengerHeader = styled.p`
    color: ${props =>  props.theme.color.white};
    // font-family: ${props =>  props.theme.text.font_family};
    font-style: ${props =>  props.theme.text.font_style};
    line-height: ${props =>  props.theme.text.line_height};
    font-weight: ${props =>  props.theme.text.small_text_caption.font_weight};
    font-size: ${props =>  props.theme.text.small_text_caption.font_size};
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: center;
`;

export const PublicFooterMessengers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding-bottom: 30px;
    a {
        display: inline-block;
        text-decoration: none;
        img {
            display: inline-block;
        }
    }
`;

export const PublicFooterMessengerFooter = styled.p`
    color: ${props =>  props.theme.color.light_blue2};
    font-style: ${props =>  props.theme.text.font_style};
    font-family: 'Gilroy';
    font-weight: 300;
    font-size: 1.75em;
    line-height: 138%;
    letter-spacing: 0.28px;
    text-align: center;
`

export const PublicFooterNumber = styled.p`
    color: ${props =>  props.theme.color.white};
    // font-family: 'Gilroy';
    font-style: ${props =>  props.theme.text.font_style};
    line-height: ${props =>  props.theme.text.line_height};
    font-weight: ${props =>  props.theme.text.caption.font_weight};
    font-size: ${props =>  props.theme.text.caption.font_size};
    transition: all .3s;
    :hover {
        text-decoration: underline;
    }
`