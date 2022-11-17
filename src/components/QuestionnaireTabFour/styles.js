import styled from "styled-components"
import flag from '../../images/vector-dotted.png'

export const FinalWrapper = styled.div`
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    padding: 40px 0;
`

export const FinalContainer = styled.div`
    width: 1336px;
    margin: 0 auto;
    background-image: url(${flag});
    text-align: center;
    @media (max-width: 1920px) {
        width: 100%;
        padding: 40px 20px;
    }
`

export const FinalContent = styled.p`
    color: ${props => props.theme.color.black};
    font-style: ${props => props.theme.text.font_style};
    line-height: ${props => props.theme.text.line_height};
    font-weight: ${props => props.theme.text.big_text.font_weight};
    font-size: ${props => props.theme.text.big_text.font_size};
    text-transform: ${props => props.theme.text.big_text.text_transform};
    padding-top: 26px;
    padding-bottom: 21px;
`

export const FinalCode = styled.div`
    padding-bottom: 20px;
`;

export const FinalImg = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    padding: 0 20px;
    margin-bottom: 20px;
    img {
        width: 100%
    }
`;