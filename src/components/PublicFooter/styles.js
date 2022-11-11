import styled from "styled-components"
import { Link } from "react-router-dom"

export const PublicFooterWrapper = styled.div`
    width: 100%;
    background-color: ${props => props.theme.color.black};
    padding: 30px 0;
`

export const PublicFooterContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

export const PublicFooterBox = styled.div`
    padding-top: 20px;
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

// export const PublicFooterAddress