import styled from 'styled-components'
import pic from '../../images/pic.png'

export const PublicLoginWrapper = styled.div`
    width: 100%;
    padding-top: 87px;
    background-image: url(${pic});
    background-position: bottom;
    background-position: right;
    background-repeat: no-repeat;
`;

export const PublicLoginParagraph = styled.p`
    color: ${props => props.theme.color.black};
    font-style: ${props => props.theme.text.font_style};
    line-height: ${props => props.theme.text.line_height};
    font-weight: 400;
    font-size: 3em;
    margin-top: 7px;
    margin-bottom: 21px;
`;

export const PublicLoginForm = styled.div`
    max-width: 555px;
`;