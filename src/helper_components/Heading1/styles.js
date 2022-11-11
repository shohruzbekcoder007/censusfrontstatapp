import styled from 'styled-components';

export const Heading = styled.h1`
        color: ${props => props.color || props.theme.text.color};
        font-style: ${props => props.theme.text.font_style};
        line-height: ${props => props.theme.text.line_height};
        font-weight: ${props => props.theme.text.heading1.font_weight};
        font-size: ${props => props.size || props.theme.text.heading1.font_size};
        text-transform: ${props => props.theme.text.heading1.text_transform};
`;