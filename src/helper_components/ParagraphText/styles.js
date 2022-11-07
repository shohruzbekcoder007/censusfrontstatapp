import styled from 'styled-components';

export const Paragraph = styled.p`
    color: #002A44;
    // font-family: ${props =>  props.theme.text.font_family};
    font-style: ${props =>  props.theme.text.font_style};
    line-height: ${props =>  props.theme.text.line_height};
    font-weight: ${props =>  props.theme.text.paragraph.font_weight};
    font-size: ${props =>  props.theme.text.paragraph.font_size};
`